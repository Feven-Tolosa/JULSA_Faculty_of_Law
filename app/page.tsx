import Hero from '@/components/hero'
import About from '@/components/about'
import Events from '@/components/events'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className='flex flex-1 flex-col bg-night-950'>
      <Hero />
      <About />
      <Events />
      <Footer />
    </main>
  )
}