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
  return (
    <>
      <Hero />
      <ProofSection />
      <CleanupArchive />
      <ProgramsOverview />
      <PilotMonitoringPreview />
      <SponsorTiers />
      <VolunteerSection />
    </>
  );
}
