import { createSlice } from '@reduxjs/toolkit';

const workoutLibrarySlice = createSlice({
  name: 'workoutLibrary',
  initialState: {},
  reducers: {
    addToWoLib: (state, action) => {
      const id = Math.ceil(Math.random() * 10000000);
      return { ...state, [id]: { id: id, ...action.payload.workout } };
    },
    prescribeToAthlete: (state, action) => {},
    updateWoInWoLib: (state, action) => {
      const id = action.payload.workout.id;
      const updatedWo = action.payload.workout;
      return { ...state, [id]: updatedWo };
    },
    deleteWoFromWoLib: (state, action) => {
      delete state[action.payload];
      return state;
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
