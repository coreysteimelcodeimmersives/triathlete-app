import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './UserSlice';
import { woInitialState, workoutReducer } from './WorkoutSlice';
import { workoutLibraryReducer } from './WorkoutLibrarySlice';
import { pageReducer } from './PageSlice';

const preloadedState = JSON.parse(localStorage.getItem('TriCoach.app'))
  ? JSON.parse(localStorage.getItem('TriCoach.app'))
  : {
      user: null,
      workout: woInitialState,
      workoutLibrary: null,
      page: { rightIcon: '', titleText: 'TriCoach', leftIcon: '' },
    };

const store = configureStore({
  reducer: {
    user: userReducer,
    workout: workoutReducer,
    workoutLibrary: workoutLibraryReducer,
    page: pageReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('TriCoach.app', JSON.stringify(state));
  console.log(state);
});
export default store;
