import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
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