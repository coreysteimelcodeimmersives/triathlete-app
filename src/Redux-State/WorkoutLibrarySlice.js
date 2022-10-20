import { createSlice } from '@reduxjs/toolkit';
export const woLibInitialState = [];

const workoutLibrarySlice = createSlice({
  name: 'workoutLibrary',
  initialState: woLibInitialState,
  reducers: {
    addToWoLib: (state, action) => {
      return [...state, { ...action.payload.workout }];
    },
    prescribeToAthlete: (state, action) => {},
    updateWoInWoLib: (state, action) => {
      return state.map((workout) => {
        if (workout.id === action.payload.workout.id) {
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
