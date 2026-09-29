import { projects } from '../data/projects'
import Card from './ui/Card'
import Icon from './ui/Icon'
import Section from './ui/Section'
import { Tag, TagList } from './ui/Tag'
import styles from './Projects.module.css'

const LINK_LABELS = { demo: 'Live demo', code: 'Code', api: 'API code' }
const PLACEHOLDERS = [styles.amber, styles.blue, styles.red]

const Thumbnail = ({ project, index }) => (
  <div className={styles.thumb}>
    {project.image ? (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
      />
    ) : (
      <div
        className={`${styles.placeholder} ${PLACEHOLDERS[index % PLACEHOLDERS.length]}`}
        aria-hidden="true"
      >
        <div className={styles.mock}>
          <span />
          <span />
          <span />
        </div>
      </div>
    )}
    {project.status && <p className={styles.status}>{project.status}</p>}
  </div>
)

const ProjectCard = ({ project, index }) => (
  <Card as="article" className={styles.card}>
    <Thumbnail project={project} index={index} />
    <div className={styles.body}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.pitch}>{project.pitch}</p>
      <TagList label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagList>
      <ul className={styles.links}>
        {Object.entries(project.links).map(([kind, href]) => (
          <li key={kind}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title}: ${LINK_LABELS[kind]}`}
            >
              {LINK_LABELS[kind]} <Icon name="arrow-up-right" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Card>
)

const Projects = () => (
  <Section
    id="projects"
    eyebrow="// 01 — selected work"
    title="Projects"
    sub="Things I've built on my own and at Integrify, from a multi-salon booking platform to full-stack apps and REST APIs."
  >
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </Section>
)

export default Projects
