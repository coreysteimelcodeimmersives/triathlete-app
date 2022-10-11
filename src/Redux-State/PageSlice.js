import { createSlice } from '@reduxjs/toolkit';
import { SPORT_TYPES } from '../Data/SportTypes';

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
        leftIcon: 'ClearIconNewWorkout',
        titleText: 'Wo Builder',
        rightIcon: 'SaveIconNewWorkout',
        bottomButton: 'Add to Workout Library',
      };
    },
    workoutLibraryPage: () => {
      return {
        leftIcon: null,
        titleText: 'Wo Library',
        rightIcon: 'SettingsIcon',
      };
    },
    workoutDetailsPage: () => {
      return {
        leftIcon: 'ArrowBackIosNewIconWoDetails',
        titleText: 'Wo Details',
        rightIcon: 'EditIconSelectedWorkout',
      };
    },
    workoutEditPage: () => {
      return {
        leftIcon: 'ArrowBackIosNewIconWoEdit',
        titleText: 'Wo Edits',
        rightIcon: 'SaveIconSelectedWorkout',
        bottomButton: 'Update Workout',
      };
    },
    athleteLibraryPage: () => {
      return {
        leftIcon: 'TuneIcon',
        titleText: 'Athletes',
        rightIcon: 'SettingsIcon',
      };
    },
    woLibFilterPage: (state, action) => {
      return {
        leftIcon: 'TuneIcon',
        titleText: SPORT_TYPES[action.payload]
          ? SPORT_TYPES[action.payload]
          : 'Other',
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
  workoutDetailsPage,
  workoutEditPage,
  woLibFilterPage,
} = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
