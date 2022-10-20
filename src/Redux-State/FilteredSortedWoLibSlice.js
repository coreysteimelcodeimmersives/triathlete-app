import { createSlice } from '@reduxjs/toolkit';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

const filteredSortedWoLibSlice = createSlice({
  name: 'filteredSortedWoLib',
  initialState: [],
  reducers: {
    copyWoLib: (state, action) => {
      return [...action.payload];
    },
    filterWoLibBySportType: (state, action) => {
      if (!action.payload.sportType) {
        return action.payload.woLib.filter((workout) => {
          return !workout.hasOnPropery('sportType');
        });
      } else {
        return action.payload.woLib.filter((workout) => {
          return workout.sportType === action.payload.sportType;
        });
      }
    },
    filterWoLibByEnergySystem: (state, action) => {
      console.log(action.payload.woLib);
      console.log(action.payload.engSysFilter);
      console.log(
        action.payload.engSysFilter[ENERGY_SYSTEMS[action.payload.energySystem]]
      );
      return action.payload.woLib.filter((workout) => {
        if (action.payload.engSysFilter[ENERGY_SYSTEMS[workout.energySystem]]) {
          return workout;
        }
      });
    },
    sortWoLibByTitleAsc: (state, action) => {},
    sortWoLibByTitleDesc: (state, action) => {},
    sortWoLibByDurationAsc: (state, action) => {},
    sortWoLibByDurationDesc: (state, action) => {},
  },
});

export const {
  copyWoLib,
  filterWoLibBySportType,
  filterWoLibByEnergySystem,
  sortWoLibByTitleAsc,
  sortWoLibByTitleDesc,
  sortWoLibByDurationAsc,
  sortWoLibByDurationDesc,
} = filteredSortedWoLibSlice.actions;
export const { reducer: filteredSortedWoLibReducer } = filteredSortedWoLibSlice;
