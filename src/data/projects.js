import todoApp from '../assets/projects/todo-app.webp'

// Projects for the Projects section. Screenshots are 1200×750 WebP files
// in src/assets/projects/; `image: null` means the screenshot is still missing.
export const projects = [
  {
    id: 'salon',
    title: 'Salon Booking Platform',
    pitch:
      'A booking system for salons and beauty centres, built to run several salons at once, with an admin panel for scheduling and dashboards.',
    role: 'Solo project: backend, admin panel and database',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Flyway',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
    ],
    status: 'In progress',
    links: { code: 'https://github.com/Ammar-daham/salon' },
    image: null,
  },
  {
    id: 'imaginary-library',
    title: 'Imaginary Library',
    pitch:
      'A full-stack library app for browsing books, authors and categories, with tools to add, update and delete them.',
    role: 'Integrify full-stack project',
    stack: [
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Material UI',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Google sign-in',
      'Docker',
    ],
    links: {
      demo: 'https://imaginary-library.fly.dev/',
      code: 'https://github.com/Ammar-daham/library-system',
    },
    image: null,
  },
  {
    id: 'blog-post-app',
    title: 'Blog Post App',
    pitch:
      "A full-stack blogging app where users sign up, write and edit posts, and like and comment on each other's posts.",
    role: 'Solo project: React client and REST API',
    stack: [
      'React',
      'Redux Toolkit',
      'Bootstrap',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    links: {
      demo: 'https://summer-water-4667.fly.dev/',
      code: 'https://github.com/Ammar-daham/blog-post-client',
      api: 'https://github.com/Ammar-daham/blog-post-api',
    },
    image: null,
  },
  {
    id: 'todo-app',
    title: 'Todo App',
    pitch:
      'A single-page todo app with lists, priorities, due dates, search, soft delete, an activity history and dark mode, all stored in the browser.',
    role: 'Solo project',
    stack: ['Vue 3', 'Vite', 'Bootstrap 5', 'localStorage'],
    links: {
      demo: 'https://taskstoachive.netlify.app/',
      code: 'https://github.com/Ammar-daham/todolist',
    },
    image: todoApp,
  },
  {
    id: 'currency-exchange-api',
    title: 'Currency Exchange API',
    pitch:
      'A Spring Boot REST API that returns exchange rates between currencies from an external rate service.',
    role: 'Solo project',
    stack: ['Java 17', 'Spring Boot', 'Quartz', 'Maven', 'Docker'],
    links: { code: 'https://github.com/Ammar-daham/currency-exchange-api' },
    image: null,
  },
]
