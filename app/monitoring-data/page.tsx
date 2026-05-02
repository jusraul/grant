import React from "react";

export default function MonitoringDataPage() {
  const pillars = [
    {
      title: "Field Documentation",
      description:
        "Structured, location-aware field observations help turn river concern into usable records that can support stewardship, reporting, and future conservation action.",
    },
    {
      title: "Monitoring Readiness",
      description:
        "Monitoring capacity is being built to support stronger river awareness, more credible public communication, and better long-term program development.",
    },
    {
      title: "Public Trust",
      description:
        "Credibility grows when stewardship is paired with disciplined documentation, transparent operating posture, and measurable field relevance.",
    },
    {
      title: "Partnership Utility",
      description:
        "Well-structured observations and monitoring-oriented systems make it easier to collaborate with partners, agencies, universities, and technical advisors.",
    },
  ];

  const focusAreas = [
    {
      title: "Water Condition Awareness",
      text:
        "River and estuary stewardship require closer attention to changing field conditions, including the kinds of visible and measurable indicators that influence long-term river health and management decisions.",
    },
    {
      title: "Shoreline and Habitat Observation",
      text:
        "Field-based observations can support stronger understanding of shoreline condition, debris load, habitat stress, restoration priorities, and resilience needs over time.",
    },
    {
      title: "Geotagged Records and Time-Based Documentation",
      text:
        "Location-linked, time-aware field records improve reporting credibility and help organize observations in a more useful and defensible way.",
    },
    {
      title: "Program and Funding Support",
      text:
        "Monitoring-oriented systems do not just improve understanding. They strengthen grant readiness, partner confidence, and the quality of future stewardship decisions.",
    },
  ];

  const currentApproach = [
    "Build a disciplined field documentation structure before overstating technical capacity",
    "Use monitoring-oriented workflows to improve stewardship credibility and operating discipline",
    "Translate river observations into partner-, donor-, and grant-relevant trust assets",
    "Expand systems over time as equipment, partnerships, and proof strengthen",
  ];

  const whyItMatters = [
    {
      title: "For grantmakers",
      text:
        "Monitoring and field documentation help demonstrate seriousness, measurable relevance, and a stronger path to funded stewardship or restoration work.",
    },
    {
      title: "For partners",
      text:
        "Structured field records make collaboration easier by giving agencies, consultants, universities, and local stakeholders a clearer picture of how the organization operates.",
    },
    {
      title: "For the public",
      text:
        "Transparent, field-based stewardship builds trust and helps people understand that river protection is being approached with discipline and long-term intent.",
    },
  ];

  const safeguards = [
    "Avoid overstating active monitoring infrastructure if equipment or deployments are still developing",
    "Use clear, conservative language around current capacity and future build-out",
    "Frame documentation and monitoring as part of a growing stewardship system, not inflated technical certainty",
    "Only publish metrics, maps, or datasets that can be defended publicly",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-200">
              Monitoring & Data
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Field-based documentation and monitoring-oriented systems that strengthen river credibility.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Lower Withlacoochee Riverkeeper approaches monitoring and data as part of a disciplined stewardship system: structured field observations, location-aware documentation, and long-term capacity building that can support river protection, public trust, and stronger future restoration and funding outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why this page matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Monitoring is not just technical infrastructure. It is a trust system.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              For river organizations, disciplined field documentation and monitoring-oriented
              systems help transform scattered observations into usable records that support
              stewardship, communication, partnerships, and future conservation action.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Current approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Build credibility carefully. Do not claim more than the field can support.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                The right operating posture is not to overstate technical capacity. It is to
                build a clear field documentation system, strengthen monitoring readiness,
                and expand technical capability over time as equipment, partnerships, and
                public proof become stronger.
              </p>
              <p>
                This creates a more credible path for donors, grantmakers, public partners,
                and technical collaborators who care about river condition, stewardship discipline,
                and long-term conservation usefulness.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Operating rules
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {currentApproach.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Focus areas
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Monitoring and data framed around river stewardship needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Why support this work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Better monitoring structure improves more than data.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {whyItMatters.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Credibility safeguards
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Stronger trust comes from disciplined claims.
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
            Help strengthen monitoring credibility
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Support field documentation, monitoring readiness, and long-term river stewardship.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            Your support helps build the systems, discipline, and stewardship capacity needed
            for stronger river awareness, better reporting, and more credible long-term conservation work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Support This Work
            </a>
            <a
              href="/partners-sponsors"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Partner on Monitoring & Data
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
