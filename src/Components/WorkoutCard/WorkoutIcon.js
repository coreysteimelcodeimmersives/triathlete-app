import React from 'react';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimerIcon from '@mui/icons-material/Timer';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import { SPORT_TYPES } from '../../Data/SportTypes';

const WorkoutIcon = ({ sportType }) => {
  const returnSportTypeIcon = () => {
    switch (SPORT_TYPES[sportType]) {
      case SPORT_TYPES.SWIM: {
        return (
          <PoolIcon
            color='secondary'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></PoolIcon>
        );
      }
      case SPORT_TYPES.BIKE: {
        return (
          <DirectionsBikeIcon
            color='info'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></DirectionsBikeIcon>
        );
      }
      case SPORT_TYPES.RUN: {
        return (
          <DirectionsRunIcon
            color='warning'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></DirectionsRunIcon>
        );
      }
      case SPORT_TYPES.STRENGTH: {
        return (
          <FitnessCenterIcon
            color='primary'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></FitnessCenterIcon>
        );
      }
      case SPORT_TYPES.CUSTOM: {
        return (
          <TimerIcon
            color='error'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></TimerIcon>
        );
      }

      default: {
        return (
          <SportsGymnasticsIcon
            color='error'
            sx={{ fontSize: 50, marginRight: '3%' }}
          ></SportsGymnasticsIcon>
        );
      }
    }
  };
  return returnSportTypeIcon();
};

export default WorkoutIcon;
