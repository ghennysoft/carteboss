import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyBOSS from '@/components/WhyBOSS'
import Testimonials from '@/components/Testimonials'
import ForYou from '@/components/ForYou'

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