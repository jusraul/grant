"use client";

import { useState } from "react";
import Link from "next/link";
import DonateButton from "./DonateButton";
import { siteConfig } from "@/content/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <span className="text-lg font-bold text-river-900 leading-tight block">
                {siteConfig.shortName}
              </span>
              <span className="text-xs text-river-600 hidden sm:block">
                Lower Withlacoochee River Keeper
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-river-800 hover:text-river-600 hover:bg-river-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 w-28">
              <DonateButton label="Donate" />
            </div>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-river-800 hover:bg-river-50 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-sand-200 bg-white" aria-label="Mobile navigation">
          <div className="px-6 py-4 space-y-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-base font-medium text-river-800 hover:bg-river-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 w-full">
              <DonateButton label="Donate" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
