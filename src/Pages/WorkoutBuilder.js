import * as React from 'react';
import { MenuItem, Paper } from '@mui/material';
import { Box, padding } from '@mui/system';
import { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import EditTitle from '../Components/WorkoutBuilder/EditTitle';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { SPORT_TYPES } from '../Data/SportTypes';
import { ENERGY_ABV } from '../Data/EnergySystems';
import SelectAutoWidth from '../Components/Inputs/SelectAutoWidth';
import { TextField } from '@mui/material';
import EditDuration from '../Components/WorkoutBuilder/EditDuration';
import { DISTANCE_ABV } from '../Data/DistanceUnits';
import EditDistance from '../Components/WorkoutBuilder/EditDistance';
import FixedCard from '../Components/WorkoutBuilder/FixedCard';

const WorkoutBuilder = () => {
  const [title, setTitle] = useState('');
  const [sportType, setSportType] = useState('');
  const [energySystem, setEnergySystem] = useState('');
  const [durationHours, setDurationHours] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [distance, setDistance] = useState('');
  const [distanceUnits, setDistanceUnits] = useState('');
  const [warmUp, setWarmUp] = useState('');
  const [mainSet, setMainSet] = useState('');
  const [coolDown, setCoolDown] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const workout = {
    title,
    sportType,
    energySystem,
    durationHours,
    durationMinutes,
    distance,
    warmUp,
    mainSet,
    coolDown,
    specialNotes,
  };

  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box
          // display={'flex'}
          // flexDirection={'column'}
          // alignItems={'center'}
          // justifyContent={'center'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 700,
            overflow: 'hidden',
            overflowY: 'scroll',
            alignItems: 'center',
            position: 'relative',
            top: 300,
            bgcolor: 'white',
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: '88%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'true',
            }}
          >
            <EditTitle title={title} setTitle={setTitle}></EditTitle>
            <Box display={'flex'} flexDirection={'row'}>
              <SelectAutoWidth
                setMinWidth={120}
                label={'Sport Type'}
                valueVar={sportType}
                setterFunc={setSportType}
                map={SPORT_TYPES}
              ></SelectAutoWidth>
              <SelectAutoWidth
                setMinWidth={150}
                label={'Energy System'}
                valueVar={energySystem}
                setterFunc={setEnergySystem}
                map={ENERGY_ABV}
              ></SelectAutoWidth>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
              <EditDuration
                label={'Hours'}
                valueVar={durationHours}
                setterFunc={setDurationHours}
              ></EditDuration>
              <EditDuration
                label={'Minutes'}
                valueVar={durationMinutes}
                setterFunc={setDurationMinutes}
              ></EditDuration>
            </Box>
            <EditDistance
              setDistance={setDistance}
              distanceUnits={distanceUnits}
              setDistanceUnits={setDistanceUnits}
            ></EditDistance>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 80,
          width: '100vw',
          bgcolor: 'white',
          alignContent: 'center',
        }}
      >
        <WorkoutCard
          title={title}
          sportType={sportType}
          energySystem={energySystem}
          durationHours={durationHours}
          durationMinutes={durationMinutes}
          distance={distance}
          distanceUnits={distanceUnits}
        ></WorkoutCard>
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
