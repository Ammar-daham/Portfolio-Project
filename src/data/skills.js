export const skillGroups = [
  {
    title: { en: 'Languages', fi: 'Ohjelmointikielet', ar: 'لغات البرمجة' },
    skills: [
      { name: 'Java', core: true },
      { name: 'JavaScript', core: true },
      { name: 'TypeScript', core: true },
      { name: 'SQL' },
      { name: 'Python', core: true },
    ],
  },
  {
    title: { en: 'Front end', fi: 'Frontend', ar: 'الواجهات الأمامية' },
    skills: [
      { name: 'React', core: true },
      { name: 'Next.js' },
      { name: 'Vue.js', core: true },
      { name: 'React Native' },
      { name: 'Redux' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Sass' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'Bootstrap', core: true },
    ],
  },
  {
    title: { en: 'Back end', fi: 'Backend', ar: 'الواجهات الخلفية' },
    skills: [
      { name: 'Spring Boot', core: true },
      { name: 'Node.js' },
      { name: 'Express' },
      {
        name: {
          en: 'REST APIs',
          fi: 'REST-rajapinnat',
          ar: 'REST APIs',
        },
        core: true,
      },
      { name: 'GraphQL' },
      { name: 'FreeMarker', core: true },
    ],
  },
  {
    title: { en: 'Data', fi: 'Data', ar: 'البيانات' },
    skills: [
      { name: 'PostgreSQL', core: true },
      { name: 'MySQL' },
      { name: 'MariaDB' },
      { name: 'MongoDB' },
      { name: 'Big data' },
    ],
  },
  {
    title: {
      en: 'Tools & ways of working',
      fi: 'Työkalut ja työtavat',
      ar: 'الأدوات وأساليب العمل',
    },
    skills: [
      { name: 'Git', core: true },
      { name: 'Docker', core: true },
      { name: 'CI/CD (GitHub Actions)' },
      { name: 'AWS' },
      { name: 'Linux', core: true },
      { name: 'Agile / Scrum (CSM®)', core: true },
      { name: 'Jira', core: true },
      { name: 'UML' },
      { name: 'LLM (Copilot, ChatGPT, Claude Code)', core: true },
    ],
  },
]
