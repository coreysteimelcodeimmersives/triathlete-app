import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { Box } from '@mui/system';
import { workoutLibraryPage } from '../Redux-State/PageSlice';
import { SPORT_TYPES } from '../Data/SportTypes';
import SportTypeCard from '../Components/Layout/SportTypeCard';
import { Card, CardActionArea, Typography } from '@mui/material';
import {
  clearWorkoutLibFilter,
  updateFilterSportType,
} from '../Redux-State/WorkoutLibFilterSlice';
import WorkoutIcon from '../Components/WorkoutCard/WorkoutIcon';

const WorkoutLibrary = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(workoutLibraryPage());
    dispatch(clearWorkoutLibFilter());
  }, []);

  return (
    <Layout>
      {Object.keys(SPORT_TYPES).map((sportType) => {
        return (
          <SportTypeCard key={sportType} sportType={sportType}></SportTypeCard>
        );
      })}
      <Card
        sx={{
          display: 'flex',
          mx: '3%',
          marginBottom: '3%',
        }}
        onClick={() => {
          dispatch(updateFilterSportType({ sportType: null }));
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
            <WorkoutIcon sportType={null}></WorkoutIcon>
            <Typography
              variant='h4'
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                width: '70%',
                px: '10%',
                justifyContent: 'center',
              }}
            >
              OTHER
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibrary;
