'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Reveal from '@/components/reveal'

type Leader = {
  role: string
  name: string
  image?: string
  description: string
  email?: string
  linkedin?: string
}

type DepartmentMember = {
  role: string
  name: string
  image?: string
}

type Department = {
  name: string
  members: DepartmentMember[]
}

const CURRENT_EXECUTIVES: Leader[] = [
  {
    role: 'President',
    name: 'Segni Niguse',
    image: '/image/leadership/Segni.jpg',
    description: 'Current President of the Jimma University Law Students’ Association.',
  },
  {
    role: 'Vice President',
    name: 'Amanuel Abera',
    image: '/image/leadership/Amanuel.jpg',
    description: 'Vice President of JULSA, supporting the association’s programs and initiatives.',
  },
  {
    role: 'General Secretary',
    name: 'Saron Berhanu',
    image: '/image/leadership/Saron.jpg',
    description: 'General Secretary of JULSA, coordinating records and association communication.',
  },
]

const FORMER_EXECUTIVES: Leader[] = [
  {
    role: 'Founder & Former President',
    name: 'Natan Tadese',
    image: '/image/leadership/presidentNatan.jpg',
    description: 'Founder and former president of JULSA.',
  },
  {
    role: 'Vice President',
    name: 'Tolera Dufera',
    image: '/image/leadership/Tolera.jpg',
    description: 'Former president of JULSA.',
  },
  {
    role: 'Former President',
    name: 'Abdulfettah Bushura',
    image: '/image/leadership/Abdulfettah.jpg',
    description: 'Former president of JULSA.',
  },
  {
    role: 'Former President',
    name: 'Amir Jihad',
    image: '/image/leadership/Amir.jpg',
    description: 'Former president of JULSA.',
  },
]

const DEPARTMENTS: Department[] = [
  {
    name: 'Advocacy',
    members: [
      {
        role: 'Director',
        name: 'Kalkidan Melaku',
        image: '/image/leadership/Kalkidan.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Abdiyom Bekele',
        image: '/image/leadership/Abdiyom.jpg',
      },
    ],
  },
  {
    name: 'Academic Affairs & Peer Mentorship',
    members: [
      {
        role: 'Director',
        name: 'Mikiyas Nigussie',
        image: '/image/leadership/Mikiyas.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Asrat',
        image: '/image/leadership/Asrat.jpg',
      },
    ],
  },
  {
    name: 'Event Planning',
    members: [
      {
        role: 'Director',
        name: 'Mintesnot Habtu',
        image: '/image/leadership/Mintesnot.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Beamlak',
        image: '/image/leadership/Bamlak.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Neima Umer',
        image: '/image/leadership/Neima.jpg',
      },
    ],
  },
  {
    name: 'Alumni Network',
    members: [
      {
        role: 'Director',
        name: 'Ababo Kebede',
        image: '/image/leadership/Ababo.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Meshan Teshome',
        image: '/image/leadership/Meshan.jpg',
      },
    ],
  },
  {
    name: 'Career Development',
    members: [
      {
        role: 'Director',
        name: 'Mihret Melese',
        image: '/image/leadership/Mehret.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Hilaria Anteneh',
        image: '/image/leadership/Hilaria.jpg',
      },
    ],
  },
  {
    name: 'Social Inclusion',
    members: [
      {
        role: 'Director',
        name: 'Habtamu',
        image: '/image/leadership/Habtamu.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Bahiru Lema',
        image: '/image/leadership/Bahiru.jpg',
      },
    ],
  },
  {
    name: 'Finance & Fundraising',
    members: [
      {
        role: 'Director',
        name: 'Lidia Esayas',
        image: '/image/leadership/Lidya.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Eyob Gudeta',
      },
    ],
  },
  {
    name: 'Moot Court & Legal Advocacy',
    members: [
      {
        role: 'Director',
        name: 'Tsinat Diro',
        image: '/image/leadership/Tsinat.jpg',
      },
      {
        role: 'Vice Director',
        name: 'Ruhama Yesuf',
        image: '/image/leadership/Ruhama.jpg',
      },
    ],
  },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden='true'
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z' />
    </svg>
  )
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

