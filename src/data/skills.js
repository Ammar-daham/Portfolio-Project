// Percentages drive the current progress bars; the skills section
// switches to tags (with a `core` flag, no percentages) when it is rebuilt.
export const skillGroups = [
  {
    title: 'Front-End',
    skills: [
      { skill: 'JavaScript', progress: 90 },
      { skill: 'TypeScript', progress: 70 },
      { skill: 'React', progress: 80 },
      { skill: 'React Native', progress: 80 },
      { skill: 'Vue.js', progress: 80 },
      { skill: 'FreeMarker', progress: 70 },
      { skill: 'HTML5', progress: 90 },
      { skill: 'CSS', progress: 90 },
      { skill: 'Material UI', progress: 100 },
      { skill: 'Bootstrap', progress: 100 },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      { skill: 'Java', progress: 90 },
      { skill: 'Python', progress: 50 },
      { skill: 'Node.js', progress: 90 },
      { skill: 'Express', progress: 90 },
      { skill: 'C++', progress: 50 },
      { skill: 'REST API', progress: 100 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { skill: 'SQL', progress: 80 },
      { skill: 'PostgreSQL', progress: 80 },
      { skill: 'MongoDB', progress: 80 },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { skill: 'Docker', progress: 60 },
      { skill: 'CI/CD', progress: 70 },
    ],
  },
  {
    title: 'Others',
    skills: [
      { skill: 'Linux', progress: 90 },
      { skill: 'Git', progress: 90 },
      { skill: 'Agile Methodologies', progress: 70 },
      { skill: 'Scrum', progress: 80 },
      { skill: 'UML', progress: 70 },
      { skill: 'Jira', progress: 100 },
    ],
  },
]
