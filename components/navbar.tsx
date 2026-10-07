"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./links";
import { ScalesIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-night-950/90 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-b border-transparent bg-night-950/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-400/20">
            <ScalesIcon className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-wide text-cream-50">
              JULSA
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold-300/90">
              Faculty of Law
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={
                link.href.startsWith("#") && pathname !== "/"
                  ? `/${link.href}`
                  : link.href
              }
              className="text-sm font-medium text-cream-100/70 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={pathname === "/" ? "#join" : "/#join"}
          className="hidden shrink-0 rounded-full border border-gold-400/50 bg-gold-400/10 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400 hover:text-night-950 sm:inline-flex"
        >
          Join Us
        </Link>
        <Link
          href={pathname === "/" ? "#join" : "/#join"}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-xs font-semibold text-night-950 transition-colors hover:bg-gold-300 sm:hidden"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}