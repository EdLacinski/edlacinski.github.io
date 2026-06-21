import PageShell from '../components/layout/PageShell.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import CareerCardsSection from '../components/sections/CareerCardsSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPaths } from '../data/careerPaths.js'

function Home() {
  return (
    <PageShell>
      <HeroSection />
      <IntroSection />
      <CareerCardsSection careers={careerPaths} />
      <CalloutSection variant="home" />
    </PageShell>
  )
}

export default Home
