import Hero from "@/components/Hero";
import CleanupArchive from "@/components/CleanupArchive";
import VolunteerSection from "@/components/VolunteerSection";
import SponsorTiers from "@/components/SponsorTiers";
import { siteConfig } from "@/content/site";
import Link from "next/link";

function ProofSection() {
  const proofs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Documented Cleanup Work",
      description:
        "Every event includes sign-in sheets, photo evidence, and debris tallies. Our work is on the record.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Volunteer Participation Recorded",
      description:
        "We track attendance and log hours. Volunteers are accountable, and their contributions are recognized.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ),
      title: "Photo Evidence of Debris Removal",
      description:
        "Before-and-after photos, debris type identification, and volume records accompany every operation.",
    },
  ];

  return (
    <section className="section-padding bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">Proof, Not Promises</h2>
          <p className="section-subheading mx-auto">
            We document everything we do. Here&apos;s what that looks like.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((item) => (
            <div key={item.title} className="card text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-river-100 text-river-700 mb-5">
                {item.icon}
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
  );
}

function ProgramsOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-heading">What We Do</h2>
          <p className="section-subheading">
            Four active programs, each grounded in field work and documentation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {siteConfig.programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="card group"
            >
              <h3 className="text-xl font-bold text-river-900 group-hover:text-river-700 transition-colors mb-3">
                {program.title}
              </h3>
              <p className="text-river-700/80 text-sm leading-relaxed">
                {program.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PilotMonitoringPreview() {
  return (
    <section className="section-padding bg-river-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-earth-200 text-earth-800 mb-4">
              Pilot Stage
            </span>
            <h2 className="section-heading">Water Monitoring Program</h2>
            <p className="text-river-700/80 leading-relaxed mb-4">
              We are developing an early-stage water monitoring initiative along
              the Lower Withlacoochee. This program is currently in pilot phase
              — we are establishing protocols, identifying sampling points, and
              building toward consistent baseline observations.
            </p>
            <p className="text-river-600 text-sm leading-relaxed mb-6">
              <strong>Honest positioning:</strong> This is not yet a
              comprehensive monitoring program. We do not currently produce
              regulatory-grade data. Our goal is to build a credible foundation
              for future water quality tracking in collaboration with qualified
              partners.
            </p>
            <Link href="/pilot-monitoring" className="btn-secondary">
              Learn About the Pilot Program
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-sand-200 p-8 shadow-sm">
            <h3 className="font-bold text-river-900 mb-4">Current Status</h3>
            <ul className="space-y-3">
              {[
                "Protocol development in progress",
                "Sampling sites being identified",
                "Equipment acquisition underway",
                "Seeking research partnerships",
                "No published data at this stage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-earth-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-river-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const impactStats = [
    {
      value: 'Field-Based',
      label: 'River work grounded in measurable action, not generic advocacy.',
    },
    {
      value: 'Nature Coast',
      label: 'Focused on the Lower Withlacoochee River and estuarine transition zones.',
    },
    {
      value: 'ADA-Aware',
      label: 'Programs designed to expand inclusive participation in stewardship.',
    },
  ];

  const programs = [
    {
      title: 'Marine Debris Removal',
      description: 'Targeted shoreline cleanup and debris removal that improves river condition, public access, and habitat quality.',
      points: [
        'Shoreline cleanup operations',
        'Debris tracking and removal logging',
        'Volunteer and sponsor activation',
      ],
    },
    {
      title: 'Water Monitoring',
      description: 'Field-based observation and monitoring infrastructure to strengthen river awareness, decision-making, and future restoration capacity.',
      points: [
        'GPS-tagged field records',
        'Structured observation workflows',
        'Monitoring-ready program framing',
      ],
    },
    {
      title: 'Habitat & Shoreline Resilience',
      description: 'River and estuary-focused stewardship work that supports shoreline condition, habitat function, and long-term resilience.',
      points: [
        'Site-based restoration priorities',
        'Shoreline condition focus',
        'Conservation capacity building',
      ],
    },
    {
      title: 'Inclusive Stewardship',
      description: 'ADA-aware and veteran-inclusive public participation designed to widen meaningful access to environmental stewardship.',
      points: [
        'Accessible public programming',
        'Veteran participation pathways',
        'Community stewardship engagement',
      ],
    },
  ];

  const trustSignals = [
    'River- and estuary-specific mission focus',
    'Field-based program structure',
    'Sponsor- and partner-ready framing',
    'Monitoring and restoration credibility architecture',
  ];

  const actions = [
    {
      title: 'Support the Work',
      description: 'Help fund measurable cleanup, monitoring, restoration, and inclusive stewardship on Florida’s Nature Coast.',
      cta: 'Donate',
      href: '/donate',
    },
    {
      title: 'Partner With Us',
      description: 'Align your organization, business, school, or institution with river protection and field-based public benefit.',
      cta: 'View Partnerships',
      href: '/partners-sponsors',
    },
    {
      title: 'Join the Mission',
      description: 'Volunteer, collaborate, or participate in stewardship programs that strengthen long-term conservation capacity.',
      cta: 'Get Involved',
      href: '/get-involved',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              Lower Withlacoochee Riverkeeper
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Protecting the Lower Withlacoochee River Through Measurable Action.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              We strengthen river and estuary stewardship through field-based action, shoreline cleanup, monitoring-oriented infrastructure, habitat-focused restoration priorities, and inclusive public participation across Florida’s Nature Coast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.paypal.com/ncp/payment/SMCHXWDE8843G"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Support the River
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Programs
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Why this matters
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                A healthier river requires more than awareness.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Funders, sponsors, and partners respond to organizations that can show
                field relevance, public benefit, and operational seriousness. This work is
                designed to move from concern to measurable stewardship.
              </p>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Current priorities
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>• Marine debris removal and shoreline cleanup</li>
                <li>• Water quality awareness and monitoring capacity</li>
                <li>• Habitat restoration and shoreline resilience</li>
                <li>• ADA-friendly and veteran-inclusive stewardship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Programs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Structured for stewardship, funding, and long-term river protection.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Lower Withlacoochee Riverkeeper should present programs as fundable,
              measurable operating lanes—not broad environmental intentions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{program.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-200">
                  {program.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Monitoring & trust
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Credibility comes from field discipline.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Monitoring, field documentation, and structured observations are not side
              features. They are the trust layer that supports donor confidence, grant
              competitiveness, and institutional partnerships.
            </p>
            <a
              href="/monitoring-data"
              className="mt-6 inline-flex items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-400/20"
            >
              Explore Monitoring & Data
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Take action
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built to convert concern into support, participation, and partnership.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {actions.map((action) => (
              <div key={action.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{action.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{action.description}</p>
                <a
                  href={action.href}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  {action.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-slate-950 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-950/70">
            Support measurable river protection
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Help protect the Lower Withlacoochee River through real field-based work.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            Your support helps fund cleanup, monitoring capacity, restoration priorities,
            and inclusive stewardship that strengthens long-term conservation on Florida’s
            Nature Coast.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Donate Now
            </a>
            <a
              href="/partners-sponsors"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-950/20 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/30"
            >
              Become a Partner or Sponsor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
