"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "Learning paths", href: "#paths" },
  { label: "Creators", href: "#creators" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8">
      <div className="relative">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/6 px-3 py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-4">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
          />

          <Logo light />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/4 p-1 lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium whitespace-nowrap text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#courses"
              aria-label="Search courses"
              className="hidden size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white lg:grid"
            >
              <Search size={15} />
            </Link>
            <Link
              href="#"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap text-white/70 transition hover:bg-white/10 hover:text-white lg:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="group hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold whitespace-nowrap text-ink transition hover:bg-white sm:inline-flex"
            >
              Get started
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-40 mt-2 animate-menu lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-soft backdrop-blur-xl"
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <ArrowRight size={15} className="text-white/30" />
                </Link>
              ))}
              <div className="mt-1 border-t border-white/10 pt-1">
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  Sign in
                  <ArrowRight size={15} className="text-white/30" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
