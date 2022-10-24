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
  hardUpdate,
  updateWoInWoLib,
} from '../Redux-State/WorkoutLibrarySlice';
import { athleteWoDetails, workoutBuilderPage } from '../Redux-State/PageSlice';
import { selectAthlete } from '../Redux-State/AthleteLibrarySlice';
import { doUpdate } from '../Redux-State/UpdateSlice';

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
  const athleteId = useSelector((state) => state.athleteLibrary.athlete.id);
  const user = useSelector((state) => state.user);
  const workout = useSelector((state) => state.workout);
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
        const libRes = await Axios.get('/get-workouts');
        dispatch(hardUpdate(libRes.data.workouts));
        setError('');
      }
      if (page.titleText === 'Wo Edits') {
        const updateWoRes = await Axios.post('/update-workout', {
          workoutData: { ...workoutBuilderForm },
        });
        dispatch(selectWorkout(updateWoRes.data.workout));
        dispatch(updateWoInWoLib({ workout: workoutBuilderForm }));
        setError('');
      }
      if (page.athleteWoDetails) {
        const woRes = await Axios.post('/athlete-update-workout', {
          workoutData: { ...workoutBuilderForm },
          athleteId: athleteId,
        });

        dispatch(selectWorkout(workoutBuilderForm));
        dispatch(selectAthlete(woRes.data.athlete));
        dispatch(
          athleteWoDetails({
            athleteFirstName: page.titleText,
            date: page.date,
          })
        );
        setError('');
      }
      navigate('/workout-details');
    } catch (e) {
      setError(e.response ? e.response.data : e.message);
    }
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

    if (page.titleText === 'Wo Edits' || page.athleteWoDetails) {
      setWorkoutBuilderForm({
        ...workout,
      });
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
            <Box sx={{ mb: '3%', display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ color: 'red' }}>{error}</Typography>
            </Box>
          </Paper>
        </Box>
      </form>
    </Layout>
  );
};

export default WorkoutBuilder;
