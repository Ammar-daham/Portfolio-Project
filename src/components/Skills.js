import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import skillsData from './skills.json'

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
    <Box className="progressBox">
      <Box  className="progressSubBox">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: '20px', bgcolor: 'grey.700', '& .MuiLinearProgress-bar': {
              backgroundColor: '#f9ab00',
            },}}
		  />
        <Typography
          variant="body2"
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

const SkillSection = ({ title, skills }) => (
  <div className="skill">
    <h5>{title}</h5>
    {skills.map((skillData, index) => (
      <Box key={index}>
        <LinearProgressWithLabel
          targetValue={skillData.progress}
          skill={skillData.skill}
        />
      </Box>
    ))}
  </div>
)

const Skills = ({ trigger }) => {
  return (
    <div className="blog" id="skills">
      <div className="d-flex justify-content-center">
        <h2>Skills</h2>
      </div>
      <Box sx={{ width: '100%' }}>
        <SkillSection title="Front-End" skills={skillsData.frontendSkills} />
        <SkillSection title="Back-End" skills={skillsData.backendSkills} />
        <SkillSection title="Database" skills={skillsData.databaseSkills} />
        <SkillSection title="DevOps" skills={skillsData.devopsSkills} />
        <SkillSection title="Others" skills={skillsData.otherSkills} />
      </Box>
    </div>
  )
}

export default Skills
