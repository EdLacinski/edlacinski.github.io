import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import WorkSamplesSection from '../components/sections/WorkSamplesSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { skillsByCareer } from '../data/skills.js'
import { projectsByCareer } from '../data/projects.js'
import { techSupportExperience, techSupportSamples } from '../data/techSupport.js'

const id = 'tech-support'

export default function TechSupport() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <SkillsSection skills={skillsByCareer[id]} title="Skills to Highlight" />
      <ExperienceSection {...techSupportExperience} title="Experience to Expand" />
      <ProjectsSection projects={projectsByCareer[id]} title="Projects & Support Examples to Add" />
      <WorkSamplesSection samples={techSupportSamples} />
      <CalloutSection />
    </PageShell>
  )
}
