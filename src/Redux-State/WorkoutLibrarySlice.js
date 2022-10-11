import { createSlice } from '@reduxjs/toolkit';

export const woLibInitialState = [];

const workoutLibrarySlice = createSlice({
  name: 'workoutLibrary',
  initialState: woLibInitialState,
  reducers: {
    addToWoLib: (state, action) => {
      const id = Math.ceil(Math.random() * 10000000);
      return [...state, { id: id, ...action.payload.workout }];
    },
    prescribeToAthlete: (state, action) => {},
    updateWoInWoLib: (state, action) => {
      console.log(action.payload);
      return state.map((workout) => {
        if (workout.id === action.payload.workout.id) {
          console.log('found it');
          return action.payload.workout;
        }
        return workout;
      });
    },
    deleteWoFromWoLib: (state, action) => {
      return state.filter((workout) => workout.id !== action.payload);
    },
  },
});

export const {
  addToWoLib,
  prescribeToAthlete,
  updateWoInWoLib,
  deleteWoFromWoLib,
} = workoutLibrarySlice.actions;
export const { reducer: workoutLibraryReducer } = workoutLibrarySlice;
