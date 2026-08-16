import Hero from '@/components/home/Hero'
import VelocityMarquee from '@/components/ui/VelocityMarquee'
import Ecosystem from '@/components/home/Ecosystem'
import Services from '@/components/home/Services'
import EnclaveVaultVisualizer from '@/components/ui/EnclaveVaultVisualizer'
import ArchitectureShowcase from '@/components/home/ArchitectureShowcase'
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
      <VelocityMarquee />
      <Ecosystem />
      <Services />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <EnclaveVaultVisualizer />
        </div>
      </section>
      <ArchitectureShowcase />
      <LiveScanner />
      <Portfolio />
      <ProjectCalculator />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  )
}
