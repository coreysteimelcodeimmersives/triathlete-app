import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import WorkoutIcon from './WorkoutIcon';
import TextField from '@mui/material/TextField';
import { ENERGY_SYSTEMS } from '../../Data/EnergySystems';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';
import { useNavigate } from 'react-router-dom';

const WorkoutCard = ({
  title,
  sportType,
  energySystem,
  durationHours,
  durationMinutes,
  distance,
  distanceUnits,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: 345,
        marginBottom: '2%',
        marginTop: '-20%',
      }}
      onClick={() => {
        navigate('/workout-details');
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
          <Typography variant='h5' component='div' alignSelf={'center'}>
            {title ? title : 'Workout Title'}
          </Typography>
        </Box>
        <CardContent sx={{ marginTop: '-5%' }}>
          <TextField
            id='outlined-read-only-input'
            label='Energy System'
            value={energySystem ? ENERGY_SYSTEMS[energySystem] : ''}
            sx={{ marginLeft: '5%', marginBottom: '5%' }}
            InputLabelProps={{ style: { color: 'purple' } }}
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
          <Box display={'flex'} flexDirection={'row'}>
            <TextField
              id='outlined-read-only-input'
              label='Hours'
              value={durationHours ? durationHours : ''}
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
            <TextField
              id='outlined-read-only-input'
              label='Mintues'
              value={durationMinutes ? durationMinutes : ''}
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
          </Box>
          <Box display={'flex'} flexDirection={'row'} marginTop={'5%'}>
            <TextField
              id='outlined-read-only-input'
              label='Distance'
              value={distance ? distance : ''}
              sx={{ marginLeft: '5%', width: '90%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
            <TextField
              id='outlined-read-only-input'
              label='Units'
              value={distanceUnits ? DISTANCE_ABV[distanceUnits] : ''}
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WorkoutCard;
