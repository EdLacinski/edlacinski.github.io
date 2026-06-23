import PageShell from '../components/layout/PageShell.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import CareerCardsSection from '../components/sections/CareerCardsSection.jsx'
import FeaturedProofSection from '../components/sections/FeaturedProofSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPaths } from '../data/careerPaths.js'
import { workSamples } from '../data/workSamples.js'

function Home() {
  return (
    <PageShell>
      <HeroSection />
      <CareerCardsSection careers={careerPaths} />
      <FeaturedProofSection samples={workSamples} />
      <CalloutSection variant="home" />
    </PageShell>
  )
}

export default Home
