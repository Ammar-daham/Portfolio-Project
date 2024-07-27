import React from "react";

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
							Full-stack developer at Air dice Oy
							<ul>
								<li>Monitoring and tracking tool's maintenance.</li>
								<li>Preparing and deploying new games to the staging environment.</li>
								<li>Developing promotional tools to boost player engagement.</li>
								<li>Conducting thorough testing procedures to ensure optimal game quality.</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>AUG 2022 - JUN 2023</h5>
						<p>
							Full-stack developer at Integrify
							<ul>
								<li>Sharpening competence as a Full Stack Developer by collaborating with other developers of different seniorities on a diverse range of projects and real-life challenges.</li>
								<li>Focusing on front-end development with JavaScript, TypeScript, React.js, Redux in addition to other technologies and concepts such as accessibility and animations.</li>
								<li>Building back-end for web-based applications with Java, along with frameworks such as Node.js and Express.js.</li>
								<li>Covering additional concepts such as API development and documentation, unit testing with Jest, SQL and NoSQL databases, and version control with GitHub.</li>
								<li>Working with DevOps practices (Bash scripting, Docker containers, and CI/CD with GitHub Actions) and Cloud Services with AWS.</li>
							</ul>
							
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>APR 2019 - JUN 2019</h5>
						<p className="para">
							IT helpdesk intern at Oodi Helsinki Central library
							<ul>
								<li>Maintaining devices and IT services.</li>
								<li>Responsible for gaming desk function, printer maintenance, and backing up the computers.</li>
								<li>The job required proactivity and problem-solving skills to help customers with IT tasks for the 100+ daily IT customers and 1000+ daily visitors.</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h5>OCT 2011 - JUN 2014</h5>
						<p className="para">
							Accountant manager at Iraq Oil
							<ul>
								<li>Responsible for depositing money and accounting for several gas stations and oil storage depots.</li>
								<li>Directly managed and was responsible for 25 station workers.</li>
								<li>Supported the station workers to deliver excellent customer service and on average 70t€ daily sales.</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
