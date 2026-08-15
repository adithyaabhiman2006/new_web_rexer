import Hero from '@/components/home/Hero'
import Ecosystem from '@/components/home/Ecosystem'
import Services from '@/components/home/Services'
import LiveScanner from '@/components/home/LiveScanner'
import Portfolio from '@/components/home/Portfolio'
import ProjectCalculator from '@/components/home/ProjectCalculator'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Services />
      <LiveScanner />
      <Portfolio />
      <ProjectCalculator />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  )
}
