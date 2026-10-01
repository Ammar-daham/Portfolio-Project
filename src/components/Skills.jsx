import { useContent } from '../i18n'
import Card from './ui/Card'
import Section from './ui/Section'
import { Tag, TagList } from './ui/Tag'
import styles from './Skills.module.css'

// Everyday (core) skills first, otherwise in the data's order
const coreFirst = (skills) =>
  [...skills].sort((a, b) => Number(Boolean(b.core)) - Number(Boolean(a.core)))

const Skills = () => {
  const { skillGroups, ui } = useContent()
  return (
    <Section
      id="skills"
      eyebrow={ui.skills.eyebrow}
      title={ui.skills.title}
      sub={ui.skills.sub}
    >
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <Card key={group.title} padded>
            <h3 className={styles.group}>{group.title}</h3>
            <TagList label={ui.skills.listLabel(group.title)}>
              {coreFirst(group.skills).map((skill) => (
                <Tag key={skill.name} size="md" core={skill.core}>
                  {skill.name}
                </Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Skills
