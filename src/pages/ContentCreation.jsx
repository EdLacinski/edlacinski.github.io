import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ExperienceProfilesSection from '../components/sections/ExperienceProfilesSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import PlatformsSection from '../components/sections/PlatformsSection.jsx'
import ProofSampleSection from '../components/sections/ProofSampleSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { skillsByCareer } from '../data/skills.js'
import { projectsByCareer } from '../data/projects.js'
import { creatorPlatforms } from '../data/platforms.js'
import { experienceByPage } from '../data/experience.js'
import { workSampleByCareer } from '../data/workSamples.js'

const id = 'content-creation'

export default function ContentCreation() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <ExperienceProfilesSection experiences={experienceByPage[id]} />
      <SkillsSection skills={skillsByCareer[id]} title="Skills to Highlight" />
      <ProjectsSection projects={projectsByCareer[id]} title="Projects I Led" />
      <ProofSampleSection sample={workSampleByCareer[id]} />
      <PlatformsSection platforms={creatorPlatforms} />
      <CalloutSection career={careerPathById[id]} />
    </PageShell>
  )
}
