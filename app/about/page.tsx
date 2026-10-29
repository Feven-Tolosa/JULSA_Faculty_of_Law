import {
  ArrowIcon,
  ColumnsIcon,
  GavelIcon,
  ScalesIcon,
  UsersIcon,
} from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'

const OBJECTIVES = [
  'Promote academic excellence and support students in their legal education.',
  'Encourage legal research, writing, critical thinking, and academic engagement.',
  'Develop practical legal skills through moot courts, debate, public speaking, and advocacy.',
  'Create professional development and career opportunities for law students.',
  'Develop responsible student leadership and strengthen participation in association activities.',
  'Represent and support the interests of law students.',
  'Build meaningful connections with professionals, alumni, institutions, and organizations.',
  'Promote legal education, community engagement, and awareness of legal issues.',
  'Encourage professionalism, ethical conduct, collaboration, and innovation.',
]

const VALUES = [
  {
    icon: ScalesIcon,
    title: 'Justice',
    text: 'Standing for fairness, equality, and respect for the rule of law.',
  },
  {
    icon: GavelIcon,
    title: 'Integrity',
    text: 'Acting with honesty, responsibility, accountability, and ethical conduct.',
  },
  {
    icon: ColumnsIcon,
    title: 'Excellence',
    text: 'Pursuing high standards in academic, professional, and organizational work.',
  },
  {
    icon: UsersIcon,
    title: 'Leadership',
    text: 'Developing students who lead responsibly and contribute positively to society.',
  },
]

const ADDITIONAL_VALUES = [
  {
    title: 'Service',
    text: 'Using knowledge and skills to contribute meaningfully to the community.',
  },
  {
    title: 'Inclusion',
    text: 'Creating an environment where students can participate, contribute, and belong.',
  },
  {
    title: 'Professionalism',
    text: 'Preparing students to uphold the standards and responsibilities of the legal profession.',
  },
  {
    title: 'Innovation',
    text: 'Encouraging new ideas, approaches, and solutions to academic and professional challenges.',
  },
]

