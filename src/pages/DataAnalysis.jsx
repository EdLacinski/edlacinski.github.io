import PageShell from '../components/layout/PageShell.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import DataHighlightsSection from '../components/sections/DataHighlightsSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import ExperienceProfilesSection from '../components/sections/ExperienceProfilesSection.jsx'
import CaseStudySection from '../components/sections/CaseStudySection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import WorkSamplesSection from '../components/sections/WorkSamplesSection.jsx'
import CalloutSection from '../components/sections/CalloutSection.jsx'
import { careerPathById } from '../data/careerPaths.js'
import { dataAnalysisExperience, projectsByCareer } from '../data/projects.js'
import { dataAnalysisHighlights, truancyCaseStudy, dataAnalysisSamples } from '../data/dataAnalysis.js'
import { experienceByPage } from '../data/experience.js'

const id = 'data-analysis'

export default function DataAnalysis() {
  return (
    <PageShell variant="career">
      <IntroSection career={careerPathById[id]} />
      <ExperienceProfilesSection experiences={experienceByPage[id]} />
      <DataHighlightsSection {...dataAnalysisHighlights} />
      <ExperienceSection {...dataAnalysisExperience} title="Experience in Practice" />
      <CaseStudySection caseStudy={truancyCaseStudy} />
      <ProjectsSection projects={projectsByCareer[id]} title="Projects & Initiatives I Led or Supported" />
      <WorkSamplesSection samples={dataAnalysisSamples} intro={careerPathById[id].workSampleIntro} />
      <CalloutSection career={careerPathById[id]} />
    </PageShell>
  )
}
