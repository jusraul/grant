import type { Metadata } from "next";
import Link from "next/link";
import DonateButton from "@/components/DonateButton";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer for river cleanups, donate to support operations, or sign up for field work with LWRK.",
};

export default function GetInvolvedPage() {
  const pathways = [
    {
      title: "Volunteer",
      description:
        "Join cleanup, stewardship, and field-support activities that create visible public benefit for the Lower Withlacoochee River.",
      href: "mailto:lowerwithlacoocheeriverkeeper@gmail.com",
      cta: "Volunteer with Us",
    },
    {
      title: "Donate",
      description:
        "Help fund cleanup, monitoring-oriented capacity, habitat priorities, and long-term stewardship work across Florida’s Nature Coast.",
      href: "/donate",
      cta: "Support the Mission",
    },
    {
      title: "Partner or Sponsor",
      description:
        "Businesses, institutions, nonprofits, and technical allies can support the mission through funding, collaboration, logistics, or in-kind resources.",
      href: "/partners-sponsors",
      cta: "Explore Partnerships",
    },
  ];

  const actionBlocks = [
    {
      title: "Field Stewardship",
      text: "Support shoreline cleanup, debris removal, and visible river stewardship that communities can understand and trust.",
    },
    {
      title: "Mission Support",
      text: "Contribute resources, skills, communications help, logistics, technical guidance, or other capacity-building support that strengthens execution.",
    },
    {
      title: "Public Awareness",
      text: "Help expand awareness of river protection, estuary stewardship, and long-term conservation needs on the Nature Coast.",
    },
    {
      title: "Inclusive Participation",
      text: "Support ADA-aware and veteran-inclusive stewardship pathways that broaden meaningful participation in public-benefit conservation work.",
    },
  ];

  const whyItMatters = [
    {
      title: "For the river",
      text: "Long-term river protection depends on more than concern. It depends on visible stewardship, stronger field discipline, and durable public support.",
    },
    {
      title: "For the community",
      text: "Meaningful involvement builds trust, awareness, and a stronger stewardship culture around the Lower Withlacoochee River system.",
    },
    {
      title: "For the organization",
      text: "A stronger support base improves execution capacity, partner confidence, and the long-term durability of cleanup, monitoring, and restoration work.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
              Get Involved
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Join the work of protecting the Lower Withlacoochee River.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              There are practical ways to support this mission: volunteer in the field,
              strengthen stewardship capacity, contribute resources, support public
              awareness, or help build the long-term conservation infrastructure this
              river system needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Contact Us to Get Involved
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Participation pathways
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Clear ways to support the mission.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pathways.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Ways to help
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Action should be useful, practical, and tied to real stewardship needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {actionBlocks.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
              >
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
              Why involvement matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Long-term river protection depends on people, not just funding.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Durable stewardship requires volunteers, supporters, visibility, trust, and
              practical community participation. A stronger support base helps Lower
              Withlacoochee Riverkeeper expand cleanup, strengthen field credibility,
              improve public awareness, and build more resilient conservation capacity
              over time.
            </p>
          </div>

          <div className="grid gap-4">
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-slate-950 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-950/70">
            Take the next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Help strengthen stewardship for the Lower Withlacoochee River.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-950/80">
            Whether you want to volunteer, contribute resources, collaborate, or support
            the mission financially, there is a practical way to help move this work
            forward.
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
              Donate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
