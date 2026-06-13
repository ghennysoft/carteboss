import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyBOSS from '@/components/WhyBOSS'
import Testimonials from '@/components/Testimonials'
import ForYou from '@/components/ForYou'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyBOSS />
        <Testimonials />
        <ForYou />
      </main>
      <Footer />
    </>
  )
}