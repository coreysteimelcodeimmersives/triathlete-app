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

const getDurObj = (hours, mins) => {
  const hoursToMins = Number(hours) * 60;
  console.log(hoursToMins);
  const totalDuration = hoursToMins + Number(mins);
  console.log(totalDuration);
  const newHours = Math.floor(totalDuration / 60);
  console.log(newHours);
  const newMins = totalDuration % 60;
  console.log(newMins);
  return {
    totalDuration: totalDuration,
    durationHours: newHours,
    durationMinutes: newMins,
  };
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState: {},
  reducers: {
    addId: (state, action) => {
      console.log('add id');
      return { ...state, id: action.payload.id };
    },
    updateTitle: (state, action) => {
      return { ...state, title: action.payload.title };
    },
    updateSportType: (state, action) => {
      return { ...state, sportType: action.payload.sportType };
    },
    updateEnergySystem: (state, action) => {
      return { ...state, energySystem: action.payload.energySystem };
    },
    updateDuration: (state, action) => {
      let hours = action.payload.durationHours;
      if (!hours) {
        hours = 0;
      }
      console.log(hours);
      let mins = action.payload.durationMinutes;
      if (!mins) {
        mins = 0;
      }
      console.log(mins);
      const durObj = getDurObj(hours, mins);
      return {
        ...state,
        durationMinutes: durObj.durationMinutes,
        durationHours: durObj.durationHours,
        totalDuration: durObj.totalDuration,
      };
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
    clearWorkout: () => {
      return {};
    },
    selectWorkout: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addId,
  updateTitle,
  updateSportType,
  updateEnergySystem,
  updateDuration,
  updateDistanceValue,
  updateDistanceUnits,
  updateWarmUp,
  updateMainSet,
  updateCoolDown,
  updateSpecialNotes,
  updateAthleteNotes,
  clearWorkout,
  selectWorkout,
} = workoutSlice.actions;
export const { reducer: workoutReducer } = workoutSlice;
