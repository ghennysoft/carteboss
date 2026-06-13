import Navbar from '@/components/Navbar'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import WhyBOSS from '@/components/Home/WhyBOSS'
import Testimonials from '@/components/Home/Testimonials'
import ForYou from '@/components/Home/ForYou'
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