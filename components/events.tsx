import { ArrowIcon, ColumnsIcon, GavelIcon, ScalesIcon } from "./icons";

const CATEGORY_ICONS = {
  court: GavelIcon,
  debate: ColumnsIcon,
  aid: ScalesIcon,
  seminar: ColumnsIcon,
} as const;

const EVENTS = [
  {
    icon: "court",
    day: "14",
    month: "Oct",
    title: "National Moot Court Championship",
    tag: "Moot Court",
    text: "Our best advocacy team opens the internal rounds — witness the courtroom come alive.",
    location: "Moot Court Hall, Faculty of Law",
    featured: true,
  },
  {
    icon: "debate",
    day: "21",
    month: "Oct",
    title: "Constitutional Law Debate Night",
    tag: "Debate",
    text: "Students debate pressing constitutional questions in front of faculty judges.",
    location: "Room 204, Faculty of Law",
    featured: false,
  },
  {
    icon: "aid",
    day: "26",
    month: "Oct",
    title: "Community Legal Aid Clinic",
    tag: "Legal Aid",
    text: "Free legal guidance for students and the community — volunteer and serve.",
    location: "Student Center, Main Campus",
    featured: false,
  },
  {
    icon: "seminar",
    day: "04",
    month: "Nov",
    title: "Guest Lecture: ADR in Ethiopia",
    tag: "Seminar",
    text: "A leading practitioner explores arbitration and mediation in Ethiopian practice.",
    location: "Lecture Hall B",
    featured: false,
  },
] as const;

export default function Events() {
  const upcoming = EVENTS.filter((event) => event.featured);
  const regular = EVENTS.filter((event) => !event.featured);
  const [head, ...rest] = regular;

  return (
    <section
      id="events"
      className="relative isolate scroll-mt-24 overflow-hidden bg-night-900 py-24 text-cream-50 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-gold-500/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Events Calendar
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
              What&rsquo;s{" "}
              <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent">
                Happening
              </span>{" "}
              in Term One
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/60">
              Debates, clinics, moot rounds, and lectures &mdash; every week the
              Faculty of Law is alive with the pursuit of justice.
            </p>
          </div>
          <a
            href="#join"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-6 py-3 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400 hover:text-night-950"
          >
            View Full Calendar
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Featured event */}
          {upcoming.map((event) => {
            const Icon = CATEGORY_ICONS[event.icon];
            return (
              <article
                key={event.title}
                className="group relative overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-400/50 lg:p-10"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/10 blur-3xl opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-gold-400/40 bg-night-900 text-center">
                    <span className="font-display text-4xl font-bold leading-none text-gold-300">
                      {event.day}
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/60">
                      {event.month}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-200">
                      <Icon className="h-3.5 w-3.5" />
                      {event.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-cream-50">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/60">
                      {event.text}
                    </p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gold-300/80">
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#join"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-300"
                  >
                    Reserve a Seat
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#join"
                    className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-cream-100/80 transition-colors hover:border-gold-400/50 hover:text-gold-200"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            );
          })}

          {/* Regular events */}
          <div className="flex flex-col gap-4">
            {[head, ...rest].map((event) => {
              const Icon = CATEGORY_ICONS[event.icon];
              return (
                <article
                  key={event.title}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.05]"
                >
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border border-gold-400/30 bg-night-900 text-center">
                    <span className="font-display text-2xl font-bold leading-none text-gold-300">
                      {event.day}
                    </span>
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream-100/60">
                      {event.month}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-gold-300" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300/80">
                        {event.tag}
                      </span>
                    </div>
                    <h3 className="mt-1 truncate font-display text-base font-bold text-cream-50">
                      {event.title}
                    </h3>
                    <p className="mt-1 truncate text-xs text-cream-100/50">
                      {event.location}
                    </p>
                  </div>
                  <a
                    href="#join"
                    aria-label={`Reserve a seat for ${event.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream-100/70 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-night-950"
                  >
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}