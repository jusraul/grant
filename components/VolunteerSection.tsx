import Link from "next/link";

export default function VolunteerSection() {
  return (
    <section className="section-padding bg-river-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              This Is Real Field Work
            </h2>
            <p className="text-river-200 text-lg leading-relaxed mb-6">
              We need volunteers who are willing to get in the water, haul
              debris, and put in hours under the Florida sun. This is not
              symbolic participation — it&apos;s physical, demanding, and
              necessary work.
            </p>
            <p className="text-river-300 leading-relaxed mb-8">
              Every volunteer signs in, works a full shift, and contributes
              directly to measurable outcomes: bags of debris removed, miles of
              riverbank cleared, hours of labor documented. Your effort goes on
              the record.
            </p>
            <a href="mailto:lowerwithlacoocheeriverkeeper@gmail.com" className="btn-primary bg-white text-river-900 hover:bg-river-100">
              Sign Up to Volunteer
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                stat: "Hands-On",
                label: "Real debris removal, not desk work",
              },
              {
                stat: "Documented",
                label: "Every shift logged with sign-in sheets",
              },
              {
                stat: "Meaningful",
                label: "Direct impact on river and estuary health",
              },
              {
                stat: "Ongoing",
                label: "Regular events, consistent commitment",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-river-900/50 border border-river-800 rounded-xl p-6"
              >
                <p className="text-river-300 font-bold text-lg mb-1">
                  {item.stat}
                </p>
                <p className="text-river-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
