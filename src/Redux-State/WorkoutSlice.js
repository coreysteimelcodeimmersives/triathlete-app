import { createSlice } from '@reduxjs/toolkit';
// Helper Functions

export const woInitialState = {
  title: '',
  sportType: '',
  energySystem: '',
  durationHours: '',
  durationMinutes: '',
  distanceValue: '',
  distanceUnits: '',
  warmUp: '',
  mainSet: '',
  coolDown: '',
  specialNotes: '',
  athleteNotes: '',
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState: {},
  reducers: {
    clearWorkout: () => {
      return {};
    },
    selectWorkout: (state, action) => {
      return action.payload;
    },
  },
});

export const { clearWorkout, selectWorkout } = workoutSlice.actions;
export const { reducer: workoutReducer } = workoutSlice;
