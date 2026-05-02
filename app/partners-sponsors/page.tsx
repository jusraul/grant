import React from "react";

export default function PartnersSponsorsPage() {
  const sponsorReasons = [
    {
      title: 'Visible Local Impact',
      description:
        'Support is tied to practical river stewardship work that communities can see and understand, including cleanup, monitoring-oriented capacity, habitat priorities, and inclusive public engagement.',
    },
    {
      title: 'Credible Public Alignment',
      description:
        'Sponsors can align with river protection, Nature Coast stewardship, and measurable public-benefit work without relying on vague environmental branding.',
    },
    {
      title: 'Community Trust',
      description:
        'Businesses and institutions that support serious stewardship work can strengthen public trust while contributing to a healthier and more resilient river system.',
    },
  ];

  const partnerReasons = [
    {
      title: 'Program Alignment',
      description:
        'Lower Withlacoochee Riverkeeper is structured to support collaboration around cleanup, monitoring readiness, habitat stewardship, education, access, and long-term conservation capacity.',
    },
    {
      title: 'Field Relevance',
      description:
        'Partnership value increases when organizations can connect resources, knowledge, field logistics, and stewardship priorities in a disciplined way.',
    },
    {
      title: 'Long-Term Utility',
      description:
        'The strongest partnerships support more than one event. They strengthen durable stewardship capacity, better river awareness, and more credible long-term conservation work.',
    },
  ];

  const sponsorLanes = [
    'Marine debris removal and shoreline cleanup',
    'Monitoring and field documentation support',
    'Habitat restoration and shoreline resilience priorities',
    'Public education and stewardship programming',
    'ADA-aware and veteran-inclusive participation pathways',
  ];

  const partnerTypes = [
    'Universities and extension programs',
    'Environmental nonprofits and coalition partners',
    'Local governments and public agencies',
    'Technical consultants and field specialists',
    'Mission-aligned businesses and community institutions',
  ];

  const supportOptions = [
    {
      title: 'Financial Sponsorship',
      text:
        'Support core program lanes, public-facing stewardship work, or specific river priorities through sponsorship funding.',
    },
    {
      title: 'In-Kind Support',
      text:
        'Provide equipment, materials, logistics, technical services, field support, or venue resources that strengthen river operations.',
    },
    {
      title: 'Program Collaboration',
      text:
        'Co-develop educational, stewardship, restoration, access, or monitoring-oriented efforts that produce stronger shared outcomes.',
    },
  ];

  const safeguards = [
    'Only represent partnerships and sponsor relationships that are real and current',
    'Avoid inflated language about scale, reach, or technical capacity',
    'Tie partnership messaging to specific program lanes and public benefit',
    'Make contact pathways simple and direct so interest does not die on the page',
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              Partners & Sponsors
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Build river protection capacity through aligned partnership and visible local support.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Lower Withlacoochee Riverkeeper is designed to work with mission-aligned partners and sponsors who want to support practical stewardship, stronger river credibility, inclusive public participation, and long-term conservation value on Florida’s Nature Coast.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why sponsors engage
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Support that connects directly to visible stewardship and public value.
            </h2>
            <div className="mt-8 grid gap-6">
              {sponsorReasons.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Why partners engage
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Collaboration works best when it strengthens real river outcomes.
            </h2>
            <div className="mt-8 grid gap-6">
              {partnerReasons.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Sponsorship lanes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Clear ways sponsors can support the work.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200 md:text-base md:leading-8">
              {sponsorLanes.map((lane) => (
                <li key={lane}>• {lane}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Partnership types
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Mission-aligned collaborators that can increase river capacity.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200 md:text-base md:leading-8">
              {partnerTypes.map((type) => (
                <li key={type}>• {type}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Ways to support
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Financial, operational, and collaborative support all matter.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {supportOptions.map((option) => (
              <article key={option.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{option.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-950/70 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Partnership discipline
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Strong alignment depends on disciplined representation.
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
            Start the conversation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Explore sponsorship or partnership with Lower Withlacoochee Riverkeeper.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            If your organization wants to support visible river stewardship, stronger field credibility,
            inclusive public participation, or long-term conservation capacity, this is the place to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Support the Mission
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
