import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { skillsByCareer } from '../data/skills.js'
import { experienceByCareer, projectsByCareer } from '../data/projects.js'

const id = 'hospitality'

export default function Hospitality() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <SkillsSection skills={skillsByCareer[id]} />
      <ExperienceSection experiences={experienceByCareer[id]} />
      <ProjectsSection projects={projectsByCareer[id]} />
      <CalloutSection />
    </PageShell>
  )
}
