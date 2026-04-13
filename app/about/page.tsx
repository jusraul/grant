import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Lower Withlacoochee River Keeper — our mission, approach, and commitment to documented environmental stewardship.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-river-300 text-sm font-semibold uppercase tracking-widest mb-4">
            About LWRK
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Stewardship You Can Verify
          </h1>
          <p className="text-river-200 text-lg leading-relaxed">
            The Lower Withlacoochee River Keeper is a field-focused
            environmental nonprofit operating along Florida&apos;s Nature Coast.
            We do the work, document the results, and build lasting capacity for
            river and estuary stewardship.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              What We Do
            </h2>
            <p className="text-river-700/80 leading-relaxed mb-4">
              We organize and execute documented river cleanups along the Lower
              Withlacoochee River and its estuary. Every event is recorded with
              sign-in sheets, photo evidence, and debris tallies. We engage
              volunteers for real field work — not symbolic gestures — and we are
              building a pilot water monitoring program from the ground up.
            </p>
            <p className="text-river-700/80 leading-relaxed">
              Our programs exist because the Lower Withlacoochee and its
              surrounding waterways face real, ongoing pressure from debris
              accumulation, habitat degradation, and limited stewardship
              infrastructure. We fill that gap with consistent, documented
              action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Document Everything",
                  text: "Sign-in sheets, photos, debris logs. If we did it, there's a record.",
                },
                {
                  title: "Honest Positioning",
                  text: "We state clearly what we have done and what is still in development.",
                },
                {
                  title: "Volunteer-Powered",
                  text: "Volunteers do the heavy lifting. We organize, equip, and coordinate.",
                },
                {
                  title: "Build Incrementally",
                  text: "We grow programs based on capacity, not aspirations. Pilot first, scale second.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-sand-50 border border-sand-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-river-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-river-700/80 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Where We Work
            </h2>
            <p className="text-river-700/80 leading-relaxed">
              Our primary area of operations is the Lower Withlacoochee River
              corridor in Citrus County, Florida, extending to the river&apos;s
              estuary where it meets the Gulf of Mexico. This includes
              riverbanks, tidal marshes, and the sensitive transition zones that
              define Florida&apos;s Nature Coast ecology.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.board.map((member) => (
                <div
                  key={member.name}
                  className="bg-sand-50 border border-sand-200 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-river-100 text-river-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-bold text-river-900">{member.name}</h3>
                  <p className="text-river-600 text-sm mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
