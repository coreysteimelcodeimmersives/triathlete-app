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
  addId,
} from '../Redux-State/WorkoutSlice';
import {
  addToWoLib,
  updateWoInWoLib,
} from '../Redux-State/WorkoutLibrarySlice';
import { updateFilterSportType } from '../Redux-State/WorkoutLibFilterSlice';
import { copyWoLib } from '../Redux-State/FilteredSortedWoLibSlice';
import { workoutBuilderPage } from '../Redux-State/PageSlice';

const WorkoutBuilder = () => {
  const initialWo = {
    title: '',
    sportType: '',
    energySystem: '',
    durationMinutes: '',
    durationHours: '',
    totalDuration: '',
    distanceValue: '',
    distanceUnits: '',
    warmUp: '',
    mainSet: '',
    coolDown: '',
    specialNotes: '',
    athleteNotes: '',
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const page = useSelector((state) => state.page);
  const generalUpdate = useSelector((state) => state.update.general);
  const woUpdate = useSelector((state) => state.update.woBuilder);
  const [titleError, setTitleError] = useState(false);
  const [sportTypeError, setSportTypeError] = useState(false);
  const [energySystemError, setEnergySystemError] = useState(false);
  const [totalDurationError, setTotalDurationError] = useState(false);
  const [workoutBuilderForm, setWorkoutBuilderForm] = useState({
    ...initialWo,
  });

  const getDurObj = (hours, mins) => {
    const hoursToMins = Number(hours) * 60;
    console.log(hoursToMins);
    const totalDuration = hoursToMins + Number(mins);
    console.log(totalDuration);
    const newHours = Math.floor(totalDuration / 60);
    console.log(newHours);
    const newMins = totalDuration % 60;
    console.log(newMins);
    return {
      totalDuration: totalDuration,
      durationHours: newHours,
      durationMinutes: newMins,
    };
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (page.titleText === 'Wo Builder') {
        dispatch(addToWoLib({ workout }));
      }
      if (page.titleText === 'Wo Edits') {
        dispatch(updateWoInWoLib({ workout }));
      }
      dispatch(copyWoLib(workoutLibrary));
      dispatch(updateFilterSportType({ sportType: workout.sportType }));
      navigate('/workout-details');
    } catch (e) {}
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    if (page.titleText === 'Wo Edits') {
      setWorkoutBuilderForm({ ...workout });
    }
    if (page.titleText !== 'Wo Builder' || page.titleText !== 'Wo Edits') {
      dispatch(workoutBuilderPage());
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // if (page.titleText === 'Wo Builder') {
    console.log('here');
    setWorkoutBuilderForm({ ...initialWo });
    // }
  }, [woUpdate]);

  useEffect(() => {
    const durObj = getDurObj(
      workoutBuilderForm.durationHours,
      workoutBuilderForm.durationMinutes
    );
    setWorkoutBuilderForm({
      ...workoutBuilderForm,
      durationHours: durObj.durationHours,
      durationMinutes: durObj.durationMinutes,
      totalDuration: durObj.totalDuration,
    });
  }, [generalUpdate]);

  return (
    <Layout>
      <form action='submit' onSubmit={handleSubmit}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Paper
            elevation={3}
            sx={{
              width: '98%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'true',
              marginBottom: '10vh',
            }}
          >
            <EditTitle
              error={titleError}
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditTitle>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
            >
              <SelectAutoWidth
                setMinWidth={130}
                label={'Sport Type'}
                keyVar={'sportType'}
                map={SPORT_TYPES}
                required={true}
                error={sportTypeError}
                workoutBuilderForm={workoutBuilderForm}
                setWorkoutBuilderForm={setWorkoutBuilderForm}
              ></SelectAutoWidth>
              <SelectAutoWidth
                setMinWidth={160}
                label={'Energy System'}
                keyVar={'energySystem'}
                map={ENERGY_ABV}
                required={true}
                error={energySystemError}
                workoutBuilderForm={workoutBuilderForm}
                setWorkoutBuilderForm={setWorkoutBuilderForm}
              ></SelectAutoWidth>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
            >
              <EditDuration
                label={'Hours'}
                keyVar={'durationHours'}
                oppVar={'durationMinutes'}
                error={totalDurationError}
                workoutBuilderForm={workoutBuilderForm}
                setWorkoutBuilderForm={setWorkoutBuilderForm}
              ></EditDuration>
              <EditDuration
                label={'Minutes'}
                keyVar={'durationMinutes'}
                oppVar={'durationHours'}
                error={totalDurationError}
                workoutBuilderForm={workoutBuilderForm}
                setWorkoutBuilderForm={setWorkoutBuilderForm}
              ></EditDuration>
            </Box>
            <EditDistance
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditDistance>
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
              type='form'
              onClick={() => {
                if (!workoutBuilderForm.title) {
                  setTitleError(true);
                } else {
                  setTitleError(false);
                }
                if (!workout.sportType) {
                  setSportTypeError(true);
                } else {
                  setSportTypeError(false);
                }
                if (!workout.energySystem) {
                  setEnergySystemError(true);
                } else {
                  setEnergySystemError(false);
                }
                if (!workout.totalDuration) {
                  setTotalDurationError(true);
                } else {
                  setTotalDurationError(false);
                }
              }}
            >
              {page.bottomButton}
            </Button>
          </Paper>
        </Box>
      </form>
    </Layout>
  );
};

export default WorkoutBuilder;
