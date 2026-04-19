import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FieldProof",
  description:
    "FieldProof is a nonprofit-led field documentation and compliance support system for environmental organizations.",
};

const features = [
  {
    title: "Photo-Verified Documentation",
    description:
      "Capture timestamped, geotagged photos in the field. Every activity is recorded with verifiable evidence.",
  },
  {
    title: "Volunteer & Crew Tracking",
    description:
      "Log attendance, hours, and crew assignments digitally. Replace paper sign-in sheets with accountable records.",
  },
  {
    title: "Compliance-Ready Reports",
    description:
      "Generate organized reports suitable for grant reporting, sponsor updates, and internal recordkeeping.",
  },
  {
    title: "Field Activity Logging",
    description:
      "Record cleanup events, monitoring visits, and stewardship activities with structured data entry.",
  },
  {
    title: "Centralized Record Storage",
    description:
      "All documentation lives in one place — accessible to your team, auditable, and backed up.",
  },
  {
    title: "Built for the Field",
    description:
      "Designed for outdoor conditions and mobile use. Works where your team actually operates.",
  },
];

const steps = [
  {
    step: "1",
    title: "Sign Up",
    description:
      "Enroll your organization in the FieldProof program and get access to the platform.",
  },
  {
    step: "2",
    title: "Document Your Work",
    description:
      "Use FieldProof in the field to log activities, capture photo evidence, and track volunteer participation.",
  },
  {
    step: "3",
    title: "Generate Reports",
    description:
      "Pull organized reports for grant compliance, sponsor updates, or internal review — all from your recorded data.",
  },
];

export default function FieldProofPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-river-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-earth-200 text-earth-800 mb-4">
            Nonprofit-Led Program
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-river-900 mb-6 tracking-tight">
            FieldProof
          </h1>
          <p className="text-lg md:text-xl text-river-700/80 leading-relaxed mb-4 max-w-2xl mx-auto">
            A field documentation and compliance support system built by a
            nonprofit, for nonprofits. Record your environmental work with
            verifiable evidence — so your impact is always on the record.
          </p>
          <p className="text-sm text-river-600 mb-10 max-w-xl mx-auto">
            FieldProof is a program of the Lower Withlacoochee River Keeper, developed
            from real field operations and documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="STRIPE_LINK_HERE"
              className="btn-primary text-base px-8 py-3.5"
            >
              Start FieldProof — $149/mo
            </a>
            <a
              href="FIELDPROOF_APP_URL"
              className="btn-secondary text-base px-8 py-3.5"
            >
              Access Platform
            </a>
          </div>
        </div>
      </section>

      {/* What Is FieldProof */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-heading">What Is FieldProof?</h2>
            <p className="section-subheading mx-auto">
              FieldProof is a nonprofit-led field documentation and compliance
              support system. It helps environmental organizations capture,
              organize, and report on their real-world work — from river
              cleanups to volunteer coordination to monitoring activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <h3 className="text-lg font-bold text-river-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-river-700/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading mx-auto">
              Simple, practical, and built for organizations doing real field
              work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-river-700 text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-river-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-river-700/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-heading">Pricing</h2>
          <p className="section-subheading mx-auto mb-10">
            One straightforward plan. No hidden fees.
          </p>
          <div className="card border-river-300">
            <p className="text-sm font-semibold text-river-600 uppercase tracking-wide mb-2">
              Monthly Program Fee
            </p>
            <p className="text-5xl font-bold text-river-900 mb-1">$149</p>
            <p className="text-river-600 text-sm mb-6">per month</p>
            <ul className="text-left text-sm text-river-700/80 space-y-3 mb-8">
              {[
                "Full platform access for your organization",
                "Photo-verified field documentation",
                "Volunteer and crew tracking",
                "Compliance-ready report generation",
                "Centralized record storage",
                "Ongoing updates and support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-river-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="STRIPE_LINK_HERE"
              className="btn-primary w-full text-base py-3.5"
            >
              Start FieldProof
            </a>
          </div>
          <p className="text-xs text-river-500 mt-6">
            FieldProof is a nonprofit-led program. Your subscription supports
            continued development and the environmental mission of the Lower
            Withlacoochee River Keeper. This is not legal, regulatory, or
            compliance advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-river-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Ready to Document Your Impact?</h2>
          <p className="section-subheading mx-auto mb-8">
            Join a growing network of environmental organizations using
            FieldProof to keep their field work on the record.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="STRIPE_LINK_HERE"
              className="btn-primary text-base px-8 py-3.5"
            >
              Start FieldProof — $149/mo
            </a>
            <a
              href="FIELDPROOF_APP_URL"
              className="btn-secondary text-base px-8 py-3.5"
            >
              Access Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
