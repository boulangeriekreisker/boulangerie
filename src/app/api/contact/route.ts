import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 2000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        ok: false,
        message: "Le formulaire doit être envoyé au format JSON.",
      },
      { status: 415 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "La requête reçue est invalide. Merci de réessayer.",
      },
      { status: 400 },
    );
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const company = String(payload.company ?? "").trim();

  if (company) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Merci, votre message a été pris en compte.",
    });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Merci de renseigner votre nom, votre email et votre message.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        message: "L'adresse email renseignée n'est pas valide.",
      },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json(
      {
        ok: false,
        message: "Votre message est trop long. Merci de raccourcir les champs saisis.",
      },
      { status: 400 },
    );
  }

  const serverToken = process.env.POSTMARK_SERVER_TOKEN;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!serverToken || !toEmail || !fromEmail) {
    console.info("contact-form-demo", {
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      mode: "demo",
      message:
        "Le formulaire est prêt. L'envoi réel s'activera dès que Postmark sera configuré.",
    });
  }

  try {
    const postmarkResponse = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": serverToken,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: toEmail,
        ReplyTo: email,
        Subject: `Nouveau message site - ${name}`,
        TextBody: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        MessageStream: "outbound",
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!postmarkResponse.ok) {
      console.error("contact-form-postmark-error", {
        status: postmarkResponse.status,
        statusText: postmarkResponse.statusText,
      });

      return NextResponse.json(
        {
          ok: false,
          message:
            "Le service d'envoi est momentanément indisponible. Merci d'appeler la boutique directement.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("contact-form-network-error", {
      error: error instanceof Error ? error.message : "unknown",
    });

    return NextResponse.json(
      {
        ok: false,
        message:
          "Le service d'envoi est momentanément indisponible. Merci d'appeler la boutique directement.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    mode: "live",
    message: "Votre message a bien été envoyé. Merci pour votre demande.",
  });
}
