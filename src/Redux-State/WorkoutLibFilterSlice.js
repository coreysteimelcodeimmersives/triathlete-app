import { createSlice } from '@reduxjs/toolkit';

export const workoutLibFilterIntVal = {
  sportType: null,
  energySystem: null,
  durationAsc: null,
  durationDesc: null,
  distanceAsc: null,
  distanceDesc: null,
};

const workoutLibFilterSlice = createSlice({
  name: 'workoutLibFilter',
  initialState: workoutLibFilterIntVal,
  reducers: {
    updateWoLibFilter: (state, action) => {
      return { ...state, [action.payload.key]: action.payload.value };
    },
    clearWorkoutLibFilter: () => {
      return workoutLibFilterIntVal;
    },
  },
});

export const { updateWoLibFilter, clearWorkoutLibFilter } =
  workoutLibFilterSlice.actions;
export const { reducer: workoutLibFilterReducer } = workoutLibFilterSlice;
