import { ScalesIcon } from "./icons";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Moot Court", href: "#moot-court" },
  { label: "Members", href: "#members" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="#" className="group flex items-center gap-3">
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
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-cream-100/70 transition-colors hover:text-gold-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#join"
        className="hidden rounded-full border border-gold-400/50 bg-gold-400/10 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400 hover:text-night-950 sm:inline-flex"
      >
        Join Us
      </a>
      <a
        href="#join"
        className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-xs font-semibold text-night-950 transition-colors hover:bg-gold-300 sm:hidden"
      >
        Join Us
      </a>
    </header>
  );
}