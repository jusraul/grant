import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Lower Withlacoochee River Keeper — our mission, approach, and commitment to documented environmental stewardship.",
};

export default function AboutPage() {
  const principles = [
    {
      title: 'River-Specific Focus',
      description: 'Lower Withlacoochee Riverkeeper is built around river and estuary stewardship on Florida’s Nature Coast—not broad, generic environmental messaging.',
    },
    {
      title: 'Field-Based Action',
      description: 'The organization is oriented toward measurable field work, public-benefit stewardship, and long-term conservation capacity.',
    },
    {
      title: 'Inclusive Participation',
      description: 'Programs are designed to expand meaningful stewardship participation, including ADA-aware and veteran-inclusive pathways where practical and relevant.',
    },
    {
      title: 'Long-Term Stewardship',
      description: 'The goal is not one-off visibility. It is durable river protection, restoration readiness, public engagement, and institutional credibility over time.',
    },
  ];

  const operatingLanes = [
    'Marine debris removal and shoreline cleanup',
    'Water quality awareness and monitoring-oriented infrastructure',
    'Habitat restoration and shoreline resilience',
    'Environmental education and public awareness',
    'Inclusive stewardship and adaptive participation',
    'Long-term conservation capacity and strategic site relevance',
  ];

  const trustSignals = [
    { label: 'Mission posture', text: 'River and estuary relevance with field-based public benefit.', },
    { label: 'Public value', text: 'Programs framed around measurable stewardship, access, resilience, and conservation outcomes.', },
    { label: 'Partnership readiness', text: 'Structured for alignment with agencies, universities, consultants, sponsors, and community partners.', },
    { label: 'Funding logic', text: 'Program lanes that can be translated into sponsor, donor, and grant-ready cases for support.', },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              About Lower Withlacoochee Riverkeeper
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              A river-focused nonprofit built for measurable stewardship and long-term conservation.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Lower Withlacoochee Riverkeeper exists to protect and strengthen the Lower Withlacoochee River system through field-based action, public-benefit stewardship, and river-specific conservation work that can earn trust from donors, partners, agencies, and the communities this watershed serves.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Protecting the river through credible, field-based public action.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                This organization is centered on the Lower Withlacoochee River and its
                estuarine context. The mission is not abstract environmental branding. It
                is practical stewardship: cleaner shorelines, stronger monitoring capacity,
                healthier habitat conditions, more durable public engagement, and better
                long-term conservation readiness.
              </p>
              <p>
                Lower Withlacoochee Riverkeeper is being shaped to support river protection
                through programs that are credible to funders, legible to partners, and
                useful to the public. That means pairing mission language with measurable
                action, visible stewardship, and responsible operating discipline.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Core operating lanes
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {operatingLanes.map((lane) => (
                <li key={lane}>• {lane}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Designed to operate like a serious river steward, not a generic nonprofit shell.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Why this organization exists
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Because river protection needs structure, not just concern.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              River systems are shaped by long-term pressure, fragmented attention, and the
              gap between public concern and field execution. Lower Withlacoochee Riverkeeper
              is intended to narrow that gap by building stewardship capacity that can be
              seen, supported, and strengthened over time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  {signal.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{signal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Public-facing commitment
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for partnership, stewardship, and durable conservation value.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              The organization is being built to support practical collaboration with donors,
              volunteers, community members, environmental professionals, local governments,
              educational institutions, and mission-aligned partners who value river health,
              public trust, and long-term stewardship on Florida’s Nature Coast.
            </p>
            <p>
              Lower Withlacoochee Riverkeeper should be understood as a river-specific,
              field-oriented, public-benefit organization focused on outcomes that can be
              strengthened over time through support, partnership, and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-slate-950 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-950/70">
            Join the stewardship effort
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Support a stronger future for the Lower Withlacoochee River.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            Help strengthen cleanup efforts, monitoring capacity, habitat stewardship,
            inclusive participation, and long-term conservation credibility across the river system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Support the River
            </a>
            <a
              href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
