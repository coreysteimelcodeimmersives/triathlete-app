import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './UserSlice';
import { workoutReducer } from './WorkoutSlice';

const preloadedState = JSON.parse(localStorage.getItem('TriCoach.app'))
  ? JSON.parse(localStorage.getItem('TriCoach.app'))
  : { user: null };

const store = configureStore({
  reducer: {
    user: userReducer,
    workout: workoutReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('TriCoach.app', JSON.stringify(state));
});
export default store;
