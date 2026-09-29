const Experience = () => {
  return (
    <div className="blog" id="experience">
      <div className="d-flex justify-content-center">
        <h2>Experience</h2>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>JUN 2023 - PRESENT</h5>
            <p>
              Full-stack Developer at Air Dice Oy
              <ul>
                <li>
                  Build and maintain internal tools, including the monitoring,
                  tracking and game management tools, and support the teams that
                  use them.
                </li>
                <li>Develop promotional tools that boost player engagement.</li>
                <li>
                  Prepare, test and deploy new games to QA and testing
                  environments.
                </li>
                <li>
                  Take part in software architecture design and write clear
                  documentation.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>AUG 2022 - JUN 2023</h5>
            <p>
              Full-stack Developer at Integrify
              <ul>
                <li>
                  Built front ends with JavaScript, TypeScript, React and Redux,
                  with a focus on accessibility and animation.
                </li>
                <li>
                  Built and documented REST APIs with Java, Node.js and Express
                  on SQL and NoSQL databases, unit-tested with Jest.
                </li>
                <li>
                  Worked with Docker, CI/CD in GitHub Actions and AWS on
                  real-world projects alongside developers of every seniority.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>APR 2019 - JUN 2019</h5>
            <p className="para">
              IT Helpdesk Intern at Oodi Helsinki Central Library
              <ul>
                <li>
                  Helped 100+ IT customers a day at a library with 1,000+ daily
                  visitors.
                </li>
                <li>
                  Maintained devices and IT services, ran the gaming desk, and
                  handled printer maintenance and computer backups.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>OCT 2011 - JUN 2014</h5>
            <p className="para">
              Accountant Manager at Iraq Oil
              <ul>
                <li>
                  Managed deposits and accounts for several gas stations and oil
                  storage depots.
                </li>
                <li>
                  Led a team of 25 station workers, supporting good customer
                  service and an average of €70k in daily sales.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
