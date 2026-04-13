import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Water Monitoring",
  description:
    "LWRK's pilot water monitoring program — an early-stage initiative to establish baseline water quality observations along the Lower Withlacoochee.",
};

export default function PilotMonitoringPage() {
  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-earth-400/20 text-earth-300 border border-earth-400/30">
              Pilot Stage
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Water Monitoring Program
          </h1>
          <p className="text-river-200 text-lg leading-relaxed">
            An early-stage initiative to establish baseline water quality
            observations along key points of the Lower Withlacoochee River.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-earth-50 border border-earth-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-earth-900 mb-3">
              Important: This Program Is in Pilot Phase
            </h2>
            <p className="text-earth-800/80 leading-relaxed">
              We want to be transparent about where this program stands. Our
              water monitoring initiative is currently in early development. We
              are not yet producing regulatory-grade data, and we have not yet
              published monitoring results. What follows is a description of
              what we are building and why — not a claim of existing capability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              What We&apos;re Building
            </h2>
            <p className="text-river-700/80 leading-relaxed mb-4">
              The goal of this program is to develop a credible, repeatable
              water monitoring protocol for the Lower Withlacoochee River. Over
              time, we aim to track basic water quality parameters at consistent
              locations, building a dataset that can inform stewardship
              decisions and support future research partnerships.
            </p>
            <p className="text-river-700/80 leading-relaxed">
              We are starting small: identifying appropriate sampling sites,
              acquiring monitoring equipment, and developing standard operating
              procedures that volunteers can be trained to follow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Current Status
            </h2>
            <div className="space-y-4">
              {[
                {
                  phase: "Protocol Development",
                  status: "In progress",
                  detail:
                    "Developing standard procedures for water sample collection and basic quality observations.",
                },
                {
                  phase: "Site Identification",
                  status: "In progress",
                  detail:
                    "Identifying and evaluating potential monitoring locations along the Lower Withlacoochee.",
                },
                {
                  phase: "Equipment Acquisition",
                  status: "Underway",
                  detail:
                    "Sourcing and acquiring basic water quality monitoring instruments and supplies.",
                },
                {
                  phase: "Research Partnerships",
                  status: "Seeking",
                  detail:
                    "Actively seeking partnerships with academic institutions and qualified researchers.",
                },
                {
                  phase: "Data Collection",
                  status: "Not yet started",
                  detail:
                    "Formal data collection has not begun. No published monitoring data is available at this time.",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="card flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="sm:w-48 flex-shrink-0">
                    <p className="font-bold text-river-900">{item.phase}</p>
                    <p className="text-xs text-earth-600 font-semibold uppercase tracking-wider">
                      {item.status}
                    </p>
                  </div>
                  <p className="text-river-700/80 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              How You Can Help
            </h2>
            <p className="text-river-700/80 leading-relaxed mb-6">
              This program needs support to move forward — funding for
              equipment, technical guidance from qualified researchers, and
              volunteers willing to be trained in monitoring protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/partners" className="btn-primary">
                Support This Program
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Volunteer for Monitoring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
