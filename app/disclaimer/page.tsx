import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Disclaimer | JULSA",
  description:
    'Important disclaimer regarding the relationship between JULSA and Jimma University.',
}

const SECTIONS = [
  {
    number: '01',
    title: 'Educational & Informational Purpose',
    paragraphs: [
      'The information provided on this website is for general educational and informational purposes only. JULSA is an independent student organization dedicated to the professional development of law students.',
      'While we strive to ensure the accuracy of the information provided, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.',
    ],
  },
  {
    number: '02',
    title: 'No Legal Advice',
    paragraphs: [
      'Nothing on this website should be construed as professional legal advice. The content is created by law students and is intended for academic debate, advocacy, and community building.',
      'If you require legal assistance, please consult a qualified attorney or the appropriate legal aid services.',
    ],
  },
  {
    number: '03',
    title: 'External Links',
    paragraphs: [
      'This website may contain links to external websites that are not provided or maintained by or in any way affiliated with JULSA. Please note that JULSA does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.',
    ],
  },
  {
    number: '04',
    title: 'Intellectual Property',
    paragraphs: [
      'The content, layout, design, data, and graphics on this website are protected by intellectual property laws. Unless otherwise stated, JULSA owns the intellectual property rights for all material on the website. All intellectual property rights are reserved.',
    ],
  },
]

export default function DisclaimerPage() {
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

        <div className='mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-8 lg:pb-20 lg:pt-40'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
              <span className='h-1.5 w-1.5 rounded-full bg-gold-400' />
              Legal Notice
            </div>

            <h1 className='mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl'>
              Disclaimer
            </h1>

            <p className='mt-5 text-sm uppercase tracking-[0.18em] text-cream-100/45'>
              Last updated: November 4, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className='relative py-14 lg:py-16'>
        <div className='mx-auto max-w-4xl px-6 sm:px-8'>
          <div className='relative overflow-hidden rounded-2xl border border-gold-400/25 bg-gold-400/[0.06] p-7 sm:p-9'>
            <div
              aria-hidden='true'
              className='absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/[0.08] blur-[70px]'
            />

            <div className='relative flex gap-4'>
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300'>
                <AlertTriangle className='h-5 w-5' />
              </span>

              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-300'>
                  Important Notice
                </p>

                <p className='mt-3 text-base leading-relaxed text-cream-100/75'>
                  All content, posts, announcements, and materials on this
                  website reflect the views and activities of the Jimma
                  University Law Students&rsquo; Association (JULSA) and do not
                  represent or speak on behalf of Jimma University or the Faculty
                  of Law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className='pb-20 lg:pb-24'>
        <div className='mx-auto max-w-4xl px-6 sm:px-8'>
          <div className='divide-y divide-white/10 border-y border-white/10'>
            {SECTIONS.map((section) => (
              <article key={section.number} className='py-9'>
                <div className='flex flex-col gap-4 sm:flex-row sm:gap-8'>
                  <p className='shrink-0 font-display text-sm font-bold text-gold-300/80'>
                    {section.number}
                  </p>

                  <div>
                    <h2 className='font-display text-2xl font-bold text-cream-50'>
                      {section.title}
                    </h2>

                    <div className='mt-4 space-y-4 text-sm leading-relaxed text-cream-100/60'>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className='mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-7'>
            <p className='text-sm leading-relaxed text-cream-100/60'>
              If you have any specific questions about any legal matter, you
              should check with the university administration or the relevant
              department directly.
            </p>

            <Link
              href='/contact'
              className='group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200'
            >
              Contact JULSA
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
