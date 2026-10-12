// Interface text: everything on the page that isn't in the other data
// files. Each string is { en: '…', fi: '…', ar: '…' }; functions build text
// from data.

const monthFormat = (locale, options) => {
  const format = new Intl.DateTimeFormat(locale, {
    ...options,
    year: 'numeric',
    timeZone: 'UTC',
  })
  return (yearMonth) => format.format(new Date(`${yearMonth}-01T00:00:00Z`))
}

export const ui = {
  skipLink: {
    en: 'Skip to content',
    fi: 'Siirry sisältöön',
    ar: 'انتقل إلى المحتوى',
  },

  nav: {
    label: { en: 'Main', fi: 'Päävalikko', ar: 'القائمة الرئيسية' },
    backToTop: {
      en: (name) => `${name}, back to top`,
      fi: (name) => `${name}, takaisin alkuun`,
      ar: (name) => `${name}، العودة إلى الأعلى`,
    },
    links: {
      home: { en: 'Home', fi: 'Etusivu', ar: 'الرئيسية' },
      projects: { en: 'Projects', fi: 'Projektit', ar: 'المشاريع' },
      experience: { en: 'Experience', fi: 'Työkokemus', ar: 'الخبرة' },
      skills: { en: 'Skills', fi: 'Osaaminen', ar: 'المهارات' },
      education: { en: 'Education', fi: 'Koulutus', ar: 'التعليم' },
      contact: { en: 'Contact', fi: 'Yhteystiedot', ar: 'تواصل' },
    },
    resume: { en: 'Résumé', fi: 'CV', ar: 'السيرة الذاتية' },
    openMenu: { en: 'Open menu', fi: 'Avaa valikko', ar: 'افتح القائمة' },
    closeMenu: { en: 'Close menu', fi: 'Sulje valikko', ar: 'أغلق القائمة' },
    // `theme` is the theme the switch turns on: 'light' or 'dark'
    switchTheme: {
      en: (theme) => `Switch to ${theme} theme`,
      fi: (theme) =>
        theme === 'light'
          ? 'Vaihda vaaleaan teemaan'
          : 'Vaihda tummaan teemaan',
      ar: (theme) =>
        theme === 'light'
          ? 'التبديل إلى المظهر الفاتح'
          : 'التبديل إلى المظهر الداكن',
    },
    // The globe button's name, followed by the current language
    language: { en: 'Language', fi: 'Kieli', ar: 'اللغة' },
  },

  hero: {
    viewWork: { en: 'View my work', fi: 'Katso työni', ar: 'شاهد أعمالي' },
    getInTouch: { en: 'Get in touch', fi: 'Ota yhteyttä', ar: 'تواصل معي' },
    email: { en: 'Email', fi: 'Sähköposti', ar: 'البريد الإلكتروني' },
    portraitAlt: {
      en: (name) => `Portrait of ${name}`,
      fi: (name) => `${name}, muotokuva`,
      ar: (name) => `صورة ${name}`,
    },
    // Arabic counts 3–10 with the plural سنوات and other numbers with سنة
    years: {
      en: (years) => `${years}+ yrs`,
      fi: (years) => `${years}+ vuotta`,
      ar: (years) =>
        `أكثر من ${years} ${years >= 3 && years <= 10 ? 'سنوات' : 'سنة'}`,
    },
    experience: {
      en: 'full-stack experience',
      fi: 'full stack -kokemusta',
      ar: 'من الخبرة في التطوير المتكامل',
    },
  },

  projects: {
    eyebrow: {
      en: '// 01 — selected work',
      fi: '// 01 — valittuja töitä',
      ar: '// 01 — أعمال مختارة',
    },
    title: { en: 'Projects', fi: 'Projektit', ar: 'المشاريع' },
    sub: {
      en: "Things I've built on my own and at Integrify, from a multi-salon booking platform to a full-stack library app.",
      fi: 'Projekteja, jotka olen tehnyt itse ja Integrifyssa: usean salongin ajanvarausalustasta full stack -kirjastosovellukseen.',
      ar: 'مشاريع بنيتها بنفسي وفي Integrify، من منصة حجز لعدة صالونات إلى تطبيق مكتبة متكامل.',
    },
    links: {
      demo: { en: 'Live demo', fi: 'Demo', ar: 'عرض مباشر' },
      code: { en: 'Code', fi: 'Koodi', ar: 'الكود' },
      api: { en: 'API code', fi: 'API:n koodi', ar: 'كود الواجهة البرمجية' },
    },
    screenshotAlt: {
      en: (title) => `Screenshot of ${title}`,
      fi: (title) => `Kuvakaappaus: ${title}`,
      ar: (title) => `لقطة شاشة من ${title}`,
    },
    stackLabel: {
      en: (title) => `${title} stack`,
      fi: (title) => `${title}: teknologiat`,
      ar: (title) => `التقنيات المستخدمة في ${title}`,
    },
  },

  experience: {
    eyebrow: {
      en: "// 02 — where I've worked",
      fi: '// 02 — missä olen työskennellyt',
      ar: '// 02 — أين عملت',
    },
    title: { en: 'Experience', fi: 'Työkokemus', ar: 'الخبرة' },
    sub: {
      en: 'From managing gas-station accounts to shipping full-stack products.',
      fi: 'Huoltoasemien kirjanpidosta full stack -tuotteiden toimittamiseen.',
      ar: 'من إدارة حسابات محطات الوقود إلى إطلاق منتجات برمجية متكاملة.',
    },
    present: { en: 'Present', fi: 'nykyään', ar: 'الآن' },
    // Arabic month names with Western digits (يونيو 2023), as in the
    // rest of the page
    formatMonth: {
      en: monthFormat('en', { month: 'short' }),
      fi: monthFormat('fi', { month: 'numeric' }),
      ar: monthFormat('ar-u-nu-latn', { month: 'long' }),
    },
  },

  skills: {
    eyebrow: {
      en: '// 03 — toolbox',
      fi: '// 03 — työkalupakki',
      ar: '// 03 — أدواتي',
    },
    title: { en: 'Skills', fi: 'Osaaminen', ar: 'المهارات' },
    sub: {
      en: 'Highlighted skills are the ones I use every day.',
      fi: 'Korostetut taidot ovat niitä, joita käytän päivittäin.',
      ar: 'المهارات المميَّزة هي التي أستخدمها يوميًا.',
    },
    listLabel: {
      en: (group) => `${group} skills`,
      fi: (group) => `${group}: taidot`,
      ar: (group) => `مهارات ${group}`,
    },
  },

  education: {
    eyebrow: {
      en: '// 04 — learning',
      fi: '// 04 — oppiminen',
      ar: '// 04 — التعلّم',
    },
    title: { en: 'Education', fi: 'Koulutus', ar: 'التعليم' },
    sub: {
      en: "Two bachelor's degrees, a vocational ICT qualification and an exchange focused on data and machine learning.",
      fi: 'Kaksi kandidaattitason tutkintoa, tieto- ja viestintätekniikan perustutkinto ja vaihto-opiskelu datan ja koneoppimisen parissa.',
      ar: 'شهادتا بكالوريوس، ومؤهل مهني في تقنية المعلومات والاتصالات، وبرنامج تبادل طلابي في البيانات والتعلّم الآلي.',
    },
    thesis: { en: 'Thesis:', fi: 'Opinnäytetyö:', ar: 'مشروع التخرج:' },
    projects: { en: 'Projects:', fi: 'Projektit:', ar: 'المشاريع:' },
    certifications: {
      en: 'Certifications',
      fi: 'Sertifikaatit',
      ar: 'الشهادات',
    },
  },

  contact: {
    eyebrow: {
      en: '// 05 — say hello',
      fi: '// 05 — sano hei',
      ar: '// 05 — لنتحدث',
    },
    title: {
      en: "Let's build something.",
      fi: 'Rakennetaan jotain yhdessä.',
      ar: 'لنبنِ شيئًا معًا.',
    },
    sub: {
      en: 'Have a role, a project, or a question? My inbox is open.',
      fi: 'Onko sinulla tarjolla työtä, projekti tai kysymys? Kuulen mielelläni sinusta.',
      ar: 'لديك وظيفة أو مشروع أو سؤال؟ يسعدني أن أسمع منك.',
    },
  },

  form: {
    name: { en: 'Name', fi: 'Nimi', ar: 'الاسم' },
    email: { en: 'Email', fi: 'Sähköposti', ar: 'البريد الإلكتروني' },
    message: { en: 'Message', fi: 'Viesti', ar: 'الرسالة' },
    placeholders: {
      name: { en: 'Jane Doe', fi: 'Maija Meikäläinen', ar: 'سارة أحمد' },
      email: {
        en: 'jane@company.com',
        fi: 'maija@yritys.fi',
        ar: 'sara@company.com',
      },
      message: {
        en: 'Tell me about your project or role…',
        fi: 'Kerro projektistasi tai avoimesta paikasta…',
        ar: 'أخبرني عن مشروعك أو الوظيفة…',
      },
    },
    errors: {
      nameRequired: {
        en: 'Please enter your name.',
        fi: 'Kirjoita nimesi.',
        ar: 'يُرجى كتابة اسمك.',
      },
      emailRequired: {
        en: 'Please enter your email.',
        fi: 'Kirjoita sähköpostiosoitteesi.',
        ar: 'يُرجى كتابة بريدك الإلكتروني.',
      },
      emailInvalid: {
        en: 'Please enter a valid email, like jane@company.com.',
        fi: 'Kirjoita kelvollinen sähköpostiosoite, esimerkiksi maija@yritys.fi.',
        ar: 'يُرجى كتابة بريد إلكتروني صالح، مثل sara@company.com.',
      },
      messageRequired: {
        en: 'Please write a message.',
        fi: 'Kirjoita viesti.',
        ar: 'يُرجى كتابة رسالة.',
      },
    },
    honeypot: {
      en: 'Leave this field empty',
      fi: 'Jätä tämä kenttä tyhjäksi',
      ar: 'اترك هذا الحقل فارغًا',
    },
    send: { en: 'Send message', fi: 'Lähetä viesti', ar: 'أرسل الرسالة' },
    sending: { en: 'Sending…', fi: 'Lähetetään…', ar: 'جارٍ الإرسال…' },
    sent: {
      en: 'Thanks! Your message is on its way. I’ll reply soon.',
      fi: 'Kiitos! Viestisi on matkalla. Vastaan pian.',
      ar: 'شكرًا! رسالتك في الطريق، وسأرد عليك قريبًا.',
    },
    // "<failed> <failedLink>." with failedLink as a mailto: link
    failed: {
      en: 'Sorry, your message couldn’t be sent. Please try again, or',
      fi: 'Viestin lähettäminen ei onnistunut. Yritä uudelleen tai',
      ar: 'عذرًا، تعذّر إرسال رسالتك. حاول مرة أخرى، أو',
    },
    failedLink: {
      en: 'email me directly',
      fi: 'lähetä minulle sähköpostia suoraan',
      ar: 'راسلني مباشرة عبر البريد الإلكتروني',
    },
    // The email subject, in your inbox and in the mailto: fallback
    subject: {
      en: (name) => `Portfolio contact from ${name}`,
      fi: (name) => `Yhteydenotto portfoliosta: ${name}`,
      ar: (name) => `رسالة من الموقع الشخصي: ${name}`,
    },
  },
}
