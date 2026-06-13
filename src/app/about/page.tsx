import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import OriginStory from '@/components/OriginStory'
import MissionVision from '@/components/MissionVision'
import Founder from '@/components/Founder'
import Values from '@/components/Values'
import Team from '@/components/Team'
import Expansion from '@/components/Expansion'
import CtaStrip from '@/components/CtaStrip'

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