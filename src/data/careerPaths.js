export const careerPaths = [
  {
    id: 'tech-support',
    number: '01',
    label: 'Tech Support',
    title: 'Tech Support Specialist',
    pageTitle: 'Tech Support',
    shortDescription: 'Clear answers, patient support, and practical fixes that keep people moving.',
    summary: 'Helping people solve technical problems with patience, clarity, and practical troubleshooting.',
  },
  {
    id: 'data-analysis',
    number: '02',
    label: 'Data Analysis',
    title: 'Data Analyst',
    pageTitle: 'Data Analysis',
    shortDescription: 'Reliable reporting and cleaner processes built from careful, useful data.',
    summary: 'Turning complex student information into accurate, reliable reporting.',
  },
  {
    id: 'hospitality',
    number: '03',
    label: 'Hospitality',
    title: 'Hospitality / Bartending',
    shortDescription: 'Fast, thoughtful service that makes busy rooms feel welcoming.',
    summary:
      'Creating a dependable guest experience through bartending, food preparation, teamwork, and calm execution in fast-paced environments.',
  },
  {
    id: 'content-creation',
    number: '04',
    label: 'Content Creation',
    title: 'Content Creator',
    shortDescription: 'Stories, streams, and events that turn a shared interest into community.',
    summary:
      'Building Eclipse Ed through TCG content, livestreaming, video production, event coverage, and community leadership—one genuine connection at a time.',
  },
]

export const careerPathById = Object.fromEntries(careerPaths.map((path) => [path.id, path]))
