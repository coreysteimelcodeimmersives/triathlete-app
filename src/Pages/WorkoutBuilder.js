import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../Components/Layout/Layout';
import EditTitle from '../Components/WorkoutBuilder/EditTitle';
import { Button } from '@mui/material';
import { SPORT_TYPES } from '../Data/SportTypes';
import { ENERGY_ABV } from '../Data/EnergySystems';
import SelectAutoWidth from '../Components/Inputs/SelectAutoWidth';
import EditDuration from '../Components/WorkoutBuilder/EditDuration';
import EditDistance from '../Components/WorkoutBuilder/EditDistance';
import EditWorkoutQuill from '../Components/WorkoutBuilder/EditWorkoutQuill';
import {
  updateSportType,
  updateEnergySystem,
  updateWarmUp,
  updateMainSet,
  updateCoolDown,
  updateSpecialNotes,
  updateAthleteNotes,
  updateDurationMinutes,
  updateDurationHours,
  clearWorkout,
  addId,
} from '../Redux-State/WorkoutSlice';
import {
  addToWoLib,
  updateWoInWoLib,
} from '../Redux-State/WorkoutLibrarySlice';
import {
  workoutBuilderPage,
  workoutDetailsPage,
} from '../Redux-State/PageSlice';
import { updateWoLibFilter } from '../Redux-State/WorkoutLibFilterSlice';
import { doUpdate } from '../Redux-State/UpdateSlice';

const WorkoutBuilder = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workout = useSelector((state) => state.workout);
  const page = useSelector((state) => state.page);
  const update = useSelector((state) => state.update);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    if (page.titleText === 'Wo Builder') {
      dispatch(addId({ id: Math.ceil(Math.random() * 10000000) }));
    }
    window.scrollTo(0, 0);
  }, [update]);

  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Paper
          elevation={3}
          sx={{
            width: '95%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'true',
            marginBottom: '10vh',
          }}
        >
          <EditTitle></EditTitle>
          <Box display={'flex'} flexDirection={'row'}>
            <SelectAutoWidth
              setMinWidth={120}
              label={'Sport Type'}
              keyVar={'sportType'}
              map={SPORT_TYPES}
              dispatchFunc={updateSportType}
            ></SelectAutoWidth>
            <SelectAutoWidth
              setMinWidth={150}
              label={'Energy System'}
              keyVar={'energySystem'}
              map={ENERGY_ABV}
              dispatchFunc={updateEnergySystem}
            ></SelectAutoWidth>
          </Box>
          <Box display={'flex'} flexDirection={'row'}>
            <EditDuration
              label={'Hours'}
              keyVar={'durationHours'}
              dispatchFunc={updateDurationHours}
            ></EditDuration>
            <EditDuration
              label={'Minutes'}
              keyVar={'durationMinutes'}
              dispatchFunc={updateDurationMinutes}
            ></EditDuration>
          </Box>
          <EditDistance></EditDistance>
          <EditWorkoutQuill
            label={'Warm Up'}
            keyVar={'warmUp'}
            dispatchFunc={updateWarmUp}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Main Set'}
            keyVar={'mainSet'}
            dispatchFunc={updateMainSet}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Cool Down'}
            keyVar={'coolDown'}
            dispatchFunc={updateCoolDown}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Special Notes From Coach'}
            keyVar={'specialNotes'}
            dispatchFunc={updateSpecialNotes}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Athlete Notes'}
            keyVar={'athleteNotes'}
            dispatchFunc={updateAthleteNotes}
          ></EditWorkoutQuill>
          <Button
            variant='contained'
            sx={{ margin: '5%', marginTop: '-2%' }}
            onClick={() => {
              if (page.titleText === 'Wo Builder') {
                dispatch(addToWoLib({ workout }));

                dispatch(clearWorkout());
                dispatch(doUpdate());
                window.scrollTo(0, 0);
              }
              if (page.titleText === 'Wo Edits') {
                dispatch(updateWoInWoLib({ workout }));
                navigate('/workout-details');
              }
            }}
          >
            {page.bottomButton}
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default WorkoutBuilder;
