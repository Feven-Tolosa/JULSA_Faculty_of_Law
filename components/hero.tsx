import { ScalesIcon, GavelIcon, ColumnsIcon, ArrowIcon } from './icons'

const HIGHLIGHTS = [
  {
    icon: GavelIcon,
    label: 'Moot Court',
  },
  {
    icon: ColumnsIcon,
    label: 'Academic Hub',
  },
  {
    icon: ScalesIcon,
    label: 'Advocacy',
  },
]

export default function Hero() {
  return (
    <section className='relative isolate min-h-screen overflow-hidden bg-night-950 text-cream-50'>
      {/* Backdrop */}
      <div aria-hidden='true' className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(1100px_600px_at_75%_-10%,rgba(212,175,55,0.14),transparent_60%),radial-gradient(800px_500px_at_0%_110%,rgba(29,78,216,0.12),transparent_55%)]' />

        <div className='absolute -left-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-gold-500/10 blur-[120px] animate-glow' />

        <div className='absolute -right-32 -top-24 -z-10 h-[460px] w-[460px] rounded-full bg-sky-700/15 blur-[120px]' />

        <div
          className='absolute inset-0 opacity-[0.35]'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)',
          }}
        />

        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night-950 to-transparent' />
      </div>

      {/* Giant watermark */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-10 top-24 hidden select-none font-display text-[16rem] font-bold leading-none text-white/[0.025] lg:block'
      >
        JULSA
      </div>

      {/* Main content */}
      <div className='relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-32'>
        {/* Copy */}
        <div className='flex flex-col items-start text-left'>
          {/* Organization badge */}
          <div
            className='mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 animate-fade-up'
            style={{ animationDelay: '0.05s' }}
          >
            <span className='h-1.5 w-1.5 rounded-full bg-gold-400' />
            Jimma University · Law Students&apos; Association
          </div>

          {/* Main heading */}
          <h1
            className='font-display text-5xl font-bold leading-[1.06] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl animate-fade-up'
            style={{ animationDelay: '0.15s' }}
          >
            Where We Build
            <br />
            <span className='bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent'>
              Tomorrow&apos;s
            </span>
            <br />
            Legal Minds
          </h1>

          {/* Description */}
          <p
            className='mt-7 max-w-xl text-lg leading-relaxed text-cream-100/70 animate-fade-up'
            style={{ animationDelay: '0.28s' }}
          >
            Jimma University Law Students&apos; Association is a student-led
            community dedicated to academic excellence, practical legal skills,
            leadership, professional development, advocacy, and meaningful
            engagement with society.
          </p>

          {/* CTA buttons */}
          <div
            className='mt-9 flex flex-wrap items-center gap-4 animate-fade-up'
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href='#membership'
              className='group inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-night-950 shadow-[0_0_40px_-8px_rgba(212,175,55,0.7)] transition-all hover:bg-gold-300 hover:shadow-[0_0_50px_-6px_rgba(212,175,55,0.85)]'
            >
              Become a Member
              <ArrowIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </a>

            <a
              href='#events'
              className='inline-flex items-center gap-2 rounded-full border border-cream-100/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur transition-colors hover:border-gold-400/50 hover:text-gold-200'
            >
              Explore Events
            </a>
          </div>

          {/* Mission highlights */}
          <div
            className='mt-14 grid w-full max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] py-6 backdrop-blur animate-fade-up'
            style={{ animationDelay: '0.55s' }}
          >
            <div className='px-4 text-center sm:px-7'>
              <div className='font-display text-2xl font-bold text-gold-300 sm:text-3xl'>
                Learn
              </div>
              <div className='mt-1 text-[11px] uppercase tracking-[0.14em] text-cream-100/50 sm:text-xs'>
                Academic Excellence
              </div>
            </div>

            <div className='px-4 text-center sm:px-7'>
              <div className='font-display text-2xl font-bold text-gold-300 sm:text-3xl'>
                Advocate
              </div>
              <div className='mt-1 text-[11px] uppercase tracking-[0.14em] text-cream-100/50 sm:text-xs'>
                Practical Skills
              </div>
            </div>

            <div className='px-4 text-center sm:px-7'>
              <div className='font-display text-2xl font-bold text-gold-300 sm:text-3xl'>
                Lead
              </div>
              <div className='mt-1 text-[11px] uppercase tracking-[0.14em] text-cream-100/50 sm:text-xs'>
                Student Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Visual composition */}
        <div className='relative mx-auto w-full max-w-md lg:max-w-none'>
          <div
            aria-hidden='true'
            className='absolute -inset-6 -z-10 rounded-3xl bg-gold-400/10 blur-3xl'
          />

          {/* Main emblem plaque */}
          <div className='relative rounded-3xl border border-gold-400/25 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl animate-fade-up'>
            <div className='absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent' />

            <div className='flex flex-col items-center text-center'>
              {/* Emblem */}
              <div className='flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/40 bg-night-900 text-gold-300 shadow-[0_0_50px_-10px_rgba(212,175,55,0.6)]'>
                <ScalesIcon className='h-12 w-12' />
              </div>

              <h3 className='mt-6 font-display text-2xl font-bold tracking-wide text-cream-50'>
                JULSA
              </h3>

              <p className='mt-2 text-sm uppercase tracking-[0.25em] text-gold-300/80'>
                Learn · Advocate · Lead · Serve
              </p>

              <p className='mt-6 max-w-sm text-sm leading-relaxed text-cream-100/60'>
                A student community creating opportunities for learning,
                leadership, advocacy, professional development, and meaningful
                engagement beyond the classroom.
              </p>

              {/* Focus areas */}
              <div className='mt-8 grid w-full grid-cols-3 gap-3'>
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item.label}
                    className='flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-night-900/60 px-3 py-4 transition-colors hover:border-gold-400/40'
                  >
                    <item.icon className='h-5 w-5 text-gold-300' />

                    <span className='text-[11px] font-medium uppercase tracking-wider text-cream-100/60'>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card — top right */}
          <div className='absolute -right-4 -top-8 w-52 rounded-2xl border border-white/10 bg-night-800/90 p-4 shadow-xl backdrop-blur-md animate-float lg:-right-10 lg:-top-10'>
            <div className='flex items-center gap-3'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300'>
                <GavelIcon className='h-5 w-5' />
              </span>

              <div className='min-w-0'>
                <p className='truncate text-xs font-semibold text-cream-50'>
                  Moot Court & Advocacy
                </p>

                <p className='text-[11px] text-gold-300/90'>
                  From knowledge to advocacy
                </p>
              </div>
            </div>
          </div>

          {/* Floating card — bottom left */}
          <div className='absolute -bottom-10 -left-4 w-60 rounded-2xl border border-white/10 bg-night-800/90 p-4 shadow-xl backdrop-blur-md animate-float-slow lg:-left-12'>
            <div className='flex items-center gap-3'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-300'>
                <ColumnsIcon className='h-5 w-5' />
              </span>

              <div className='min-w-0'>
                <p className='truncate text-xs font-semibold text-cream-50'>
                  Academic Hub
                </p>

                <p className='text-[11px] text-cream-100/50'>
                  Knowledge beyond the classroom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href='#about'
        className='absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/40 transition-colors hover:text-gold-300 md:flex'
      >
        <span className='text-[10px] uppercase tracking-[0.3em]'>
          Explore JULSA
        </span>

        <span className='flex h-9 w-5 items-start justify-center rounded-full border border-current p-1'>
          <span className='h-2 w-1 animate-bounce rounded-full bg-current' />
        </span>
      </a>
    </section>
  )
}
