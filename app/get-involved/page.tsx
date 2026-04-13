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
  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-river-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We Need People Who Show Up
          </h1>
          <p className="text-river-200 text-lg leading-relaxed">
            This is hands-on environmental work. Volunteers haul debris,
            document conditions, and put in hours. If you&apos;re ready for real
            field work, we need you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Volunteer for Cleanups",
                description:
                  "Join our next river or estuary cleanup event. You'll work a full shift removing debris, and your participation will be documented.",
                action: "View upcoming cleanups",
                href: "/",
              },
              {
                title: "Support Operations",
                description:
                  "A $25 donation covers supplies for one volunteer at a cleanup event — bags, gloves, and coordination materials.",
                action: "donate",
                href: null,
              },
              {
                title: "Partner or Sponsor",
                description:
                  "Organizations can sponsor full cleanup events, fund equipment, or support our pilot monitoring program.",
                action: "Explore partnerships",
                href: "/partners",
              },
            ].map((item) => (
              <div key={item.title} className="card flex flex-col">
                <h3 className="text-xl font-bold text-river-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-river-700/80 text-sm leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>
                {item.action === "donate" ? (
                  <DonateButton amount={25} label="Donate $25" />
                ) : (
                  <Link href={item.href!} className="btn-secondary text-center">
                    {item.action}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="bg-sand-50 border border-sand-200 rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              What to Expect as a Volunteer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                "Physical outdoor work in Florida conditions",
                "Full shift commitment (typically 3-4 hours)",
                "Sign-in and documentation at every event",
                "Gloves, bags, and basic equipment provided",
                "Water and basic supplies at staging area",
                "Your hours and contributions logged on record",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
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
                  <span className="text-river-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-river-600 text-sm">
              This is not a walk-through or photo opportunity. We respect your
              time by making sure every shift produces tangible results.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-river-900 mb-2">
              Volunteer Signup
            </h2>
            <p className="text-river-700/80 mb-8">
              Ready to get in the field? Fill out the form below and we&apos;ll
              contact you with details on the next event.
            </p>
            <div className="max-w-2xl">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
