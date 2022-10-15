import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearWorkout, selectWorkout } from '../../Redux-State/WorkoutSlice';
import { deleteWoFromWoLib } from '../../Redux-State/WorkoutLibrarySlice';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { tuneFilterWoLibPage } from '../../Redux-State/PageSlice';

const LeftIcon = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const dispatch = useDispatch();
  const returnLeftIcon = () => {
    switch (page.leftIcon) {
      case 'ClearIconNewWorkout': {
        return (
          <ClearIcon
            fontSize='large'
            onClick={() => {
              dispatch(clearWorkout());
              navigate('/temp-solution');
            }}
          />
        );
      }
      case 'PersonIcon': {
        return (
          <PersonIcon
            fontSize='large'
            onClick={() => {
              // navigate('/sign-in');
            }}
          />
        );
      }
      case 'TuneIconFilterWoLib': {
        return (
          <TuneIcon
            fontSize='large'
            onClick={() => {
              dispatch(tuneFilterWoLibPage());
              navigate('/tune-filter');
            }}
          />
        );
      }
      case 'DeleteForeverIcon': {
        return (
          <DeleteForeverIcon
            fontSize='large'
            onClick={() => {
              dispatch(deleteWoFromWoLib(workout.id));
              navigate('/workout-library');
            }}
          />
        );
      }

      case 'ArrowBackIosNewIconWoEdit': {
        return (
          <ArrowBackIosNewIcon
            fontSize='large'
            onClick={() => {
              dispatch(selectWorkout(workout));
              navigate('/workout-details');
            }}
          />
        );
      }

      case 'ArrowBackIosNewIconWoDetails': {
        return (
          <ArrowBackIosNewIcon
            fontSize='large'
            onClick={() => {
              dispatch(selectWorkout(workout));
              navigate('/workout-library-filter');
            }}
          />
        );
      }

      case 'ArrowBackIosNewIconFilterWoLib': {
        return (
          <ArrowBackIosNewIcon
            fontSize='large'
            onClick={() => {
              dispatch(selectWorkout(workout));
              navigate('/workout-library-filter');
            }}
          />
        );
      }

      default: {
        return <PersonIcon fontSize='large' sx={{ opacity: 0 }} />;
      }
    }
  };
  return returnLeftIcon();
};

export default LeftIcon;
