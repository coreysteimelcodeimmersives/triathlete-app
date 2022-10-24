import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import {
  workoutEditPage,
  settingsPage,
  addWoWoTuner,
} from '../../Redux-State/PageSlice';
import TuneIcon from '@mui/icons-material/Tune';
import { copyWorkoutLibFilter } from '../../Redux-State/WorkoutLibFilterSlice';

const RightIcon = () => {
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnRightIcon = () => {
    switch (page.rightIcon) {
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
      case 'AddWoTuner': {
        return (
          <TuneIcon
            fontSize='large'
            onClick={() => {
              dispatch(copyWorkoutLibFilter(workoutLibFilter));
              dispatch(
                addWoWoTuner({
                  athleteFirstName: page.titleText,
                  date: page.date,
                })
              );
              navigate('/wo-tuner');
            }}
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
