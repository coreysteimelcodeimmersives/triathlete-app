import { createSlice } from '@reduxjs/toolkit';
// Helper Functions

const woInitialState = {
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
  initialState: woInitialState,
  reducers: {
    updateTitle: (state, action) => {
      return { ...state, title: action.payload.title };
    },
    updateSportType: (state, action) => {
      return { ...state, sportType: action.payload.sportType };
    },
    updateEnergySystem: (state, action) => {
      return { ...state, energySystem: action.payload.energySystem };
    },
    updateDurationHours: (state, action) => {
      return { ...state, durationHours: action.payload.durationHours };
    },
    updateDurationMinutes: (state, action) => {
      return { ...state, durationMinutes: action.payload.durationMinutes };
    },
    updateDistanceValue: (state, action) => {
      return { ...state, distanceValue: action.payload.distanceValue };
    },
    updateDistanceUnits: (state, action) => {
      return { ...state, distanceUnits: action.payload.distanceUnits };
    },
    updateWarmUp: (state, action) => {
      return { ...state, warmUp: action.payload.warmUp };
    },
    updateMainSet: (state, action) => {
      return { ...state, mainSet: action.payload.mainSet };
    },
    updateCoolDown: (state, action) => {
      return { ...state, coolDown: action.payload.coolDown };
    },
    updateSpecialNotes: (state, action) => {
      return { ...state, specialNotes: action.payload.specialNotes };
    },
    updateAthleteNotes: (state, action) => {
      return { ...state, athleteNotes: action.payload.athleteNotes };
    },
    clearWo: () => {
      return woInitialState;
    },
  },
});

export const {
  updateTitle,
  updateSportType,
  updateEnergySystem,
  updateDurationHours,
  updateDurationMinutes,
  updateDistanceValue,
  updateDistanceUnits,
  updateWarmUp,
  updateMainSet,
  updateCoolDown,
  updateSpecialNotes,
  updateAthleteNotes,
  clearWo,
} = workoutSlice.actions;
export const { reducer: workoutReducer, initialState: workoutInitialState } =
  workoutSlice;
