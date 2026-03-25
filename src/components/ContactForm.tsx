"use client";

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

      const payload = (await response.json()) as {
        ok: boolean;
        mode?: "live" | "demo";
        message: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "Une erreur est survenue.");
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
    <form className="form-grid" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="field field--hidden">
        <label htmlFor="company">Entreprise</label>
        <input autoComplete="off" id="company" name="company" tabIndex={-1} type="text" />
      </div>

      <label className="field" htmlFor="name">
        <span>Nom</span>
        <input id="name" name="name" placeholder="Votre nom" required type="text" />
      </label>

      <label className="field" htmlFor="email">
        <span>Email</span>
        <input
          id="email"
          name="email"
          placeholder="vous@example.com"
          required
          type="email"
        />
      </label>

      <label className="field field--full" htmlFor="message">
        <span>Message</span>
        <textarea
          id="message"
          name="message"
          placeholder="Bonjour, je souhaite vous contacter au sujet de..."
          required
          rows={6}
        />
      </label>

      <div className="field-actions">
        <button className="button button--primary" disabled={state.kind === "sending"} type="submit">
          {state.kind === "sending" ? "Envoi..." : "Envoyer le message"}
        </button>
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
