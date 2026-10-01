// Interface text: everything on the page that isn't in the other data
// files. Write each string as { en: '…' }; functions build text from data.

const monthFormat = (locale, options) => {
  const format = new Intl.DateTimeFormat(locale, {
    ...options,
    year: 'numeric',
    timeZone: 'UTC',
  })
  return (yearMonth) => format.format(new Date(`${yearMonth}-01T00:00:00Z`))
}

export const ui = {
  skipLink: { en: 'Skip to content' },

  nav: {
    label: { en: 'Main' },
    backToTop: { en: (name) => `${name}, back to top` },
    links: {
      home: { en: 'Home' },
      projects: { en: 'Projects' },
      experience: { en: 'Experience' },
      skills: { en: 'Skills' },
      education: { en: 'Education' },
      contact: { en: 'Contact' },
    },
    resume: { en: 'Résumé' },
    openMenu: { en: 'Open menu' },
    closeMenu: { en: 'Close menu' },
    // `theme` is the theme the switch turns on: 'light' or 'dark'
    switchTheme: { en: (theme) => `Switch to ${theme} theme` },
  },

  hero: {
    viewWork: { en: 'View my work' },
    getInTouch: { en: 'Get in touch' },
    email: { en: 'Email' },
    portraitAlt: { en: (name) => `Portrait of ${name}` },
    years: { en: (years) => `${years}+ yrs` },
    experience: { en: 'full-stack experience' },
  },

  projects: {
    eyebrow: { en: '// 01 — selected work' },
    title: { en: 'Projects' },
    sub: {
      en: "Things I've built on my own and at Integrify, from a multi-salon booking platform to full-stack apps and REST APIs.",
    },
    links: {
      demo: { en: 'Live demo' },
      code: { en: 'Code' },
      api: { en: 'API code' },
    },
    screenshotAlt: { en: (title) => `Screenshot of ${title}` },
    stackLabel: { en: (title) => `${title} stack` },
  },

  experience: {
    eyebrow: { en: "// 02 — where I've worked" },
    title: { en: 'Experience' },
    sub: {
      en: 'From managing gas-station accounts to shipping full-stack products.',
    },
    present: { en: 'Present' },
    formatMonth: { en: monthFormat('en', { month: 'short' }) },
  },

  skills: {
    eyebrow: { en: '// 03 — toolbox' },
    title: { en: 'Skills' },
    sub: { en: 'Highlighted skills are the ones I use every day.' },
    listLabel: { en: (group) => `${group} skills` },
  },

  education: {
    eyebrow: { en: '// 04 — learning' },
    title: { en: 'Education' },
    sub: {
      en: "Two bachelor's degrees, a vocational ICT qualification and an exchange focused on data and machine learning.",
    },
    thesis: { en: 'Thesis:' },
    projects: { en: 'Projects:' },
    certifications: { en: 'Certifications' },
  },

  contact: {
    eyebrow: { en: '// 05 — say hello' },
    title: { en: "Let's build something." },
    sub: { en: 'Have a role, a project, or a question? My inbox is open.' },
  },

  form: {
    name: { en: 'Name' },
    email: { en: 'Email' },
    message: { en: 'Message' },
    placeholders: {
      name: { en: 'Jane Doe' },
      email: { en: 'jane@company.com' },
      message: { en: 'Tell me about your project or role…' },
    },
    errors: {
      nameRequired: { en: 'Please enter your name.' },
      emailRequired: { en: 'Please enter your email.' },
      emailInvalid: {
        en: 'Please enter a valid email, like jane@company.com.',
      },
      messageRequired: { en: 'Please write a message.' },
    },
    honeypot: { en: 'Leave this field empty' },
    send: { en: 'Send message' },
    sending: { en: 'Sending…' },
    sent: { en: 'Thanks! Your message is on its way. I’ll reply soon.' },
    // "<failed> <failedLink>." with failedLink as a mailto: link
    failed: {
      en: 'Sorry, your message couldn’t be sent. Please try again, or',
    },
    failedLink: { en: 'email me directly' },
    // The email subject, in your inbox and in the mailto: fallback
    subject: { en: (name) => `Portfolio contact from ${name}` },
  },

  footer: {
    credit: { en: 'Built with React + Vite · Hosted on Netlify' },
  },
}
