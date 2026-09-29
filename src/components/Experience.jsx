import { experience } from '../data/experience'
import Timeline from './Timeline'

const Experience = () => {
  return (
    <div className="blog" id="experience">
      <div className="d-flex justify-content-center">
        <h2>Experience</h2>
      </div>
      <Timeline
        items={experience}
        renderItem={(job) => (
          <p>
            {`${job.title} at ${job.company}`}
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </p>
        )}
      />
    </div>
  )
}

export default Experience
