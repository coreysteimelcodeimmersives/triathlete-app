import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './UserSlice';
import { woInitialState, workoutReducer } from './WorkoutSlice';
import {
  woLibInitialState,
  workoutLibraryReducer,
} from './WorkoutLibrarySlice';
import { pageReducer } from './PageSlice';
import { workoutLibFilterReducer } from './WorkoutLibFilterSlice';
import { updateReducer } from './UpdateSlice';
import { athleteLibraryReducer } from './AthleteLibrarySlice';

const preloadedState = JSON.parse(localStorage.getItem('TriCoach.app'))
  ? JSON.parse(localStorage.getItem('TriCoach.app'))
  : {
      user: null,
      workout: woInitialState,
      workoutLibrary: woLibInitialState,
      page: { rightIcon: '', titleText: 'TriCoach', leftIcon: '' },
      workoutLibFilter: null,
      update: { general: false, woBuilder: false },
      athleteLibrary: { athlete: {}, athLib: [] },
    };

const store = configureStore({
  reducer: {
    user: userReducer,
    workout: workoutReducer,
    workoutLibrary: workoutLibraryReducer,
    page: pageReducer,
    workoutLibFilter: workoutLibFilterReducer,
    update: updateReducer,
    athleteLibrary: athleteLibraryReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('TriCoach.app', JSON.stringify(state));
  console.log(state);
});
export default store;
