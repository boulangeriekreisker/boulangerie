"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type ContactState =
  | { kind: "idle"; message: string }
  | { kind: "sending"; message: string }
  | { kind: "success"; message: string }
  | { kind: "demo"; message: string }
  | { kind: "error"; message: string };

const initialState: ContactState = { kind: "idle", message: "" };

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({
      kind: "sending",
      message: "Envoi en cours...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
          company: String(formData.get("company") ?? ""),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok: boolean;
        mode?: "live" | "demo";
        message: string;
      } | null;

      if (!payload || !response.ok || !payload.ok) {
        throw new Error(payload?.message || "Une erreur est survenue. Merci de réessayer.");
      }

      setState({
        kind: payload.mode === "demo" ? "demo" : "success",
        message: payload.message,
      });
      form.reset();
    } catch (error) {
      setState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "L'envoi du message a échoué. Merci de réessayer.",
      });
    }
  }

  return (
    <form aria-busy={state.kind === "sending"} className="form-grid" onSubmit={handleSubmit}>
      <div className="field field--hidden" hidden>
        <label htmlFor="company">Ne pas remplir ce champ</label>
        <input
          autoComplete="off"
          id="company"
          name="company"
          type="text"
        />
      </div>

      <div className="field">
        <label htmlFor="name">Nom</label>
        <input
          autoComplete="name"
          id="name"
          maxLength={120}
          minLength={2}
          name="name"
          placeholder="Marie Dupont…"
          required
          type="text"
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="email"
          id="email"
          inputMode="email"
          maxLength={160}
          name="email"
          placeholder="bonjour@exemple.fr…"
          required
          spellCheck={false}
          type="email"
        />
      </div>

      <div className="field field--full">
        <label htmlFor="message">Message</label>
        <textarea
          autoComplete="off"
          id="message"
          maxLength={2000}
          minLength={10}
          name="message"
          placeholder="Bonjour, je souhaite vous contacter au sujet de votre boulangerie…"
          required
          rows={6}
        />
      </div>

      <div className="field-actions">
        <button className="button button--primary" disabled={state.kind === "sending"} type="submit">
          {state.kind === "sending" ? "Envoi…" : "Envoyer le message"}
        </button>
        <p className="form-note">
          En envoyant ce message, vous acceptez le traitement de vos coordonnées pour recevoir une
          réponse. Consultez la{" "}
          <Link className="text-link" href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </div>

      <div aria-live="polite" className="form-status">
        {state.kind === "success" ? (
          <p className="alert alert--success">{state.message}</p>
        ) : null}
        {state.kind === "demo" ? <p className="alert alert--info">{state.message}</p> : null}
        {state.kind === "error" ? <p className="alert alert--error">{state.message}</p> : null}
      </div>
    </form>
  );
}
