// Interface text: everything on the page that isn't in the other data
// files. Each string is { en: '…', fi: '…' }; functions build text from data.

const monthFormat = (locale, options) => {
  const format = new Intl.DateTimeFormat(locale, {
    ...options,
    year: 'numeric',
    timeZone: 'UTC',
  })
  return (yearMonth) => format.format(new Date(`${yearMonth}-01T00:00:00Z`))
}

export const ui = {
  skipLink: { en: 'Skip to content', fi: 'Siirry sisältöön' },

  nav: {
    label: { en: 'Main', fi: 'Päävalikko' },
    backToTop: {
      en: (name) => `${name}, back to top`,
      fi: (name) => `${name}, takaisin alkuun`,
    },
    links: {
      home: { en: 'Home', fi: 'Etusivu' },
      projects: { en: 'Projects', fi: 'Projektit' },
      experience: { en: 'Experience', fi: 'Työkokemus' },
      skills: { en: 'Skills', fi: 'Osaaminen' },
      education: { en: 'Education', fi: 'Koulutus' },
      contact: { en: 'Contact', fi: 'Yhteystiedot' },
    },
    resume: { en: 'Résumé', fi: 'CV' },
    openMenu: { en: 'Open menu', fi: 'Avaa valikko' },
    closeMenu: { en: 'Close menu', fi: 'Sulje valikko' },
    // `theme` is the theme the switch turns on: 'light' or 'dark'
    switchTheme: {
      en: (theme) => `Switch to ${theme} theme`,
      fi: (theme) =>
        theme === 'light'
          ? 'Vaihda vaaleaan teemaan'
          : 'Vaihda tummaan teemaan',
    },
    // The link to the page in the other language, written in that language
    otherLanguage: {
      en: { lang: 'fi', href: '/fi/', short: 'FI', label: 'Suomeksi' },
      fi: { lang: 'en', href: '/', short: 'EN', label: 'In English' },
    },
  },

  hero: {
    viewWork: { en: 'View my work', fi: 'Katso työni' },
    getInTouch: { en: 'Get in touch', fi: 'Ota yhteyttä' },
    email: { en: 'Email', fi: 'Sähköposti' },
    portraitAlt: {
      en: (name) => `Portrait of ${name}`,
      fi: (name) => `${name}, muotokuva`,
    },
    years: {
      en: (years) => `${years}+ yrs`,
      fi: (years) => `${years}+ vuotta`,
    },
    experience: { en: 'full-stack experience', fi: 'full stack -kokemusta' },
  },

  projects: {
    eyebrow: { en: '// 01 — selected work', fi: '// 01 — valittuja töitä' },
    title: { en: 'Projects', fi: 'Projektit' },
    sub: {
      en: "Things I've built on my own and at Integrify, from a multi-salon booking platform to a full-stack library app.",
      fi: 'Projekteja, jotka olen tehnyt itse ja Integrifyssa: usean salongin ajanvarausalustasta full stack -kirjastosovellukseen.',
    },
    links: {
      demo: { en: 'Live demo', fi: 'Demo' },
      code: { en: 'Code', fi: 'Koodi' },
      api: { en: 'API code', fi: 'API:n koodi' },
    },
    screenshotAlt: {
      en: (title) => `Screenshot of ${title}`,
      fi: (title) => `Kuvakaappaus: ${title}`,
    },
    stackLabel: {
      en: (title) => `${title} stack`,
      fi: (title) => `${title}: teknologiat`,
    },
  },

  experience: {
    eyebrow: {
      en: "// 02 — where I've worked",
      fi: '// 02 — missä olen työskennellyt',
    },
    title: { en: 'Experience', fi: 'Työkokemus' },
    sub: {
      en: 'From managing gas-station accounts to shipping full-stack products.',
      fi: 'Huoltoasemien kirjanpidosta full stack -tuotteiden toimittamiseen.',
    },
    present: { en: 'Present', fi: 'nykyään' },
    formatMonth: {
      en: monthFormat('en', { month: 'short' }),
      fi: monthFormat('fi', { month: 'numeric' }),
    },
  },

  skills: {
    eyebrow: { en: '// 03 — toolbox', fi: '// 03 — työkalupakki' },
    title: { en: 'Skills', fi: 'Osaaminen' },
    sub: {
      en: 'Highlighted skills are the ones I use every day.',
      fi: 'Korostetut taidot ovat niitä, joita käytän päivittäin.',
    },
    listLabel: {
      en: (group) => `${group} skills`,
      fi: (group) => `${group}: taidot`,
    },
  },

  education: {
    eyebrow: { en: '// 04 — learning', fi: '// 04 — oppiminen' },
    title: { en: 'Education', fi: 'Koulutus' },
    sub: {
      en: "Two bachelor's degrees, a vocational ICT qualification and an exchange focused on data and machine learning.",
      fi: 'Kaksi kandidaattitason tutkintoa, tieto- ja viestintätekniikan perustutkinto ja vaihto-opiskelu datan ja koneoppimisen parissa.',
    },
    thesis: { en: 'Thesis:', fi: 'Opinnäytetyö:' },
    projects: { en: 'Projects:', fi: 'Projektit:' },
    certifications: { en: 'Certifications', fi: 'Sertifikaatit' },
  },

  contact: {
    eyebrow: { en: '// 05 — say hello', fi: '// 05 — sano hei' },
    title: { en: "Let's build something.", fi: 'Rakennetaan jotain yhdessä.' },
    sub: {
      en: 'Have a role, a project, or a question? My inbox is open.',
      fi: 'Onko sinulla tarjolla työtä, projekti tai kysymys? Kuulen mielelläni sinusta.',
    },
  },

  form: {
    name: { en: 'Name', fi: 'Nimi' },
    email: { en: 'Email', fi: 'Sähköposti' },
    message: { en: 'Message', fi: 'Viesti' },
    placeholders: {
      name: { en: 'Jane Doe', fi: 'Maija Meikäläinen' },
      email: { en: 'jane@company.com', fi: 'maija@yritys.fi' },
      message: {
        en: 'Tell me about your project or role…',
        fi: 'Kerro projektistasi tai avoimesta paikasta…',
      },
    },
    errors: {
      nameRequired: { en: 'Please enter your name.', fi: 'Kirjoita nimesi.' },
      emailRequired: {
        en: 'Please enter your email.',
        fi: 'Kirjoita sähköpostiosoitteesi.',
      },
      emailInvalid: {
        en: 'Please enter a valid email, like jane@company.com.',
        fi: 'Kirjoita kelvollinen sähköpostiosoite, esimerkiksi maija@yritys.fi.',
      },
      messageRequired: {
        en: 'Please write a message.',
        fi: 'Kirjoita viesti.',
      },
    },
    honeypot: {
      en: 'Leave this field empty',
      fi: 'Jätä tämä kenttä tyhjäksi',
    },
    send: { en: 'Send message', fi: 'Lähetä viesti' },
    sending: { en: 'Sending…', fi: 'Lähetetään…' },
    sent: {
      en: 'Thanks! Your message is on its way. I’ll reply soon.',
      fi: 'Kiitos! Viestisi on matkalla. Vastaan pian.',
    },
    // "<failed> <failedLink>." with failedLink as a mailto: link
    failed: {
      en: 'Sorry, your message couldn’t be sent. Please try again, or',
      fi: 'Viestin lähettäminen ei onnistunut. Yritä uudelleen tai',
    },
    failedLink: {
      en: 'email me directly',
      fi: 'lähetä minulle sähköpostia suoraan',
    },
    // The email subject, in your inbox and in the mailto: fallback
    subject: {
      en: (name) => `Portfolio contact from ${name}`,
      fi: (name) => `Yhteydenotto portfoliosta: ${name}`,
    },
  },
}
