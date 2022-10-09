import React, { forceUpdate } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearWorkout, selectWorkout } from '../../Redux-State/WorkoutSlice';
import { deleteWoFromWoLib } from '../../Redux-State/WorkoutLibrarySlice';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const LeftIcon = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const ogWorkout = workoutLibrary[workout.id];
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
      case 'TuneIcon': {
        return (
          <TuneIcon
            fontSize='large'
            onClick={() => {
              // navigate('/sign-in');
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

      case 'ArrowBackIosNewIcon': {
        return (
          <ArrowBackIosNewIcon
            fontSize='large'
            onClick={() => {
              dispatch(selectWorkout(ogWorkout));
              navigate('/workout-details');
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