import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

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
  });

  if (!postmarkResponse.ok) {
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
