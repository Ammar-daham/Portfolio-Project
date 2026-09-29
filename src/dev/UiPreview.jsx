import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Icon from '../components/ui/Icon'
import Section from '../components/ui/Section'
import { Tag, TagList } from '../components/ui/Tag'
import styles from './UiPreview.module.css'

// The mockup's projects, so this section can be compared with it directly
const MOCKUP_PROJECTS = [
  {
    title: 'Free Spins Giveaway Tool',
    pitch:
      'Promotional tool for iGaming operators that boosts player engagement. Built as my bachelor’s thesis.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    links: ['Case study →', 'Thesis ↗'],
    thumb: styles.t1,
  },
  {
    title: 'Hotel Review Sentiment',
    pitch:
      'NLP model that classifies the sentiment of hotel reviews. Built during my exchange at Amsterdam UAS.',
    stack: ['Python', 'scikit-learn', 'NLP'],
    links: ['Code ↗'],
    thumb: styles.t2,
  },
  {
    title: 'Australian Wildfire Prediction',
    pitch:
      'A machine-learning model that predicts wildfire risk in Australia from climate data.',
    stack: ['Python', 'Pandas', 'ML'],
    links: ['Code ↗'],
    thumb: styles.t3,
  },
]

const SKILLS = [
  [
    'frontend',
    ['JavaScript', 'React', 'TypeScript'],
    ['React Native', 'Vue', 'HTML/CSS', 'MUI'],
  ],
  ['backend', ['Node.js', 'Java'], ['Express', 'REST APIs', 'Python']],
  [
    'data & devops',
    ['PostgreSQL'],
    ['MongoDB', 'SQL', 'Docker', 'CI/CD', 'AWS'],
  ],
  ['ways of working', ['Git'], ['Linux', 'Scrum (CSM®)', 'Jira', 'UML']],
]

const UiPreview = () => (
  <main className={styles.page}>
    <Section
      id="buttons"
      eyebrow="// primitives"
      title="Buttons, tags and icons"
      sub="Every variant of the shared UI components. The sections below rebuild parts of the mockup with them."
    >
      <div className={styles.row}>
        <Button href="#projects">
          View my work <Icon name="arrow-right" />
        </Button>
        <Button variant="ghost" href="#contact">
          Get in touch
        </Button>
        <Button variant="ghost">
          Résumé <Icon name="download" />
        </Button>
        <Button size="lg">Send message</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className={styles.row}>
        <TagList label="Tag examples">
          <Tag>React</Tag>
          <Tag>Node.js</Tag>
          <Tag size="md">Express</Tag>
          <Tag size="md" core>
            TypeScript
          </Tag>
        </TagList>
      </div>
      <ul className={styles.icons}>
        {Icon.names.map((name) => (
          <li key={name}>
            <Icon name={name} size={20} />
            <code>{name}</code>
          </li>
        ))}
      </ul>
    </Section>

    <Section
      id="skills"
      eyebrow="// 03 — toolbox"
      title="Skills"
      sub="Highlighted skills are the ones I use every day."
    >
      <div className={styles.skills}>
        {SKILLS.map(([group, core, rest]) => (
          <Card key={group} padded>
            <h3 className={styles.skillTitle}>{group}</h3>
            <TagList label={`${group} skills`}>
              {core.map((s) => (
                <Tag key={s} size="md" core>
                  {s}
                </Tag>
              ))}
              {rest.map((s) => (
                <Tag key={s} size="md">
                  {s}
                </Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      id="projects"
      eyebrow="// 01 — selected work"
      title="Projects"
      sub="A few things I've designed, built and shipped, from production tools to machine-learning experiments."
    >
      <div className={styles.projects}>
        {MOCKUP_PROJECTS.map((p) => (
          <Card as="article" key={p.title}>
            <div className={`${styles.thumb} ${p.thumb}`}>
              <div className={styles.mock}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.pitch}>{p.pitch}</p>
              <TagList label="Stack">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </TagList>
              <div className={styles.links}>
                {p.links.map((l) => (
                  <a key={l} href="#projects">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  </main>
)

export default UiPreview
