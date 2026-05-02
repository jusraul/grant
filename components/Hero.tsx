import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-river-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-river-950 via-river-900 to-river-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-river-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-earth-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <p className="text-river-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Lower Withlacoochee River Keeper
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Field-Based Stewardship for Florida&apos;s{" "}
            <span className="text-river-300">Nature Coast</span>
          </h1>
          <p className="text-lg md:text-xl text-river-200 leading-relaxed mb-10 max-w-2xl">
            Documented river cleanups. Volunteer-powered field work. Honest
            environmental stewardship from the bank of the river to the edge of
            the Gulf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
              className="btn-primary bg-white text-river-900 hover:bg-river-100 text-base px-8 py-4"
            >
              Join a Cleanup
            </a>
            <Link
              href="/partners"
              className="btn-secondary border-river-400 text-river-200 hover:bg-river-800/50 text-base px-8 py-4"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
