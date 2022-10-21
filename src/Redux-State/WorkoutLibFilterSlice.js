import { createSlice } from '@reduxjs/toolkit';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

export const workoutLibFilterIntVal = {
  sportType: null,
  energySystem: {
    [ENERGY_SYSTEMS.N_M]: true,
    [ENERGY_SYSTEMS.A_C]: true,
    [ENERGY_SYSTEMS.F_T_P]: true,
    [ENERGY_SYSTEMS.M_A_P]: true,
    [ENERGY_SYSTEMS.SUB_T]: true,
    [ENERGY_SYSTEMS.AEROBIC_BASE]: true,
  },
  criteria: 'title',
  order: 'asc',
};

const workoutLibFilterSlice = createSlice({
  name: 'workoutLibFilter',
  initialState: workoutLibFilterIntVal,
  reducers: {
    updateFilterSportType: (state, action) => {
      return { ...workoutLibFilterIntVal, sportType: action.payload.sportType };
    },
    updateFilterEnergySystem: (state, action) => {
      return {
        ...state,
        energySystem: {
          ...state.energySystem,
          [action.payload.key]: action.payload.value,
        },
      };
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
    copyWorkoutLibFilter: (state, action) => {
      return { ...state, copy: { ...action.payload, copy: undefined } };
    },
    hardSetWorkoutLibFilter: (state, action) => {
      return { ...action.payload, copy: undefined };
    },
    selectAllEnergySystems: (state, action) => {
      return {
        ...state,
        energySystem: {
          [ENERGY_SYSTEMS.N_M]: true,
          [ENERGY_SYSTEMS.A_C]: true,
          [ENERGY_SYSTEMS.F_T_P]: true,
          [ENERGY_SYSTEMS.M_A_P]: true,
          [ENERGY_SYSTEMS.SUB_T]: true,
          [ENERGY_SYSTEMS.AEROBIC_BASE]: true,
        },
      };
    },
    clearAllEnergySystems: (state, action) => {
      return {
        ...state,
        energySystem: {
          [ENERGY_SYSTEMS.N_M]: false,
          [ENERGY_SYSTEMS.A_C]: false,
          [ENERGY_SYSTEMS.F_T_P]: false,
          [ENERGY_SYSTEMS.M_A_P]: false,
          [ENERGY_SYSTEMS.SUB_T]: false,
          [ENERGY_SYSTEMS.AEROBIC_BASE]: false,
        },
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
  copyWorkoutLibFilter,
  hardSetWorkoutLibFilter,
  selectAllEnergySystems,
  clearAllEnergySystems,
} = workoutLibFilterSlice.actions;
export const { reducer: workoutLibFilterReducer } = workoutLibFilterSlice;
