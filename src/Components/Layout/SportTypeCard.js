import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WorkoutIcon from '../WorkoutCard/WorkoutIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFilterSportType } from '../../Redux-State/WorkoutLibFilterSlice';

const SportTypeCard = ({ sportType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: 'flex',
        mx: '3%',
        marginBottom: '3%',
      }}
      onClick={() => {
        dispatch(updateFilterSportType({ sportType: sportType }));
        navigate('/workout-library-filter');
      }}
    >
      <CardActionArea>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          padding={'3%'}
        >
          <WorkoutIcon sportType={sportType}></WorkoutIcon>
          <Typography
            variant='h4'
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: '70%',
              px: '10%',
              justifyContent: 'center',
            }}
          >
            {sportType}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SportTypeCard;
