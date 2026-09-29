const Education = () => {
  return (
    <div className="blog" id="education">
      <div className="d-flex justify-content-center">
        <h2>Education</h2>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>2020-2024</h5>
            <p>
              Bachelor&apos;s degree in ICT, Metropolia University of Applied
              Sciences.
              <br />
              <span>
                <b>Thesis: </b>Promotional tool for iGaming
              </span>
              <br />
              <span>
                <b>Link: </b>
              </span>
              <a
                id="thesis_link"
                href="https://urn.fi/URN:NBN:fi:amk-202403255121"
                target="_blank"
                rel="noreferrer"
              >
                Free Spins giveaway
              </a>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>2022</h5>
            <p>
              Exchange at Amsterdam University of Applied Sciences, focusing on
              big data and machine learning.
              <br />
              <span>
                <b>Projects: </b>
              </span>
              <ul>
                <li>Sentiment analysis of hotel reviews.</li>
                <li>A model that predicts wildfires in Australia.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>2018-2020</h5>
            <p className="para">
              Studied information and communications technology.
              <ul>
                <li>
                  Built two online-shop websites with React and WordPress as
                  school projects.
                </li>
                <li>Certificate of privacy education, 17.03.2019.</li>
                <li>Certified ScrumMaster® (CSM®), 26.12.2019.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>2007-2011</h5>
            <p className="para">
              Bachelor&apos;s degree in Computer Science and Mathematics,
              College of Education, University of Mosul.
              <br />
              <span>
                <b>Thesis: </b>Image processing using filters.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
