import React from "react";

const Education = () => {
	return (
		<div className="blog" id="education">
			<div className="d-flex justify-content-center">
				<h2>education</h2>
			</div>
			<div className="container education-wrapper">
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>2020-2024</h5>
						<p>
							Bachelor ICT degree from Metropolia university of applied sciences.
							<br />
							<span><b>Thesis: </b>Promotional tool for IGaming</span>
							<br /> 
							<span><b>Link: </b></span><a id="thesis_link" href="https://urn.fi/URN:NBN:fi:amk-202403255121" target="_blank">Free Spins give away</a>
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>2022</h5>
						<p>
						Exchange program at Amsterdam University of Applied Sciences, focusing on Big Data and Machine Learning.
							<br />
							<span><b>Projects: </b></span>
							<ul>
								<li>Sentiment analysis for hotel reviews.</li>
								<li>Model to predict the wild fires in Australia</li>
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
								<li>I have designed two websites as an online shop using React and WordPress and it was school project.</li>
								<li>Certificate of privacy education 17.03.2019.</li>
								<li>Certified ScrumMaster® (CSM®) 26.12.2019</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>2007-2011</h5>
						<p className="para">
							Bachelor degree from the college of education, department of computer science and manthmatics at the university of Mosul.
							<br />
							<span><b>Thesis: </b> Image processing using filters.</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
