import { createSlice } from '@reduxjs/toolkit';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

export const workoutLibFilterIntVal = {
  sportType: null,
  energySystem: [
    { [ENERGY_SYSTEMS.N_M]: true },
    { [ENERGY_SYSTEMS.A_C]: true },
    { [ENERGY_SYSTEMS.F_T_P]: true },
    { [ENERGY_SYSTEMS.SUB_T]: true },
    { [ENERGY_SYSTEMS.AEROBIC_BASE]: true },
  ],
  criteria: 'title',
  order: 'asc',
};

const workoutLibFilterSlice = createSlice({
  name: 'workoutLibFilter',
  initialState: workoutLibFilterIntVal,
  reducers: {
    updateFilterSportType: (state, action) => {
      return { ...state, sportType: action.payload.sportType };
    },
    updateFilterEnergySystem: (state, action) => {
      return { ...state, energySystem: action.payload.energySystem };
    },
    updateFilterCriteria: (state, action) => {
      return { ...state, criteria: action.payload.criteria };
    },
    updateFilterOrder: (state, action) => {
      return { ...state, order: action.payload.order };
    },
    clearWorkoutLibFilter: () => {
      return workoutLibFilterIntVal;
    },
    selectAllEnergySystems: (state, action) => {
      return {
        ...state,
        energySystem: [
          { [ENERGY_SYSTEMS.N_M]: true },
          { [ENERGY_SYSTEMS.A_C]: true },
          { [ENERGY_SYSTEMS.F_T_P]: true },
          { [ENERGY_SYSTEMS.SUB_T]: true },
          { [ENERGY_SYSTEMS.AEROBIC_BASE]: true },
        ],
      };
    },
  },
});

export const {
  updateFilterSportType,
  updateFilterEnergySystem,
  updateFilterCriteria,
  updateFilterOrder,
  clearWorkoutLibFilter,
  selectAllEnergySystems,
} = workoutLibFilterSlice.actions;
export const { reducer: workoutLibFilterReducer } = workoutLibFilterSlice;
