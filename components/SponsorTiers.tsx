import { siteConfig } from "@/content/site";
import DonateButton from "./DonateButton";

export default function SponsorTiers() {
  return (
    <section className="section-padding bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">Support the Work</h2>
          <p className="section-subheading mx-auto">
            Sponsorship directly funds field operations — cleanup supplies,
            volunteer logistics, equipment, and our pilot monitoring program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.sponsorTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`card flex flex-col ${
                i === 1 ? "border-river-600 ring-1 ring-river-600" : ""
              }`}
            >
              {i === 1 && (
                <span className="inline-block text-xs font-bold text-river-700 uppercase tracking-wider mb-3">
                  Most Impact
                </span>
              )}
              <h3 className="text-xl font-bold text-river-900 mb-1">
                {tier.name}
              </h3>
              <p className="text-3xl font-extrabold text-river-800 mb-4">
                ${tier.amount.toLocaleString()}
              </p>
              <p className="text-river-700/80 text-sm leading-relaxed flex-1 mb-6">
                {tier.description}
              </p>
              <DonateButton amount={tier.amount} label={`Become a ${tier.name}`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-river-600">
            All contributions support 501(c)(3) operations. {/* PLACEHOLDER: Update with EIN when available */}
          </p>
        </div>
      </div>
    </section>
  );
}
