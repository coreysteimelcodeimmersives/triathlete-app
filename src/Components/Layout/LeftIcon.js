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
import TodayIcon from '@mui/icons-material/Today';
import { doUpdate } from '../../Redux-State/UpdateSlice';
import {
  copyWoLib,
  filterAndSortCopyWoLib,
  filterWoLibBySportType,
} from '../../Redux-State/FilteredSortedWoLibSlice';
import {
  copyWorkoutLibFilter,
  hardSetWorkoutLibFilter,
  updateFilterSportType,
} from '../../Redux-State/WorkoutLibFilterSlice';

const LeftIcon = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);
  const filteredSortedWoLib = useSelector((state) => state.filteredSortedWoLib);

  const dispatch = useDispatch();
  const returnLeftIcon = () => {
    switch (page.leftIcon) {
      case 'ClearIconNewWorkout': {
        return (
          <ClearIcon
            fontSize='large'
            onClick={() => {
              dispatch(clearWorkout());
              dispatch(doUpdate());
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
              dispatch(copyWoLib(workoutLibrary));
              dispatch(copyWorkoutLibFilter(workoutLibFilter));
              dispatch(tuneFilterWoLibPage());
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
              dispatch(hardSetWorkoutLibFilter(workoutLibFilter.copy));
              dispatch(
                filterAndSortCopyWoLib({
                  woLib: filteredSortedWoLib,
                  engSysFilter: workoutLibFilter.copy.energySystem,
                })
              );
              navigate('/workout-library-filter');
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
              navigate('/calendar');
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
