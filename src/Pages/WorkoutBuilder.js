import React, { useEffect, useState } from 'react';
import Axios from '../Utils/Axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
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
import { selectWorkout } from '../Redux-State/WorkoutSlice';
import {
  addToWoLib,
  updateWoInWoLib,
} from '../Redux-State/WorkoutLibrarySlice';
import { updateFilterSportType } from '../Redux-State/WorkoutLibFilterSlice';
import { copyWoLib } from '../Redux-State/FilteredSortedWoLibSlice';
import { workoutBuilderPage } from '../Redux-State/PageSlice';

const WorkoutBuilder = () => {
  const initialWo = {
    // id: Math.ceil(Math.random() * 10000000),
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
  const [error, setError] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [sportTypeError, setSportTypeError] = useState(false);
  const [energySystemError, setEnergySystemError] = useState(false);
  const [totalDurationError, setTotalDurationError] = useState(false);
  const [workoutBuilderForm, setWorkoutBuilderForm] = useState({
    ...initialWo,
  });

  const getDurObj = (hours, mins) => {
    const hoursToMins = Number(hours) * 60;
    const totalDuration = hoursToMins + Number(mins);
    const newHours = Math.floor(totalDuration / 60);
    const newMins = totalDuration % 60;
    return {
      totalDuration: totalDuration,
      durationHours: newHours,
      durationMinutes: newMins,
    };
  };

  const dispatch = useDispatch();

  const handleResetReqFields = () => {
    if (!workoutBuilderForm.title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (!workoutBuilderForm.sportType) {
      setSportTypeError(true);
    } else {
      setSportTypeError(false);
    }
    if (!workoutBuilderForm.energySystem) {
      setEnergySystemError(true);
    } else {
      setEnergySystemError(false);
    }
    if (!workoutBuilderForm.totalDuration) {
      setTotalDurationError(true);
    } else {
      setTotalDurationError(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (page.titleText === 'Wo Builder') {
        const woRes = await Axios.post('/add-workout', {
          workoutData: { ...workoutBuilderForm },
        });
        dispatch(selectWorkout(woRes.data.workout));
        dispatch(addToWoLib({ workout: woRes.data.workout }));
        setError('');
      }
      if (page.titleText === 'Wo Edits') {
        dispatch(selectWorkout(workoutBuilderForm));
        dispatch(updateWoInWoLib({ workout: workoutBuilderForm }));
      }
      navigate('/workout-details');
    } catch (e) {}
  };

  useEffect(() => {
    setWorkoutBuilderForm({ ...initialWo });
    setTitleError(false);
    setSportTypeError(false);
    setEnergySystemError(false);
    setTotalDurationError(false);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate('/sign-in');
      return;
    }
    if (page.titleText === 'Wo Edits') {
      setWorkoutBuilderForm(workout);
      return;
    }
    if (page.titleText !== 'Wo Builder' || page.titleText !== 'Wo Edits') {
      dispatch(workoutBuilderPage());
    }
  }, []);

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
                setMinWidth={205}
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
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditWorkoutQuill>
            <EditWorkoutQuill
              label={'Main Set'}
              keyVar={'mainSet'}
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditWorkoutQuill>
            <EditWorkoutQuill
              label={'Cool Down'}
              keyVar={'coolDown'}
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditWorkoutQuill>
            <EditWorkoutQuill
              label={'Special Notes From Coach'}
              keyVar={'specialNotes'}
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditWorkoutQuill>
            <EditWorkoutQuill
              label={'Athlete Notes'}
              keyVar={'athleteNotes'}
              workoutBuilderForm={workoutBuilderForm}
              setWorkoutBuilderForm={setWorkoutBuilderForm}
            ></EditWorkoutQuill>
            <Button
              variant='contained'
              sx={{ margin: '5%', marginTop: '-2%' }}
              type='form'
              onClick={handleResetReqFields}
            >
              {page.bottomButton}
            </Button>
            <Box sx={{ margin: '5%' }}>
              <Typography sx={{ color: 'red' }}>{error}</Typography>
            </Box>
          </Paper>
        </Box>
      </form>
    </Layout>
  );
};

export default WorkoutBuilder;
