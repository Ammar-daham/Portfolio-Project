import * as React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel({ targetValue, skill }) {
	const [progress, setProgress] = React.useState(0)

	React.useEffect(() => {
		setProgress(0) // Reset progress on component mount
	}, [targetValue])

	React.useEffect(() => {
		if (progress < targetValue) {
			const timer = setInterval(() => {
				setProgress((prevProgress) => {
					const newProgress = Math.min(prevProgress + 1, targetValue)
					return newProgress
				})
			}, 30)

			return () => {
				clearInterval(timer)
			}
		}
	}, [progress, targetValue])

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				mb: 2,
				position: 'relative',
			}}
		>
			<Box sx={{ width: '100%', mr: 1, position: 'relative' }}>
				<LinearProgress
					variant="determinate"
					value={progress}
					sx={{ height: '20px', bgcolor: 'grey.700' }} // Set the height and background color here
				/>
				<Typography
					variant="body2"
					color="white"
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						whiteSpace: 'nowrap',
					}}
				>
					{skill}
				</Typography>
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="white">{`${Math.round(
					progress,
				)}%`}</Typography>
			</Box>
		</Box>
	)
}

LinearProgressWithLabel.propTypes = {
	targetValue: PropTypes.number.isRequired,
	skill: PropTypes.string.isRequired,
}

const SkillSection = ({ title, skills }) => (
	<div>
		<Typography
			variant="h5"
			color="white"
			gutterBottom
			style={{ paddingTop: '4rem' }}
		>
			{title}
		</Typography>
		{skills.map((skill, index) => (
			<Box key={index} sx={{ mb: 2 }}>
				<LinearProgressWithLabel
					targetValue={skill.progress}
					skill={skill.skill}
				/>
			</Box>
		))}
	</div>
)

SkillSection.propTypes = {
	title: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			skill: PropTypes.string.isRequired,
			progress: PropTypes.number.isRequired,
		}),
	).isRequired,
}

export default function Skills({ trigger }) {
	// Define progress values and skills for multiple progress bars
	const frontendSkills = [
		{ skill: 'JavaScript', progress: 90 },
		{ skill: 'TypeScript', progress: 70 },
		{ skill: 'ReactJs', progress: 80 },
		{ skill: 'React Native', progress: 80 },
		{ skill: 'VueJs', progress: 80 },
		{ skill: 'FreeMarker Template skill', progress: 70 },
		{ skill: 'HTML5', progress: 90 },
		{ skill: 'CSS', progress: 90 },
		{ skill: 'Material UI', progress: 100 },
		{ skill: 'Bootstrap', progress: 100 },
	]

	const backendSkills = [
		{ skill: 'Java', progress: 90 },
		{ skill: 'Python', progress: 50 },
		{ skill: 'Node.js', progress: 90 },
		{ skill: 'Express', progress: 90 },
		{ skill: 'C++', progress: 50 },
		{ skill: 'REST API', progress: 100 },
	]

	const databaseSkills = [
		{ skill: 'SQL', progress: 80 },
		{ skill: 'PostgreSQL', progress: 80 },
		{ skill: 'MongoDB', progress: 80 },
	]

	const devopsSkills = [
		{ skill: 'Docker', progress: 60 },
		{ skill: 'CI/CD', progress: 70 },
	]

	const otherSkills = [
		{ skill: 'Linux', progress: 90 },
		{ skill: 'Git', progress: 90 },
		{ skill: 'Agile Methodologies', progress: 70 },
		{ skill: 'Scrum', progress: 80 },
		{ skill: 'UML', progress: 70 },
		{ skill: 'Jira', progress: 100 },
	]

	return (
		<div className="blog" id="skills">
			<div className="d-flex justify-content-center my-5">
				<h2>Skills</h2>
			</div>
			<Box sx={{ width: '100%' }}>
				<SkillSection title="Front-End" skills={frontendSkills} />
				<SkillSection title="Back-End" skills={backendSkills} />
				<SkillSection title="Database" skills={databaseSkills} />
				<SkillSection title="DevOps" skills={devopsSkills} />
				<SkillSection title="Others" skills={otherSkills} />
			</Box>
		</div>
	)
}

Skills.propTypes = {
	trigger: PropTypes.number.isRequired,
}
