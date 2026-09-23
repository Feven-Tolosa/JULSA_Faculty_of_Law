import { ColumnsIcon, GavelIcon, ScalesIcon, UsersIcon } from "./icons";

const PILLARS = [
  {
    icon: GavelIcon,
    title: "Moot Court",
    text: "Train for national and international advocacy competitions through rigorous simulated trials.",
  },
  {
    icon: ScalesIcon,
    title: "Community Legal Aid",
    text: "Offer free legal guidance and frontline support to communities around Jimma.",
  },
  {
    icon: ColumnsIcon,
    title: "Research & Seminars",
    text: "Publish student journals and host talks that deepen understanding of Ethiopian law.",
  },
  {
    icon: UsersIcon,
    title: "Leadership & Mentorship",
    text: "Grow the next generation of advocates through peer mentorship and student leadership.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-night-950 py-24 text-cream-50 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold-500/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              About JULSA
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent">
                Argument
              </span>
              , Scholarship &amp; Service
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-100/70">
              The Jimma University Law Students&rsquo; Association is the
              student body of the Faculty of Law &mdash; a community of young
              advocates who believe the law is a force for dignity, fairness,
              and change.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/60">
              From moot court finals to community legal clinics, we create the
              spaces where students practise the craft of law, sharpen their
              voices, and contribute to the legal landscape of Ethiopia.
            </p>

            <div className="mt-10 rounded-2xl border border-gold-400/25 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 backdrop-blur">
              <p className="font-display text-xl italic leading-relaxed text-gold-200">
                &ldquo;Equity, justice and truth shall be the guiding star of
                everything we study, advocate, and build.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-400/60" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-cream-100/50">
                  Our Mission
                </span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-night-950">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-cream-50">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/60">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}