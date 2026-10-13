import todoApp from '../assets/projects/todo-app.webp'

export const projects = [
  {
    id: 'salon',
    title: {
      en: 'Salon Booking Platform',
      fi: 'Salonkien ajanvarausalusta',
      ar: 'منصة حجز الصالونات',
    },
    pitch: {
      en: 'A booking system for salons and beauty centres, built to run several salons at once, with an admin panel for scheduling and dashboards.',
      fi: 'Ajanvarausjärjestelmä kampaamoille ja kauneushoitoloille. Sillä voi pyörittää useaa salonkia kerralla, ja ylläpitopaneelissa on aikataulut ja koontinäkymät.',
      ar: 'نظام حجز لصالونات التجميل ومراكز العناية، يدير عدة صالونات في وقت واحد، مع لوحة إدارة للجدولة ولوحات معلومات.',
    },
    role: {
      en: 'Solo project: backend, admin panel and database',
      fi: 'Oma projekti: backend, ylläpitopaneeli ja tietokanta',
      ar: 'مشروع فردي: الواجهة الخلفية ولوحة الإدارة وقاعدة البيانات',
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
    status: { en: 'In progress', fi: 'Työn alla', ar: 'قيد التطوير' },
    links: { code: 'https://github.com/Ammar-daham/salon' },
    image: null,
  },
  {
    id: 'imaginary-library',
    title: 'Imaginary Library',
    pitch: {
      en: 'A full-stack library app for browsing books, authors and categories, with tools to add, update and delete them.',
      fi: 'Full stack -kirjastosovellus kirjojen, kirjailijoiden ja kategorioiden selaamiseen sekä niiden lisäämiseen, muokkaamiseen ja poistamiseen.',
      ar: 'تطبيق مكتبة متكامل لتصفّح الكتب والمؤلفين والتصنيفات، مع أدوات لإضافتها وتعديلها وحذفها.',
    },
    role: {
      en: 'Integrify full-stack project',
      fi: 'Integrifyn full stack -projekti',
      ar: 'مشروع ويب متكامل في Integrify',
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
      {
        en: 'Google sign-in',
        fi: 'Google-kirjautuminen',
        ar: 'تسجيل الدخول عبر Google',
      },
      'Docker',
    ],
    status: { en: 'In progress', fi: 'Työn alla', ar: 'قيد التطوير' },
    links: {
      demo: 'https://imaginary-library.fly.dev/',
      code: 'https://github.com/Ammar-daham/library-system',
    },
    image: null,
  },
  {
    id: 'todo-app',
    title: { en: 'Todo App', fi: 'Tehtävälista', ar: 'تطبيق المهام' },
    pitch: {
      en: 'A single-page todo app with lists, priorities, due dates, search, soft delete, an activity history and dark mode, all stored in the browser.',
      fi: 'Yhden sivun tehtäväsovellus, jossa on listat, prioriteetit, määräajat, haku, palautettava poisto, tapahtumahistoria ja tumma tila. Kaikki tallentuu selaimeen.',
      ar: 'تطبيق مهام من صفحة واحدة، فيه قوائم وأولويات ومواعيد نهائية وبحث وحذف قابل للاستعادة وسجل للنشاط ووضع داكن، وكل شيء محفوظ في المتصفح.',
    },
    role: { en: 'Solo project', fi: 'Oma projekti', ar: 'مشروع فردي' },
    stack: ['Vue 3', 'Vite', 'Bootstrap 5', 'localStorage'],
    links: {
      demo: 'https://taskstoachive.netlify.app/',
      code: 'https://github.com/Ammar-daham/todolist',
    },
    image: todoApp,
  },
]
