import * as React from 'react';
import { Paper } from '@mui/material';
import { Box, padding } from '@mui/system';
import { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import EditTitle from '../Components/WorkoutBuilder/EditTitle';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { SPORT_TYPES } from '../Data/SportTypes';
import { ENERGY_ABV } from '../Data/EnergySystems';
import SelectAutoWidth from '../Components/Inputs/SelectAutoWidth';
import EditDuration from '../Components/WorkoutBuilder/EditDuration';
import EditDistance from '../Components/WorkoutBuilder/EditDistance';
import EditWorkoutQuill from '../Components/WorkoutBuilder/EditWorkoutQuill';

const WorkoutBuilder = () => {
  // const [title, setTitle] = useState('');
  // const [sportType, setSportType] = useState('');
  // const [energySystem, setEnergySystem] = useState('');
  // const [durationHours, setDurationHours] = useState('');
  // const [durationMinutes, setDurationMinutes] = useState('');
  // const [distance, setDistance] = useState('');
  // const [distanceUnits, setDistanceUnits] = useState('');
  // const [warmUp, setWarmUp] = useState('');
  // const [mainSet, setMainSet] = useState('');
  // const [coolDown, setCoolDown] = useState('');
  // const [specialNotes, setSpecialNotes] = useState('');
  // const [atheleteNotes, setAthleteNotes] = useState('');

  // const workout = {
  //   title,
  //   sportType,
  //   energySystem,
  //   durationHours,
  //   durationMinutes,
  //   distance,
  //   warmUp,
  //   mainSet,
  //   coolDown,
  //   specialNotes,
  //   atheleteNotes,
  // };

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        // marginTop={'-8vh'}
      >
        {/* <WorkoutCard
          title={title}
          sportType={sportType}
          energySystem={energySystem}
          durationHours={durationHours}
          durationMinutes={durationMinutes}
          distance={distance}
          distanceUnits={distanceUnits}
        ></WorkoutCard> */}
        <Paper
          elevation={3}
          sx={{
            width: '95%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'true',
          }}
        >
          <EditTitle></EditTitle>
          <Box display={'flex'} flexDirection={'row'}>
            <SelectAutoWidth
              setMinWidth={120}
              label={'Sport Type'}
              keyVar={'sportType'}
              map={SPORT_TYPES}
            ></SelectAutoWidth>
            <SelectAutoWidth
              setMinWidth={150}
              label={'Energy System'}
              keyVar={'energySystem'}
              map={ENERGY_ABV}
            ></SelectAutoWidth>
          </Box>
          <Box display={'flex'} flexDirection={'row'}>
            <EditDuration
              label={'Hours'}
              keyVar={'durationHours'}
            ></EditDuration>
            <EditDuration
              label={'Minutes'}
              keyVar={'durationMinutes'}
            ></EditDuration>
          </Box>
          <EditDistance></EditDistance>
          <EditWorkoutQuill
            label={'Warm Up'}
            keyVar={'warmUp'}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Main Set'}
            keyVar={'mainSet'}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Cool Down'}
            keyVar={'coolDown'}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Special Notes From Coach'}
            keyVar={'specialNotes'}
          ></EditWorkoutQuill>
          <EditWorkoutQuill
            label={'Athlete Notes'}
            keyVar={'athleteNotes'}
          ></EditWorkoutQuill>
        </Paper>
      </Box>
    </Layout>

    // <Layout>
    //   <div className='AppContainer'>
    //     <h1 style={{ marginTop: '3%' }}>Workout Builder</h1>
    //     <div className='WorkoutBuilderContainer'>
    //       <EditForm
    //         title={title}
    //         setTitle={setTitle}
    //         sportType={sportType}
    //         setSportType={setSportType}
    //         energySystem={energySystem}
    //         setEnergySystem={setEnergySystem}
    //         durationHours={durationHours}
    //         setDurationHours={setDurationHours}
    //         durationMinutes={durationMinutes}
    //         setDurationMinutes={setDurationMinutes}
    //         distance={distance}
    //         setDistance={setDistance}
    //         setWarmUp={setWarmUp}
    //         setMainSet={setMainSet}
    //         setCoolDown={setCoolDown}
    //         setSpecialNotes={setSpecialNotes}
    //       ></EditForm>
    //       <PreviewCard
    //         title={title}
    //         sportType={sportType}
    //         energySystem={energySystem}
    //         durationHours={durationHours}
    //         durationMinutes={durationMinutes}
    //         distance={distance}
    //         warmUp={warmUp}
    //         mainSet={mainSet}
    //         coolDown={coolDown}
    //         specialNotes={specialNotes}
    //       ></PreviewCard>
    //     </div>
    //   </div>
    // </Layout>
  );
};

export default WorkoutBuilder;
