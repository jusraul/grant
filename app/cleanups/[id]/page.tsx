import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cleanups } from "@/content/cleanups";

interface CleanupPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return cleanups.map((cleanup) => ({ id: cleanup.id }));
}

export function generateMetadata({ params }: CleanupPageProps): Metadata {
  const cleanup = cleanups.find((c) => c.id === params.id);
  if (!cleanup) return { title: "Cleanup Not Found" };

  return {
    title: cleanup.title,
    description: cleanup.description,
  };
}

export default function CleanupDetailPage({ params }: CleanupPageProps) {
  const cleanup = cleanups.find((c) => c.id === params.id);

  if (!cleanup) {
    notFound();
  }

  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-river-300 text-sm hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all cleanups
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                cleanup.status === "completed"
                  ? "bg-river-400/20 text-river-200 border border-river-400/30"
                  : "bg-earth-400/20 text-earth-200 border border-earth-400/30"
              }`}
            >
              {cleanup.status === "completed" ? "Completed" : "Upcoming"}
            </span>
            <span className="text-river-300 text-sm">{cleanup.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {cleanup.title}
          </h1>
          <p className="text-river-300 text-lg">{cleanup.location}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Event Summary
            </h2>
            <p className="text-river-700/80 leading-relaxed">
              {cleanup.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Attendance Documentation
            </h2>
            <div className="bg-sand-50 border border-sand-200 rounded-xl p-6">
              <p className="text-river-700/80 text-sm leading-relaxed">
                {cleanup.attendanceNote}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-river-900 mb-4">
              Work Performed
            </h2>
            <ul className="space-y-3">
              {cleanup.workPerformed.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-river-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-sand-200">
            <p className="text-river-600 text-sm mb-6">
              Want to participate in a future cleanup event?
            </p>
            <a href="mailto:lowerwithlacoocheeriverkeeper@gmail.com" className="btn-primary">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
