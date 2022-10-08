import { createSlice } from '@reduxjs/toolkit';

const workoutLibrarySlice = createSlice({
  name: 'workoutLibrary',
  initialState: null,
  reducers: {
    addToWoLib: (state, action) => {
      const id = Math.ceil(Math.random() * 10000);
      return { ...state, [id]: { id: id, ...action.payload.workout } };
    },
    copyWoToLib: (state, action) => {},
    prescribeToAthlete: (state, action) => {},
  },
});

export const { addToWoLib, copyWoToLib, prescribeToAthlete } =
  workoutLibrarySlice.actions;
export const {
  reducer: workoutLibraryReducer,
  initialState: workoutLibraryInitialState,
} = workoutLibrarySlice;
