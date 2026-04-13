import Link from "next/link";
import { cleanups } from "@/content/cleanups";

export default function CleanupArchive() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-heading">Documented Cleanup Work</h2>
          <p className="section-subheading">
            Every cleanup is recorded with sign-in sheets, photo evidence, and
            debris tallies. This is the work — documented and verifiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cleanups.map((cleanup) => (
            <Link
              key={cleanup.id}
              href={`/cleanups/${cleanup.id}`}
              className="card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    cleanup.status === "completed"
                      ? "bg-river-100 text-river-800"
                      : "bg-earth-100 text-earth-800"
                  }`}
                >
                  {cleanup.status === "completed" ? "Completed" : "Upcoming"}
                </span>
                <span className="text-sm text-river-600">{cleanup.date}</span>
              </div>

              <h3 className="text-xl font-bold text-river-900 group-hover:text-river-700 transition-colors mb-2">
                {cleanup.title}
              </h3>

              <p className="text-sm text-river-600 mb-3">{cleanup.location}</p>

              <p className="text-river-700/80 text-sm leading-relaxed mb-4">
                {cleanup.description}
              </p>

              <div className="flex items-center text-river-600 text-sm font-medium">
                <span>View Details</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
