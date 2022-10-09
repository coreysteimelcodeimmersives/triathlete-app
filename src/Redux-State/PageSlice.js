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
        leftIcon: 'ClearIconNewWorkout',
        titleText: 'Wo Builder',
        rightIcon: 'SaveIconNewWorkout',
        bottomButton: 'Add to Workout Library',
      };
    },
    workoutLibraryPage: () => {
      return {
        leftIcon: 'TuneIcon',
        titleText: 'Wo Library',
        rightIcon: 'SettingsIcon',
      };
    },
    workoutDetailsPage: () => {
      return {
        leftIcon: 'DeleteForeverIcon',
        titleText: 'Wo Details',
        rightIcon: 'EditIconSelectedWorkout',
      };
    },
    workoutEditPage: () => {
      return {
        leftIcon: 'ArrowBackIosNewIcon',
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
  },
});

export const {
  signInPage,
  workoutBuilderPage,
  workoutLibraryPage,
  athleteLibraryPage,
  workoutDetailsPage,
  workoutEditPage,
} = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
