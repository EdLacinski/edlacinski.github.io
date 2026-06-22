export const workSamples = [
  {
    id: 'synthetic-sql-investigation',
    careerId: 'data-analysis',
    careerLabel: 'Data Analysis',
    title: 'Synthetic SQL Investigation Example',
    status: 'Available Sample',
    summary: 'A privacy-safe demonstration of isolating missing records and mismatched program statuses before reporting.',
    intro: 'This synthetic example demonstrates how I would isolate records that need review when two systems do not agree. The data uses fake IDs, generic school codes, and mock program fields.',
    scenario: 'A source system and a reporting file contain different program/status values. The goal is to identify missing records, mismatched statuses, and items that need follow-up before reporting.',
    mockData: 'Two fictional tables represent a mock student information source and a mock reporting file. Fields and identifiers are generic and do not mirror an employer dataset.',
    code: `-- Synthetic example only. Uses fake IDs and generic fields.
SELECT
  sis.student_key,
  sis.school_code,
  sis.grade_level,
  sis.program_status AS source_status,
  report.program_status AS reporting_status,
  CASE
    WHEN report.student_key IS NULL THEN 'Missing from reporting file'
    WHEN sis.program_status <> report.program_status THEN 'Status mismatch'
    ELSE 'Review'
  END AS review_flag
FROM mock_sis_students sis
LEFT JOIN mock_reporting_file report
  ON sis.student_key = report.student_key
WHERE
  report.student_key IS NULL
  OR sis.program_status <> report.program_status
ORDER BY
  review_flag,
  sis.school_code,
  sis.grade_level;`,
    sections: [
      {
        title: 'What the query checks',
        items: [
          'Joins mock SIS data to a mock reporting file.',
          'Flags records missing from the reporting file.',
          'Flags records where source and reporting statuses do not match.',
          'Creates a review list that can be checked before submission.',
        ],
      },
      {
        title: 'Review output',
        body: 'The output becomes a focused exception list rather than a full data export. Each flagged item can be researched, corrected in the appropriate source, and validated again before reporting.',
      },
    ],
    demonstrates: ['Data validation', 'Discrepancy investigation', 'SQL reasoning', 'Exception reporting', 'Reporting readiness'],
    note: 'This sample uses synthetic data and does not represent real student, staff, district, or reporting records. It is a portfolio demonstration based on the type of analysis Edward performed, not an exact query used at Interboro.',
  },
  {
    id: 'windows-troubleshooting-checklist',
    careerId: 'tech-support',
    careerLabel: 'Tech Support',
    title: 'Windows Troubleshooting Checklist',
    status: 'Available Sample',
    summary: 'A practical user-support checklist covering impact, symptoms, common checks, documentation, and escalation.',
    intro: 'This sample outlines a structured approach I use for Windows support issues: understand the user impact, verify the symptoms, check common causes, document steps, and escalate when needed.',
    sections: [
      {
        title: 'A. Confirm the issue',
        items: ['What changed recently?', 'Who is affected?', 'Is the issue blocking work?', 'Is there an error message?', 'Can the issue be reproduced?'],
      },
      {
        title: 'B. Basic checks',
        items: ['Restart or sign out and back in when appropriate.', 'Confirm power, network, display, and peripheral connections.', 'Check whether the issue is device-specific, user-specific, or application-specific.', 'Test another browser, app, profile, or device when useful.'],
      },
      {
        title: 'C. Windows tools to check',
        items: ['Settings', 'Control Panel utilities', 'Task Manager', 'Device Manager', 'Event Viewer when appropriate', 'Command Prompt basics when appropriate'],
      },
      {
        title: 'D. Document and escalate',
        items: ['Record symptoms and steps attempted.', 'Record screenshots or error messages when available.', 'Note business or classroom impact.', 'Escalate with clear reproduction steps when unresolved.'],
      },
    ],
    demonstrates: ['End-user support', 'Windows troubleshooting', 'Ticket triage', 'Documentation', 'Escalation judgment', 'User-focused communication'],
    note: 'This is an example user-support workflow. It does not contain employer ticket data and does not claim advanced systems administration.',
  },
  {
    id: 'guest-recovery-scenario',
    careerId: 'hospitality',
    careerLabel: 'Hospitality & Guest Service',
    title: 'Guest Recovery Scenario',
    status: 'Available Sample',
    summary: 'An employer-safe response flow for resolving a disrupted guest experience during a busy shift.',
    intro: 'This sample shows how I approach a guest-service issue in a high-traffic entertainment or hospitality environment: listen first, stay calm, clarify the issue, follow policy, and try to preserve the guest experience.',
    scenario: 'A guest is upset because their experience was disrupted during a busy shift. The goal is to lower the tension, understand the issue, and find a fair next step while staying within policy.',
    sections: [
      {
        title: '1. Listen and acknowledge',
        items: ['Let the guest explain the issue.', 'Avoid interrupting.', 'Acknowledge the frustration without making promises too early.'],
      },
      {
        title: '2. Clarify the problem',
        items: ['Ask what happened.', 'Confirm timing, location, and impact.', 'Identify whether this is a service, safety, timing, payment, or policy issue.'],
      },
      {
        title: '3. Check policy and options',
        items: ['Stay within company policy.', 'Offer realistic options.', 'Bring in a manager or escalation path when needed.'],
      },
      {
        title: '4. Resolve or escalate',
        items: ['Provide the next step clearly.', 'Keep the guest informed.', 'Document the issue when appropriate.'],
      },
      {
        title: '5. Reset the operation',
        items: ['Communicate with the team.', 'Fix any process issue when possible.', 'Return attention to the shift and guest flow.'],
      },
    ],
    demonstrates: ['Guest service', 'De-escalation', 'Policy awareness', 'Shift communication', 'Team support', 'High-traffic operations'],
    note: 'Edward is Pennsylvania RAMP Certified, active until July 2026, and is building toward bar-service roles. This sample reflects guest-service and operations judgment, not claimed professional bartending experience. It contains no employer-sensitive procedures.',
  },
  {
    id: 'event-community-case-study',
    careerId: 'content-creation',
    careerLabel: 'Content Creation',
    title: 'Event & Community Case Study',
    status: 'Available Sample',
    summary: 'A privacy-safe framework for planning, communicating, supporting, and following up on a TCG community event.',
    intro: 'This sample outlines how I approach a TCG community or creator event: define the goal, communicate clearly, prepare assets, support the audience, and follow up after the event.',
    sections: [
      {
        title: 'A. Goal',
        items: ['Create a clear event or content objective.', 'Make sure players, viewers, or community members know what to expect.'],
      },
      {
        title: 'B. Preparation',
        items: ['Confirm date, format, platform, and event needs.', 'Prepare announcements, graphics, talking points, or stream and video assets.', 'Coordinate with collaborators or organizers when relevant.'],
      },
      {
        title: 'C. Execution',
        items: ['Communicate updates clearly.', 'Keep the event or content flow organized.', 'Support questions from players, viewers, or community members.', 'Adjust when issues come up.'],
      },
      {
        title: 'D. Follow-up',
        items: ['Share results, a recap, or next steps.', 'Thank participants or collaborators.', 'Note improvements for the next event.', 'Convert useful moments into content when appropriate.'],
      },
    ],
    demonstrates: ['Community leadership', 'TCG event organization', 'Content planning', 'Communication', 'Audience engagement', 'Creator operations', 'Riftbound Organized Play awareness'],
    credential: 'Active Level 1 Judge through Riftbound Organized Play.',
    note: 'This portfolio example uses a generic event structure. It contains no private community, participant, partner, sponsor, or attendance information and makes no claim about unconfirmed event results.',
  },
]

export const workSampleByCareer = Object.fromEntries(workSamples.map((sample) => [sample.careerId, sample]))
