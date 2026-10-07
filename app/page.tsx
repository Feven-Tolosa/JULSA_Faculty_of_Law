import Hero from '@/components/hero'
import About from '@/components/about'
import Events from '@/components/events'
import MootCourt from '@/components/mootcourt'
import Members from '@/components/members'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className='flex flex-1 flex-col bg-night-950'>
      <Hero />
      <About />
      <Events />
      <MootCourt />
      <Members />
      <Contact />
     
    </main>
  )
}