function contactHref(leader: Leader) {
  return leader.email ? `mailto:${leader.email}` : '/contact'
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className='group relative flex h-full w-full max-w-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-gold-400/5'>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'
      />

      <div className='relative aspect-square overflow-hidden bg-night-900'>
        {leader.image ? (
          <Image
            src={leader.image}
            alt={`${leader.name} - ${leader.role}`}
            fill
            sizes='(max-width: 640px) 90vw, 300px'
            className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
          />
        ) : (
          <span className='flex h-full w-full items-center justify-center bg-gradient-to-br from-night-800 to-night-900 font-display text-5xl font-bold text-gold-300/70'>
            {initials(leader.name)}
          </span>
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent' />
      </div>

      <div className='relative z-10 -mt-14 flex flex-1 flex-col p-6'>
        <span className='mx-auto inline-block rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-night-950'>
          {leader.role}
        </span>

        <h3 className='mt-3 text-center font-display text-xl font-bold text-cream-50'>
          {leader.name}
        </h3>

        <p className='mx-auto mt-2 max-w-[240px] text-center text-sm leading-relaxed text-cream-100/55'>
          {leader.description}
        </p>

        <div className='mt-5 flex justify-center gap-2.5'>
          <Link
            href={contactHref(leader)}
            aria-label={`Contact ${leader.name}`}
            className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-cream-100/60 transition-colors hover:bg-gold-400 hover:text-night-950'
          >
            <Mail className='h-4 w-4' />
          </Link>

          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${leader.name} on LinkedIn`}
              className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-cream-100/60 transition-colors hover:bg-gold-400 hover:text-night-950'
            >
              <LinkedInIcon className='h-4 w-4' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function TeamCard({ member }: { member: DepartmentMember }) {
  return (
    <article className='group relative w-[160px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.05] sm:w-[190px] lg:w-[200px]'>
      <div className='relative aspect-square overflow-hidden bg-night-900'>
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            fill
            sizes='200px'
            className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
          />
        ) : (
          <span className='flex h-full w-full items-center justify-center bg-gradient-to-br from-night-800 to-night-900 font-display text-3xl font-bold text-gold-300/70'>
            {initials(member.name)}
          </span>
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent' />
      </div>

      <div className='relative z-10 -mt-10 p-3'>
        <p className='mx-auto w-fit max-w-full rounded bg-night-950/70 px-1.5 py-0.5 text-center text-[9px] font-medium uppercase tracking-[0.1em] text-gold-300/90'>
          {member.role}
        </p>

        <h4 className='mt-1.5 truncate text-center font-display text-sm font-bold text-cream-50'>
          {member.name}
        </h4>

        <Link
          href='/contact'
          aria-label={`Contact JULSA about ${member.name}`}
          className='mx-auto mt-2 flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06] text-cream-100/60 transition-colors hover:bg-gold-400 hover:text-night-950'
        >
          <Mail className='h-3 w-3' />
        </Link>
      </div>
    </article>
  )
}

export default function LeadershipContent() {
  const [activeTab, setActiveTab] = useState<'current' | 'former'>('current')

  return (
    <main className='bg-night-950 text-cream-50'>
      {/* Hero */}
      <section className='relative isolate overflow-hidden border-b border-white/10'>
        <div
          aria-hidden='true'
          className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.10),transparent_60%)]'
        />

        <div
          aria-hidden='true'
          className='absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(212,175,55,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.18)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]'
        />

        <div
          aria-hidden='true'
          className='absolute -right-32 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-gold-500/[0.08] blur-[140px]'
        />

        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent'
        />

        <div className='mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-8 lg:pb-24 lg:pt-40'>
          <Reveal className='mx-auto max-w-3xl text-center'>
            <div className='inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              <span className='h-1.5 w-1.5 rounded-full bg-gold-400' />
              JULSA Leadership
            </div>

            <h1 className='mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl'>
              Our{' '}
              <span className='bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent'>
                Leadership
              </span>
            </h1>

            <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/60'>
              Meet the dedicated students driving the Jimma University Law
              Students&rsquo; Association forward with vision, integrity, and a
              shared passion for justice.
            </p>

            <div className='mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/80'>
              <span>Learn</span>
              <span className='text-gold-400/30'>•</span>
              <span>Advocate</span>
              <span className='text-gold-400/30'>•</span>
              <span>Lead</span>
              <span className='text-gold-400/30'>•</span>
              <span>Serve</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tabs + content */}
      <section className='relative py-10 lg:py-14'>
        <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-8'>
          <div
            role='tablist'
            aria-label='Leadership terms'
            className='flex gap-1 border-b border-white/10'
          >
            {[
              { id: 'current' as const, label: 'Current Executives' },
              { id: 'former' as const, label: 'Former Executives' },
            ].map((tab) => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type='button'
                  role='tab'
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-3 text-sm font-medium transition-colors sm:px-6 ${
                    isActive
                      ? 'text-gold-300'
                      : 'text-cream-100/50 hover:text-cream-100'
                  }`}
                >
                  {tab.label}

                  {isActive && (
                    <span className='absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-gold-300 to-gold-400' />
                  )}
                </button>
              )
            })}
          </div>

          <div
            key={activeTab}
            id={`panel-${activeTab}`}
            role='tabpanel'
            aria-labelledby={`tab-${activeTab}`}
            className='animate-fade-up pt-10'
          >
            {activeTab === 'current' ? (
              <>
                <section className='pb-14'>
                  <div className='text-center'>
                    <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                      Executive Board
                    </p>

                    <h2 className='mt-3 font-display text-3xl font-bold sm:text-4xl'>
                      JULSA 2026 Executives
                    </h2>

                    <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/50'>
                      The executive officers guiding the association&rsquo;s
                      academic, advocacy, and community work this term.
                    </p>
                  </div>

                  <div className='mt-12 flex flex-wrap justify-center gap-8'>
                    {CURRENT_EXECUTIVES.map((leader, index) => (
                      <Reveal
                        key={`${leader.role}-${leader.name}`}
                        delay={index * 0.08}
                        direction='scale'
                        className='w-full max-w-[300px]'
                      >
                        <LeaderCard leader={leader} />
                      </Reveal>
                    ))}
                  </div>
                </section>

                <section className='rounded-3xl border border-white/10 bg-night-900/70 p-6 sm:p-10'>
                  <div className='text-center'>
                    <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                      Working Committees
                    </p>

                    <h2 className='mt-3 font-display text-3xl font-bold sm:text-4xl'>
                      Sections &amp; Teams
                    </h2>

                    <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/50'>
                      Directors and vice directors leading JULSA&rsquo;s
                      departments and programs.
                    </p>
                  </div>

                  <div className='mt-12 space-y-12'>
                    {DEPARTMENTS.map((department) => (
                      <div key={department.name}>
                        <div className='flex items-center justify-center gap-4'>
                          <span
                            aria-hidden='true'
                            className='h-px w-8 bg-gradient-to-r from-transparent to-gold-400/40'
                          />

                          <h3 className='text-center font-display text-xl font-semibold text-cream-50'>
                            {department.name}
                          </h3>

                          <span
                            aria-hidden='true'
                            className='h-px w-8 bg-gradient-to-l from-transparent to-gold-400/40'
                          />
                        </div>

                        <div className='mt-6 flex flex-wrap justify-center gap-4'>
                          {department.members.map((member) => (
                            <TeamCard
                              key={`${member.role}-${member.name}`}
                              member={member}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <section className='pb-8'>
                <div className='text-center'>
                  <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                    Past Leadership
                  </p>

                  <h2 className='mt-3 font-display text-3xl font-bold sm:text-4xl'>
                    The leaders who came before
                  </h2>

                  <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/50'>
                    JULSA honors the founders, presidents, and executives whose
                    service shaped the association into what it is today.
                  </p>
                </div>

                <div className='mt-12 flex flex-wrap justify-center gap-8'>
                  {FORMER_EXECUTIVES.map((leader, index) => (
                    <Reveal
                      key={`${leader.role}-${leader.name}`}
                      delay={index * 0.08}
                      direction='scale'
                      className='w-full max-w-[300px]'
                    >
                      <LeaderCard leader={leader} />
                    </Reveal>
                  ))}
                </div>

                <div className='mx-auto mt-12 max-w-3xl rounded-2xl border border-gold-400/20 bg-gold-400/[0.04] p-7 text-center'>
                  <p className='font-display text-lg italic leading-relaxed text-gold-200'>
                    &ldquo;Once JULSA, Always Part of the Story.&rdquo;
                  </p>

                  <p className='mt-3 text-sm text-cream-100/45'>
                    Connecting students, leaders, and alumni across generations.
                  </p>
                </div>
              </section>
            )}
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
                Lead, advocate, and serve with us.
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-relaxed text-cream-100/55'>
                Have a question for the leadership team or want to get involved?
                Reach out and become part of the work.
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                <Link
                  href='/contact'
                  className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-6 py-3 text-sm font-semibold text-night-950 transition-all hover:scale-[1.02] hover:from-gold-200 hover:to-gold-300'
                >
                  Contact Leadership
                  <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>

                <Link
                  href='/members'
                  className='inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-6 py-3 text-sm font-semibold text-gold-200 transition-all hover:border-gold-400/60 hover:bg-gold-400/10'
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
