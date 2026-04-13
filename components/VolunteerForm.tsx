"use client";

import { useState, type FormEvent } from "react";

export default function VolunteerForm() {
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
          formType: "volunteer",
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please email us directly at lowerwithlacoocheeriverkeeper@gmail.com"
      );
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
          Thanks for signing up.
        </h3>
        <p className="text-river-600">
          We&apos;ll be in touch with details on upcoming events.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="vol-name"
            className="block text-sm font-semibold text-river-800 mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="vol-name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="vol-email"
            className="block text-sm font-semibold text-river-800 mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="vol-email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="vol-phone"
          className="block text-sm font-semibold text-river-800 mb-1.5"
        >
          Phone
        </label>
        <input
          type="tel"
          id="vol-phone"
          name="phone"
          className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent"
          placeholder="(optional)"
        />
      </div>

      <div>
        <label
          htmlFor="vol-message"
          className="block text-sm font-semibold text-river-800 mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="vol-message"
          name="message"
          required
          rows={3}
          className="w-full px-4 py-2.5 border border-sand-300 rounded-lg text-river-900 placeholder:text-river-400 focus:outline-none focus:ring-2 focus:ring-river-500 focus:border-transparent resize-y"
          placeholder="Tell us about your availability and interest"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary disabled:opacity-50"
      >
        {loading ? "Sending…" : "Sign Up to Volunteer"}
      </button>
    </form>
  );
}
