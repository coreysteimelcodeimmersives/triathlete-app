import { createSlice } from '@reduxjs/toolkit';

const athleteLibrarySlice = createSlice({
  name: 'athlete',
  initialState: { athlete: {}, athLib: [] },
  reducers: {
    getAthletes: (state, action) => {
      return { ...state, athLib: [...action.payload] };
    },
    selectAthlete: (state, action) => {
      return { ...state, athlete: { ...action.payload } };
    },
    clearAthleteLib: (state, action) => {
      return {};
    },
  },
});

export const { getAthletes, selectAthlete, clearAthleteLib } =
  athleteLibrarySlice.actions;
export const { reducer: athleteLibraryReducer } = athleteLibrarySlice;
