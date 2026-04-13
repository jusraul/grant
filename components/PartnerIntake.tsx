"use client";

import { useState, type FormEvent } from "react";

const PARTNER_TYPES = [
  "Sponsor",
  "Partner",
  "Research",
  "Access",
] as const;

export default function PartnerIntake() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "partner",
          name: form.get("name"),
          email: form.get("email"),
          organization: form.get("organization"),
          type: form.get("type"),
          message: form.get("message"),
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at lowerwithlacoocheeriverkeeper@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <svg
          className="w-12 h-12 text-river-600 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-river-900 mb-2">
          Thank you for reaching out.
        </h3>
        <p className="text-river-600">
          We&apos;ll review your inquiry and respond within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="partner-name"
            className="block text-sm font-semibold text-river-800 mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="partner-name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="partner-email"
            className="block text-sm font-semibold text-river-800 mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="partner-email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="partner-org"
          className="block text-sm font-semibold text-river-800 mb-1.5"
        >
          Organization
        </label>
        <input
          type="text"
          id="partner-org"
          name="organization"
          className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
          placeholder="Your organization (if applicable)"
        />
      </div>

      <div>
        <label
          htmlFor="partner-type"
          className="block text-sm font-semibold text-river-800 mb-1.5"
        >
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="partner-type"
          name="type"
          required
          className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 bg-white focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
        >
          <option value="">Select type</option>
          {PARTNER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="partner-message"
          className="block text-sm font-semibold text-river-800 mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="partner-message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent resize-y"
          placeholder="Tell us about your interest in working with LWRK"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
        {loading ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
