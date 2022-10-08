import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './UserSlice';
import { workoutReducer, workoutInitialState } from './WorkoutSlice';
import { workoutLibraryReducer } from './WorkoutLibrarySlice';

const preloadedState = JSON.parse(localStorage.getItem('TriCoach.app'))
  ? JSON.parse(localStorage.getItem('TriCoach.app'))
  : { user: null, workout: { ...workoutInitialState }, workoutLibrary: null };

const store = configureStore({
  reducer: {
    user: userReducer,
    workout: workoutReducer,
    workoutLibrary: workoutLibraryReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('TriCoach.app', JSON.stringify(state));
  console.log(state);
});
export default store;
