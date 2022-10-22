import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearWorkout, selectWorkout } from '../../Redux-State/WorkoutSlice';
import {
  deleteWoFromWoLib,
  filterAndSortWoLib,
  filterWoLibBySportType,
} from '../../Redux-State/WorkoutLibrarySlice';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  athleteLibraryPage,
  tuneFilterWoLibPage,
} from '../../Redux-State/PageSlice';
import TodayIcon from '@mui/icons-material/Today';
import { doClearWoBuilderForm, doUpdate } from '../../Redux-State/UpdateSlice';
import {
  copyWorkoutLibFilter,
  hardSetWorkoutLibFilter,
} from '../../Redux-State/WorkoutLibFilterSlice';

const LeftIcon = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary.woLib);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);

  const dispatch = useDispatch();
  const returnLeftIcon = () => {
    switch (page.leftIcon) {
      case 'ClearIconNewWorkout': {
        return (
          <ClearIcon
            fontSize='large'
            onClick={() => {
              // dispatch(clearWorkout());
              dispatch(doClearWoBuilderForm());
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
              console.log('click');
              dispatch(copyWorkoutLibFilter(workoutLibFilter));
              navigate('/wo-tuner');
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
              dispatch(
                filterWoLibBySportType({
                  woLib: workoutLibrary,
                  sportType: workout.sportType,
                })
              );
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
              console.log('click');
              dispatch(hardSetWorkoutLibFilter(copyWorkoutLibFilter));
              dispatch(
                filterAndSortWoLib({
                  woLib: workoutLibrary,
                  engSysFilter: workoutLibFilter.copy.energySystem,
                })
              );
              // navigate('/workout-library-filter');
            }}
          />
        );
      }

      case 'TodayIcon': {
        return (
          <TodayIcon
            fontSize='large'
            onClick={() => {
              dispatch(doUpdate());
              navigate('/calendar-week');
            }}
          />
        );
      }

      case 'ArrowBackIosNewIconAthleteLib': {
        return (
          <ArrowBackIosNewIcon
            fontSize='large'
            onClick={() => {
              dispatch(athleteLibraryPage);
              navigate('/athlete-library');
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
