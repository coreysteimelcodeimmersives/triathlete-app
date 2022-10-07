import { createSlice } from '@reduxjs/toolkit';
// Helper Functions

const workoutSlice = createSlice({
  name: 'workoutSlice',
  initialState: null,
  reducers: {
    addToWoLib: (state, action) => {},
    copyToWoLib: (state, action) => {},
    prescribeToAthlete: (state, action) => {},
    updateTitle: (state, action) => {
      return { ...state, title: action.payload.title };
    },
    updateSportType: (state, action) => {},
    updateEnergySystem: (state, action) => {},
    updateDurationHours: (state, action) => {},
    updateDurationMinutes: (state, action) => {},
    updateDistanceValue: (state, action) => {},
    updateDistanceUnits: (state, action) => {},
    updateWarmUp: (state, action) => {},
    updateMainSet: (state, action) => {},
    updateCoolDown: (state, action) => {},
    updateSpecialNotes: (state, action) => {},
    updateAthleteNotes: (state, action) => {},
  },
});

export const { updateTitle } = workoutSlice.actions;
export const { reducer: workoutReducer } = workoutSlice;