export default function AboutUs() {
  return (
    <main className='bg-night-950 text-cream-50'>
      {/* Hero */}
      <section className='relative isolate overflow-hidden border-b border-white/10'>
        {/* Jimma University background */}
        <Image
          src='/jimmauniversity.jpg'
          alt=''
          fill
          preload
          sizes='100vw'
          className='-z-10 object-cover object-center'
        />

        <div
          aria-hidden='true'
          className='absolute inset-0 -z-10 bg-gradient-to-r from-night-950/95 via-night-950/85 to-night-950/65'
        />

        <div
          aria-hidden='true'
          className='absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-gold-500/[0.08] blur-[140px]'
        />

        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent'
        />

        <div className='mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              <span className='h-1.5 w-1.5 rounded-full bg-gold-400' />
              About JULSA
            </div>

            <h1 className='mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl'>
              Building the Future of{' '}
              <span className='bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent'>
                Legal Leadership
              </span>
            </h1>

            <p className='mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/65'>
              The Jimma University Law Students&rsquo; Association is a
              student-led association dedicated to empowering law students
              through academic excellence, practical legal skills, leadership,
              professional development, advocacy, and community engagement.
            </p>

            <div className='mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/80'>
              <span>Learn</span>
              <span className='text-gold-400/30'>•</span>
              <span>Advocate</span>
              <span className='text-gold-400/30'>•</span>
              <span>Lead</span>
              <span className='text-gold-400/30'>•</span>
              <span>Serve</span>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className='relative overflow-hidden py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                01 · Our History
              </p>

              <h2 className='mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl'>
                A tradition of{' '}
                <span className='text-gold-300'>learning &amp; service.</span>
              </h2>
            </div>

            <div className='space-y-6 text-base leading-relaxed text-cream-100/65'>
              <p>
                JULSA represents a continuing tradition of law students coming
                together to participate in academic activities, student
                leadership, professional development, advocacy, and service.
              </p>

              <p>
                Over time, the association has provided a platform through which
                students can engage with legal issues, develop practical skills,
                participate in competitions and academic programs, and build
                relationships with fellow students, professionals, and alumni.
              </p>

              <p>
                Its work continues to evolve around the needs of law students
                and the wider community, with an emphasis on academic
                excellence, leadership, professionalism, and meaningful
                contribution to society.
              </p>

              <div className='rounded-2xl border border-gold-400/20 bg-white/[0.03] p-7'>
                <p className='font-display text-xl italic leading-relaxed text-gold-200'>
                  &ldquo;Once JULSA, Always Part of the Story.&rdquo;
                </p>

                <p className='mt-3 text-sm text-cream-100/45'>
                  Connecting students, leaders, and alumni across generations.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership link */}
          <div className='mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold-400/20 bg-gold-400/[0.04] p-7 sm:flex-row sm:items-center'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-gold-300'>
                Leadership
              </p>

              <h3 className='mt-2 font-display text-2xl font-bold'>
                Meet the students leading JULSA.
              </h3>

              <p className='mt-2 max-w-xl text-sm leading-relaxed text-cream-100/50'>
                Explore the executive board, department directors, and former
                leaders who serve the association.
              </p>
            </div>

            <Link
              href='/leadership'
              className='group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-6 py-3 text-sm font-semibold text-night-950 transition-all hover:scale-[1.02] hover:from-gold-200 hover:to-gold-300'
            >
              View Leadership
              <ArrowIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className='border-y border-white/10 bg-night-900 py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              02 · Objectives
            </p>

            <h2 className='mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl'>
              What JULSA{' '}
              <span className='text-gold-300'>strives to achieve.</span>
            </h2>

            <p className='mt-5 text-base leading-relaxed text-cream-100/55'>
              Our objectives guide the association&rsquo;s academic,
              professional, leadership, advocacy, and community activities.
            </p>
          </div>

          <div className='mt-14 grid gap-4 md:grid-cols-2'>
            {OBJECTIVES.map((objective, index) => (
              <div
                key={objective}
                className='group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-gold-400/30 hover:bg-white/[0.04]'
              >
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 font-display text-sm font-bold text-gold-300'>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className='pt-1 text-sm leading-relaxed text-cream-100/65'>
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              03 · Our Values
            </p>

            <h2 className='mt-5 font-display text-4xl font-bold sm:text-5xl'>
              Principles that <span className='text-gold-300'>guide us.</span>
            </h2>

            <p className='mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-100/55'>
              JULSA is guided by values that shape how we learn, lead, advocate,
              collaborate, and serve.
            </p>
          </div>

          <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {VALUES.map((value) => {
              const Icon = value.icon

              return (
                <article
                  key={value.title}
                  className='group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.04]'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-night-950'>
                    <Icon className='h-6 w-6' />
                  </div>

                  <h3 className='mt-6 font-display text-xl font-bold'>
                    {value.title}
                  </h3>

                  <p className='mt-3 text-sm leading-relaxed text-cream-100/55'>
                    {value.text}
                  </p>
                </article>
              )
            })}
          </div>

          <div className='mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {ADDITIONAL_VALUES.map((value) => (
              <article
                key={value.title}
                className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'
              >
                <h3 className='font-display text-lg font-bold text-gold-200'>
                  {value.title}
                </h3>

                <p className='mt-2 text-sm leading-relaxed text-cream-100/50'>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className='border-y border-white/10 bg-night-900 py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              04 · Organization
            </p>

            <h2 className='mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl'>
              How JULSA <span className='text-gold-300'>is organized.</span>
            </h2>

            <p className='mt-5 text-base leading-relaxed text-cream-100/55'>
              The association operates through its General Assembly and
              Executive Board, with departments supporting its academic,
              professional, advocacy, financial, and community activities.
            </p>
          </div>

          {/* Structure */}
          <div className='mt-14'>
            <div className='mx-auto max-w-md rounded-3xl border border-gold-400/30 bg-gradient-to-br from-gold-400/10 to-white/[0.02] p-8 text-center'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                Highest Authority
              </p>

              <h3 className='mt-3 font-display text-2xl font-bold'>
                General Assembly
              </h3>

              <p className='mt-3 text-sm leading-relaxed text-cream-100/50'>
                The highest decision-making body of the association.
              </p>
            </div>

            <div className='mx-auto h-12 w-px bg-gradient-to-b from-gold-400/50 to-transparent' />

            <div className='mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                Executive Leadership
              </p>

              <h3 className='mt-3 font-display text-2xl font-bold'>
                Executive Board
              </h3>

              <p className='mt-3 text-sm leading-relaxed text-cream-100/50'>
                Responsible for coordinating and implementing the
                association&rsquo;s activities and responsibilities.
              </p>

              <div className='mt-6 flex flex-wrap justify-center gap-3'>
                {['President', 'Vice President', 'Secretary General'].map(
                  (role) => (
                    <span
                      key={role}
                      className='rounded-full border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-xs font-medium text-gold-200'
                    >
                      {role}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className='border-t border-white/10 bg-night-900'>
        <div className='mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24'>
          <div className='relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-400/[0.08] via-white/[0.03] to-transparent p-8 sm:p-12 lg:p-16'>
            <div
              aria-hidden='true'
              className='absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/[0.08] blur-[90px]'
            />

            <div className='relative max-w-3xl'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                The JULSA Community
              </p>

              <h2 className='mt-5 font-display text-3xl font-bold sm:text-4xl'>
                Learn. Advocate. Lead. Serve.
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-relaxed text-cream-100/55'>
                Be part of a community committed to academic excellence,
                professional growth, leadership, advocacy, and meaningful
                service.
              </p>

              <Link
                href='/#join'
                className='group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-6 py-3 text-sm font-semibold text-night-950 transition-all hover:from-gold-200 hover:to-gold-300 hover:scale-[1.02]'
              >
                Become a Member
                <ArrowIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
