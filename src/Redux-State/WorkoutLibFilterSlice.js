import { createSlice } from '@reduxjs/toolkit';

const workoutLibFilterSlice = createSlice({
  name: 'workoutLibFilter',
  initialState: {
    sportType: '',
    energySystem: '',
    duration: '',
    distance: '',
  },
  reducers: {
    updateWoLibFilter: (state, action) => {},
  },
});

export const { updateWoLibFilter } = workoutLibFilterSlice.actions;
export const { reducer: workoutLibFilterReducer } = workoutLibFilterSlice;
