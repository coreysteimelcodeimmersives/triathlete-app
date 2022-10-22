import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import { addId, clearWorkout } from '../../Redux-State/WorkoutSlice';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import {
  addToWoLib,
  updateWoInWoLib,
} from '../../Redux-State/WorkoutLibrarySlice';
import { workoutEditPage, settingsPage } from '../../Redux-State/PageSlice';
import { doUpdate } from '../../Redux-State/UpdateSlice';

const RightIcon = () => {
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnRightIcon = () => {
    switch (page.rightIcon) {
      case 'SaveIconNewWorkout': {
        return (
          <SaveIcon
            fontSize='large'
            // onClick={() => {
            //   dispatch(addId({ id: Math.ceil(Math.random() * 10000000) }));
            //   dispatch(addToWoLib({ workout }));
            //   dispatch(clearWorkout());
            //   dispatch(doUpdate());
            // navigate('/workout-library');
            // }}
          />
        );
      }
      case 'EditIconSelectedWorkout': {
        return (
          <EditIcon
            fontSize='large'
            onClick={() => {
              dispatch(workoutEditPage());
              navigate('/edit-workout');
            }}
          />
        );
      }
      case 'SettingsIcon': {
        return (
          <SettingsIcon
            fontSize='large'
            onClick={() => {
              dispatch(settingsPage());
              navigate('/settings');
            }}
          />
        );
      }
      case 'SaveIconSelectedWorkout': {
        return (
          <SaveIcon
            fontSize='large'
            // onClick={() => {
            //   dispatch(updateWoInWoLib({ workout }));
            //   navigate('/workout-details');
            // }}
          />
        );
      }
      default: {
        return <SaveIcon fontSize='large' sx={{ opacity: 0 }} />;
      }
    }
  };
  return returnRightIcon();
};

export default RightIcon;
