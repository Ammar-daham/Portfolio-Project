import { education } from '../data/education'
import Timeline from './Timeline'

const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const Education = () => {
  return (
    <div className="blog" id="education">
      <div className="d-flex justify-content-center">
        <h2>Education</h2>
      </div>
      <Timeline
        items={education}
        renderItem={(study) => (
          <p>
            {study.summary}
            {study.thesis && (
              <>
                <br />
                <span>
                  <b>Thesis: </b>
                  {study.thesis}
                </span>
              </>
            )}
            {study.link && (
              <>
                <br />
                <span>
                  <b>Link: </b>
                </span>
                <a
                  id="thesis_link"
                  href={study.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {study.link.label}
                </a>
              </>
            )}
            {study.projects && (
              <>
                <br />
                <span>
                  <b>Projects: </b>
                </span>
                <List items={study.projects} />
              </>
            )}
            {study.highlights && <List items={study.highlights} />}
          </p>
        )}
      />
    </div>
  )
}

export default Education
