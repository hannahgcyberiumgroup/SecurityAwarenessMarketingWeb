"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com",
  "yahoo.com", "yahoo.co.uk", "yahoo.fr", "yahoo.de", "yahoo.es",
  "yahoo.it", "yahoo.co.jp", "yahoo.com.au", "yahoo.ca",
  "hotmail.com", "hotmail.co.uk", "hotmail.fr", "hotmail.de", "hotmail.es", "hotmail.it",
  "outlook.com", "outlook.co.uk", "outlook.fr", "outlook.de",
  "live.com", "live.co.uk", "live.fr",
  "msn.com",
  "icloud.com", "me.com", "mac.com",
  "aol.com",
  "protonmail.com", "proton.me",
  "tutanota.com", "tuta.io",
  "mail.com",
  "yandex.com", "yandex.ru",
  "gmx.com", "gmx.de", "gmx.net",
]);

function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? PERSONAL_EMAIL_DOMAINS.has(domain) : false;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-surface p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Thank You!</h3>
        <p className="mt-2 text-foreground">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitError("");

        const data = new FormData(e.currentTarget);
        const email = data.get("email") as string;

        if (isPersonalEmail(email)) {
          setEmailError("Please use your work email address.");
          return;
        }

        setLoading(true);
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              email,
              company: data.get("company"),
              subject: data.get("subject"),
              message: data.get("message"),
            }),
          });

          if (res.ok) {
            setSubmitted(true);
          } else {
            const json = await res.json();
            setSubmitError(json.error ?? "Something went wrong. Please try again.");
          }
        } catch {
          setSubmitError("Could not reach the server. Please try again.");
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
          Work Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={() => { if (emailError) setEmailError(""); }}
          className={`w-full rounded-lg border bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:ring-1 ${
            emailError
              ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30"
              : "border-white/10 focus:border-accent/50 focus:ring-accent/50"
          }`}
          placeholder="you@company.com"
        />
        {emailError && (
          <p className="mt-1.5 text-xs text-red-400">{emailError}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white">
          Company <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-white">
          Subject <span className="text-accent">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="demo">Demo Request</option>
          <option value="pricing">Pricing Question</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50 resize-none"
          placeholder="How can we help?"
        />
      </div>

      {submitError && (
        <p className="text-sm text-red-400">{submitError}</p>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
