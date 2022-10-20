import { createSlice } from '@reduxjs/toolkit';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

const sortWoLib = (woLib, criteria, order) => {
  if (criteria === 'title') {
    if (order === 'asc') {
      woLib.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    if (order === 'desc') {
      woLib.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
    }
  }
  if (criteria === 'totalDuration') {
    if (order === 'asc') {
      woLib.sort((a, b) => {
        return a.totalDuration - b.totalDuration;
      });
    }
    if (order === 'desc') {
      woLib.sort((a, b) => {
        return b.totalDuration - a.totalDuration;
      });
    }
  }
};

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
    filterAndSortCopyWoLib: (state, action) => {
      const woLib = action.payload.woLib.filter((workout) => {
        if (action.payload.engSysFilter[ENERGY_SYSTEMS[workout.energySystem]]) {
          return workout;
        }
      });
      sortWoLib(woLib, action.payload.criteria, action.payload.order);
      return woLib;
    },
  },
});

export const {
  copyWoLib,
  filterWoLibBySportType,
  filterAndSortCopyWoLib,
  sortWoLibByTitleAsc,
  sortWoLibByTitleDesc,
  sortWoLibByDurationAsc,
  sortWoLibByDurationDesc,
} = filteredSortedWoLibSlice.actions;
export const { reducer: filteredSortedWoLibReducer } = filteredSortedWoLibSlice;
