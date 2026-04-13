import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "LWRK operates four core programs: river cleanups, estuary stewardship, pilot water monitoring, and volunteer engagement.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-river-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Programs
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Field Work. Documentation. Results.
          </h1>
          <p className="text-river-200 text-lg leading-relaxed">
            Everything we do is built around showing up, doing the work, and
            keeping a record of it. These are our active programs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {siteConfig.programs.map((program, i) => (
            <div
              key={program.title}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${
                i > 0 ? "pt-16 border-t border-sand-200" : ""
              }`}
            >
              <div className="lg:col-span-2">
                <span className="text-sm font-semibold text-river-500 uppercase tracking-wider">
                  Program {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-bold text-river-900 mt-2">
                  {program.title}
                </h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-river-700/80 leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="text-river-700 font-semibold text-sm hover:text-river-500 transition-colors inline-flex items-center gap-1"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
