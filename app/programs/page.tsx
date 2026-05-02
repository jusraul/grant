import React from 'react';
import DonateButton from '@/components/DonateButton';

// ProgramsPage component added
export default function ProgramsPage() {
  const programs = [
    {
      title: 'Marine Debris Removal',
      summary:
        'Targeted shoreline cleanup and debris removal designed to reduce visible pollution, improve river condition, and strengthen stewardship visibility across the Lower Withlacoochee system.',
      includes: [
        'Shoreline cleanup operations',
        'Debris removal logistics and volunteer coordination',
        'Tracked stewardship activity for public-facing reporting',
      ],
      whyItMatters:
        'Debris removal is one of the fastest, most visible ways to produce real river benefit while demonstrating community engagement and responsible field execution.',
    },
    {
      title: 'Water Monitoring & Field Documentation',
      summary:
        'Monitoring-oriented infrastructure and field documentation workflows built to strengthen water quality awareness, river condition visibility, and long-term restoration readiness.',
      includes: [
        'Structured field observations',
        'GPS- and timestamp-oriented documentation workflows',
        'Monitoring support architecture for future data credibility',
      ],
      whyItMatters:
        'Monitoring credibility helps funders, agencies, and partners take the organization seriously and supports more durable decision-making over time.',
    },
    {
      title: 'Habitat Restoration & Shoreline Resilience',
      summary:
        'River and estuary-focused stewardship that supports shoreline condition, habitat function, and practical restoration readiness in vulnerable or strategic areas.',
      includes: [
        'Shoreline condition prioritization',
        'Restoration-oriented project framing',
        'Long-term resilience and conservation positioning',
      ],
      whyItMatters:
        'Restoration and resilience work translate river concern into durable ecological value and stronger long-term funding logic.',
    },
    {
      title: 'Education & Public Stewardship',
      summary:
        'Public-facing programming that builds awareness, expands stewardship participation, and strengthens the long-term human infrastructure needed to protect the river.',
      includes: [
        'Community stewardship engagement',
        'Environmental awareness and outreach',
        'Volunteer activation around river-specific priorities',
      ],
      whyItMatters:
        'Conservation durability depends on public awareness, public participation, and a stronger stewardship base over time.',
    },
    {
      title: 'ADA-Friendly & Veteran-Inclusive Participation',
      summary:
        'Inclusive stewardship pathways designed to make river protection more accessible, more representative, and more meaningful for people who are often under-included in field programs.',
      includes: [
        'ADA-aware public program design',
        'Veteran participation pathways where mission-aligned',
        'Inclusive stewardship framing for public and funding relevance',
      ],
      // whyItMatters removed
    },
    {
      title: 'Long-Term Conservation Capacity',
      summary:
        'Organizational and field capacity building that supports future monitoring, restoration, stewardship, partnerships, and strategic river protection opportunities.',
      includes: [
        'Program structure for growth',
        'Partnership-ready operating posture',
        'Long-term river protection capacity building',
      ],
      whyItMatters:
        'Strong river organizations are not built on isolated events. They are built on repeatable capacity, credible structure, and sustained operational readiness.',
    },
  ];

  const fundingLenses = [
    {
      title: 'Why donors support this',
      text: 'The work is visible, local, river-specific, and connected to practical stewardship outcomes that people can understand and trust.',
    },
    {
      title: 'Why sponsors support this',
      text: 'The programs create public-facing community value while aligning brands with cleanup, restoration, stewardship, and Florida Nature Coast credibility.',
    },
    {
      title: 'Why grantmakers support this',
      text: 'The work fits restoration, education, monitoring, resilience, accessibility, and community-stewardship funding lanes when backed by proof and disciplined execution.',
    },
  ];

  const buildNow = [
    'Cleanup operations with visible public value',
    'Monitoring-oriented documentation and field systems',
    'Fundable habitat and shoreline resilience program framing',
    'Inclusive public engagement pathways that expand stewardship participation',
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              Programs
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              River programs structured for action, credibility, and long-term conservation value.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Lower Withlacoochee Riverkeeper’s programs are designed to move beyond broad environmental messaging into fundable, measurable operating lanes that serve the river, strengthen stewardship capacity, and build long-term public value across Florida’s Nature Coast.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Program model
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built around river-specific operating lanes, not generic nonprofit categories.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                These programs are intended to support practical stewardship on the Lower
                Withlacoochee River through visible action, monitoring-oriented field work,
                habitat and shoreline focus, inclusive public participation, and long-term
                conservation capacity.
              </p>
              <p>
                Each lane is designed to be legible to donors, useful to partners, and
                matchable to future sponsorship and grant opportunities without inflating
                claims beyond current proof.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Priority build-now lanes
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {buildNow.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Operating lanes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The work broken into clear, fundable, partner-ready categories.
            </h2>
          </div>

          <div className="mt-10 grid gap-6">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">{program.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                      {program.summary}
                    </p>
                    {/* Why it matters section removed */}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                      Program components
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                      {program.includes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Funding fit
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Programs positioned for donor, sponsor, and grant alignment.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {fundingLenses.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-slate-950 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-950/70">
            Support river-focused action
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Help fund cleanup, monitoring capacity, restoration, and inclusive stewardship.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            Support programs designed to create visible public value, stronger stewardship,
            and a more durable future for the Lower Withlacoochee River system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="w-full md:w-auto">
              <DonateButton label="Donate Now" />
            </div>
            <a
              href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Partner or Sponsor This Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
