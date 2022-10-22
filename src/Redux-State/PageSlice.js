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
        rightIcon: null,
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
        rightIcon: null,
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
        leftIcon: 'TuneIconFilterWoLib',
        titleText: SPORT_TYPES[action.payload]
          ? SPORT_TYPES[action.payload]
          : 'Other',
        rightIcon: null,
      };
    },
    tuneFilterWoLibPage: () => {
      return {
        leftIcon: 'ArrowBackIosNewIconFilterWoLib',
        titleText: 'Wo Tuner',
        rightIcon: null,
      };
    },
    settingsPage: () => {
      return {
        leftIcon: null,
        titleText: 'Settings',
        rightIcon: null,
      };
    },
    weekCalendarPage: () => {
      return {
        leftIcon: 'TodayIcon',
        titleText: 'Calendar',
        rightIcon: 'SettingsIcon',
      };
    },
    athleteWeekCalPage: (state, action) => {
      return {
        leftIcon: 'ArrowBackIosNewIconAthleteLib',
        titleText: action.payload,
        rightIcon: 'TodayIcon',
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
  tuneFilterWoLibPage,
  settingsPage,
  weekCalendarPage,
  athleteWeekCalPage,
} = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
