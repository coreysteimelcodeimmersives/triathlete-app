import { createSlice } from '@reduxjs/toolkit';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';
export const woLibInitialState = { woLib: [], copyWoLib: [] };

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

const workoutLibrarySlice = createSlice({
  name: 'workoutLibrary',
  initialState: woLibInitialState,
  reducers: {
    hardUpdate: (state, action) => {
      return { woLib: [...action.payload], copyWoLib: [] };
    },
    addToWoLib: (state, action) => {
      return {
        ...state,
        woLib: [...state.woLib, { ...action.payload.workout }],
      };
    },
    prescribeToAthlete: (state, action) => {},
    updateWoInWoLib: (state, action) => {
      const updatedWoLib = state.woLib.map((workout) => {
        if (workout.id === action.payload.workout.id) {
          return action.payload.workout;
        }
        return workout;
      });
      return { ...state, woLib: updatedWoLib };
    },
    deleteWoFromWoLib: (state, action) => {
      const updatedWoLib = state.woLib.filter(
        (workout) => workout.id !== action.payload
      );
      return { copyWoLib: updatedWoLib, woLib: updatedWoLib };
    },
    clearWorkoutLibrary: () => {
      return woLibInitialState;
    },
    filterWoLibBySportType: (state, action) => {
      const woLib = action.payload.woLib.filter((workout) => {
        return workout.sportType === action.payload.sportType;
      });
      return { woLib: [...woLib], copyWoLib: [...woLib] };
    },
    filterAndSortWoLib: (state, action) => {
      const updateWoLib = action.payload.woLib.filter((workout) => {
        if (action.payload.engSysFilter[ENERGY_SYSTEMS[workout.energySystem]]) {
          return workout;
        }
      });
      sortWoLib(updateWoLib, action.payload.criteria, action.payload.order);
      return { ...state, woLib: updateWoLib };
    },
    resetWoLibWithCopy: (state, action) => {
      return { ...state, woLib: [...action.payload] };
    },
  },
});

export const {
  hardUpdate,
  addToWoLib,
  prescribeToAthlete,
  updateWoInWoLib,
  deleteWoFromWoLib,
  clearWorkoutLibrary,
  filterWoLibBySportType,
  filterAndSortWoLib,
  resetWoLibWithCopy,
} = workoutLibrarySlice.actions;
export const { reducer: workoutLibraryReducer } = workoutLibrarySlice;
