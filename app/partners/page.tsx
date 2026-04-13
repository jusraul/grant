import type { Metadata } from "next";
import PartnerIntake from "@/components/PartnerIntake";
import SponsorTiers from "@/components/SponsorTiers";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with LWRK — sponsor cleanups, support pilot monitoring, or collaborate on research and access for the Lower Withlacoochee.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="section-padding bg-river-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-river-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Partnerships
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Fund the Field Work
          </h1>
          <p className="text-river-200 text-lg leading-relaxed">
            Sponsorship and partnerships directly fund cleanup operations,
            volunteer logistics, and the development of our pilot monitoring
            program. Every dollar goes toward documented, verifiable
            environmental work.
          </p>
        </div>
      </section>

      <SponsorTiers />

      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h2 className="section-heading">Partner Inquiry</h2>
            <p className="section-subheading">
              Interested in sponsoring, partnering, or collaborating? Fill out
              the form below and we&apos;ll be in touch.
            </p>
          </div>
          <PartnerIntake />
        </div>
      </section>
    </>
  );
}
