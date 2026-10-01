import { useContent } from '../i18n'
import Card from './ui/Card'
import Icon from './ui/Icon'
import Section from './ui/Section'
import { Tag, TagList } from './ui/Tag'
import styles from './Projects.module.css'

const PLACEHOLDERS = [styles.amber, styles.blue, styles.red]

const Thumbnail = ({ project, index }) => {
  const { ui } = useContent()
  return (
    <div className={styles.thumb}>
      {project.image ? (
        <img
          src={project.image}
          alt={ui.projects.screenshotAlt(project.title)}
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
}

const ProjectCard = ({ project, index }) => {
  const { ui } = useContent()
  const t = ui.projects
  return (
    <Card as="article" className={styles.card}>
      <Thumbnail project={project} index={index} />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.role}>{project.role}</p>
        <p className={styles.pitch}>{project.pitch}</p>
        <TagList label={t.stackLabel(project.title)}>
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
                aria-label={`${project.title}: ${t.links[kind]}`}
              >
                {t.links[kind]} <Icon name="arrow-up-right" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

const Projects = () => {
  const { projects, ui } = useContent()
  return (
    <Section
      id="projects"
      eyebrow={ui.projects.eyebrow}
      title={ui.projects.title}
      sub={ui.projects.sub}
    >
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
