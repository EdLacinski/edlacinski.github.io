import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import ExperienceProfilesSection from '../components/sections/ExperienceProfilesSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import WorkSamplesSection from '../components/sections/WorkSamplesSection.jsx'
import ProofSampleSection from '../components/sections/ProofSampleSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { skillsByCareer } from '../data/skills.js'
import { projectsByCareer } from '../data/projects.js'
import { techSupportExperience, techSupportSamples } from '../data/techSupport.js'
import { experienceByPage } from '../data/experience.js'
import { workSampleByCareer } from '../data/workSamples.js'

const id = 'tech-support'

export default function TechSupport() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <ExperienceProfilesSection experiences={experienceByPage[id]} />
      <SkillsSection skills={skillsByCareer[id]} title="Skills to Highlight" />
      <ExperienceSection {...techSupportExperience} title="Experience in Practice" />
      <ProjectsSection projects={projectsByCareer[id]} title="Support Experience & Practical Examples" />
      <ProofSampleSection sample={workSampleByCareer[id]} />
      <WorkSamplesSection samples={techSupportSamples} intro={careerPathById[id].workSampleIntro} />
      <CalloutSection career={careerPathById[id]} />
    </PageShell>
  )
}
