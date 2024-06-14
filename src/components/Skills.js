import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function LinearProgressWithLabel({ targetValue }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < targetValue) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.min(prevProgress + 1, targetValue);
          return newProgress;
        });
      }, 30); // Adjust the interval time here for the speed of progress

      return () => {
        clearInterval(timer);
      };
    }
  }, [progress, targetValue]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: '20px', bgcolor: 'grey.700' }} // Set the height and background color here
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  targetValue: PropTypes.number.isRequired,
};

export default function SkillSet() {
  // Define progress values and languages for multiple progress bars
  const skills = [
    { language: 'Java', progress: 80 },
    { language: 'JavaScript', progress: 70 },
    { language: 'Python', progress: 50 },
    { language: 'C++', progress: 50 },
    { language: 'React', progress: 80 },
  ];

  return (
    <div className="blog" id="skills">
      <div className="d-flex justify-content-center my-5">
        <h2>Skills</h2>
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Typography variant="h6" color="white" gutterBottom>
                {skill.language}
              </Typography>
              <LinearProgressWithLabel targetValue={skill.progress} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
