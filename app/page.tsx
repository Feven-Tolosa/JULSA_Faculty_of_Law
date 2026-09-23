import Hero from '@/components/hero'
import About from '@/components/about'

export default function Home() {
  return (
    <main className='flex flex-1 flex-col bg-night-950'>
      <Hero />
      <About />
    </main>
  )
}