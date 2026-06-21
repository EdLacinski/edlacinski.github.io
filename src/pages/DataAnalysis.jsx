import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import DataHighlightsSection from '../components/sections/DataHighlightsSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import CaseStudySection from '../components/sections/CaseStudySection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import WorkSamplesSection from '../components/sections/WorkSamplesSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { skillsByCareer } from '../data/skills.js'
import { dataAnalysisExperience, projectsByCareer } from '../data/projects.js'
import { dataAnalysisHighlights, truancyCaseStudy, dataAnalysisSamples } from '../data/dataAnalysis.js'

const id = 'data-analysis'

export default function DataAnalysis() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <DataHighlightsSection {...dataAnalysisHighlights} />
      <SkillsSection skills={skillsByCareer[id]} title="Skills to Highlight" />
      <ExperienceSection {...dataAnalysisExperience} title="Experience to Expand" />
      <CaseStudySection caseStudy={truancyCaseStudy} />
      <ProjectsSection projects={projectsByCareer[id]} title="Projects & Initiatives I Led or Supported" />
      <WorkSamplesSection samples={dataAnalysisSamples} />
      <CalloutSection />
    </PageShell>
  )
}
