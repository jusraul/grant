"use client";

"use client";

import { useState } from "react";
import Link from "next/link";
import DonateButton from "./DonateButton";
import { siteConfig } from "@/content/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMobileMenu}
          aria-label="Go to homepage"
        >
          <div>
            <span className="block text-lg font-semibold leading-tight tracking-tight text-white">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">
              Lower Withlacoochee Riverkeeper
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-3 w-28">
            <DonateButton label="Donate" />
          </div>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 text-slate-200 transition hover:bg-white/5 md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1 px-6 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3">
              <DonateButton label="Donate" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
