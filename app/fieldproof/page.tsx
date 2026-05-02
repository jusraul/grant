import React from "react";

export default function FieldProofPage() {
  const pillars = [
    {
      title: 'Structured Field Capture',
      description: 'FieldProof is designed to capture location-aware, time-based, and photo-supported records that improve how field work is documented, organized, and communicated.',
    },
    {
      title: 'Evidence Discipline',
      description: 'Required fields, validation logic, and consistent record structure help reduce weak documentation and create more usable field evidence over time.',
    },
    {
      title: 'Reporting Utility',
      description: 'The system is built to turn field activity into structured records and report-ready outputs that support stewardship, grants, and partner communication.',
    },
    {
      title: 'Operational Credibility',
      description: 'FieldProof strengthens public-facing seriousness by showing that river work is being documented with greater structure, consistency, and traceability.',
    },
  ];

  const useCases = [
    {
      title: 'Shoreline Cleanup Documentation',
      text: 'Capture geotagged and time-based records that support cleanup verification, stewardship reporting, and stronger public trust around field work.',
    },
    {
      title: 'Water and Field Condition Observations',
      text: 'Organize river and estuary observations into structured records that are more useful for communication, stewardship planning, and future monitoring development.',
    },
    {
      title: 'Habitat and Restoration Site Records',
      text: 'Document site condition, restoration priorities, and field activity in a way that creates more durable institutional memory and stronger reporting value.',
    },
    {
      title: 'Grant-Supporting Evidence Workflows',
      text: 'Improve the quality of documentation available for proposals, updates, and stewardship reporting where disciplined field records increase credibility.',
    },
  ];

  const valueBlocks = [
    {
      title: 'For Lower Withlacoochee Riverkeeper',
      text: 'FieldProof helps create a stronger documentation backbone for cleanup, monitoring-oriented work, restoration planning, and public stewardship programs.',
    },
    {
      title: 'For partners and sponsors',
      text: 'The system provides clearer field visibility and better reporting structure, which can improve alignment, trust, and confidence in how work is being tracked.',
    },
    {
      title: 'For long-term scale',
      text: 'FieldProof is also part of the organization’s broader capacity-building strategy, creating infrastructure that can support future collaboration, funding, and product development.',
    },
  ];

  const safeguards = [
    'FieldProof supports structured documentation and reporting but does not claim legal compliance, regulatory approval, or certification',
    'Outputs should be reviewed before use in grant, legal, or regulatory contexts',
    'System usefulness depends on disciplined field input and accurate on-site use',
    'Documentation structure improves credibility, but it does not replace professional or agency validation where required',
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              FieldProof
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              A structured field evidence system built for stronger river stewardship and reporting.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              FieldProof is Lower Withlacoochee Riverkeeper’s field documentation system for capturing location-aware, time-based, and photo-supported records that improve cleanup reporting, monitoring-oriented workflows, habitat documentation, and long-term stewardship credibility across the river system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Ask About FieldProof
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Support the System
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Core system pillars
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built to turn field work into more credible, usable records.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Where it is useful
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              FieldProof supports real river work, not abstract software use.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why this matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Better documentation strengthens more than recordkeeping.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              River organizations need more than concern and activity. They need usable,
              organized, and defensible records that improve communication, support stronger
              stewardship decisions, and help funders or partners understand what is actually
              happening in the field.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {valueBlocks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-950/70 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Credibility safeguards
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built to support disciplined documentation, not inflated claims.
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
            {safeguards.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-slate-950 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-950/70">
            Support stronger field evidence
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Help strengthen the systems behind river stewardship and reporting.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            FieldProof supports how cleanup, monitoring-oriented work, habitat documentation,
            and stewardship activity are captured and communicated. Supporting the system helps
            strengthen the mission it serves.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Support the Mission
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
