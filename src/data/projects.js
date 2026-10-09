import todoApp from '../assets/projects/todo-app.webp'

export const projects = [
  {
    id: 'salon',
    title: { en: 'Salon Booking Platform', fi: 'Salonkien ajanvarausalusta' },
    pitch: {
      en: 'A booking system for salons and beauty centres, built to run several salons at once, with an admin panel for scheduling and dashboards.',
      fi: 'Ajanvarausjärjestelmä kampaamoille ja kauneushoitoloille. Sillä voi pyörittää useaa salonkia kerralla, ja ylläpitopaneelissa on aikataulut ja koontinäkymät.',
    },
    role: {
      en: 'Solo project: backend, admin panel and database',
      fi: 'Oma projekti: backend, ylläpitopaneeli ja tietokanta',
    },
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
    status: { en: 'In progress', fi: 'Työn alla' },
    links: { code: 'https://github.com/Ammar-daham/salon' },
    image: null,
  },
  {
    id: 'imaginary-library',
    title: 'Imaginary Library',
    pitch: {
      en: 'A full-stack library app for browsing books, authors and categories, with tools to add, update and delete them.',
      fi: 'Full stack -kirjastosovellus kirjojen, kirjailijoiden ja kategorioiden selaamiseen sekä niiden lisäämiseen, muokkaamiseen ja poistamiseen.',
    },
    role: {
      en: 'Integrify full-stack project',
      fi: 'Integrifyn full stack -projekti',
    },
    stack: [
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Material UI',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      { en: 'Google sign-in', fi: 'Google-kirjautuminen' },
      'Docker',
    ],
    status: { en: 'In progress', fi: 'Työn alla' },
    links: {
      demo: 'https://imaginary-library.fly.dev/',
      code: 'https://github.com/Ammar-daham/library-system',
    },
    image: null,
  },
  {
    id: 'todo-app',
    title: { en: 'Todo App', fi: 'Tehtävälista' },
    pitch: {
      en: 'A single-page todo app with lists, priorities, due dates, search, soft delete, an activity history and dark mode, all stored in the browser.',
      fi: 'Yhden sivun tehtäväsovellus, jossa on listat, prioriteetit, määräajat, haku, palautettava poisto, tapahtumahistoria ja tumma tila. Kaikki tallentuu selaimeen.',
    },
    role: { en: 'Solo project', fi: 'Oma projekti' },
    stack: ['Vue 3', 'Vite', 'Bootstrap 5', 'localStorage'],
    links: {
      demo: 'https://taskstoachive.netlify.app/',
      code: 'https://github.com/Ammar-daham/todolist',
    },
    image: todoApp,
  },
]
