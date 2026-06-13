import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/About/PageHero'
import OriginStory from '@/components/About/OriginStory'
import MissionVision from '@/components/About/MissionVision'
import Founder from '@/components/About/Founder'
import Values from '@/components/About/Values'
import Team from '@/components/About/Team'
import Expansion from '@/components/About/Expansion'
import CtaStrip from '@/components/About/CtaStrip'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero />
        <OriginStory />
        <MissionVision />
        <Founder />
        <Values />
        <Team />
        <Expansion />
        <CtaStrip />
      </main>
      <Footer />
    </>
  )
}