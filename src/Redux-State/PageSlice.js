import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: null,
  reducers: {
    signInPage: () => {
      return {
        rightIcon: null,
        titleText: 'TriCoach',
        leftIcon: null,
      };
    },
    workoutBuilderPage: () => {
      return {
        leftIcon: 'ClearIcon',
        titleText: 'Wo Builder',
        rightIcon: 'SaveIcon',
      };
    },
    workoutLibraryPage: () => {
      return {
        leftIcon: 'TuneIcon',
        titleText: 'Wo Library',
        rightIcon: 'SettingsIcon',
      };
    },
    athleteLibraryPage: () => {
      return {
        leftIcon: 'TuneIcon',
        titleText: 'Athletes',
        rightIcon: 'SettingsIcon',
      };
    },
  },
});

export const {
  signInPage,
  workoutBuilderPage,
  workoutLibraryPage,
  athleteLibraryPage,
} = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
