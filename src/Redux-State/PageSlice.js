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
        leftIcon: 'TodayIcon',
        titleText: action.payload.firstName,
        rightIcon: null,
        date: action.payload.date,
      };
    },
    dayViewPage: (state, action) => {
      return {
        leftIcon: 'ArrowBackWeekCal',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
      };
    },
    addWoWoLib: (state, action) => {
      return {
        leftIcon: 'ArrowBackDayView',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
      };
    },
    addWoWoFilterBySport: (state, action) => {
      return {
        leftIcon: 'ArrowBackWoLib',
        titleText: action.payload.athleteFirstName,
        rightIcon: 'AddWoTuner',
        date: action.payload.date,
      };
    },
    addWoWoTuner: (state, action) => {
      return {
        leftIcon: 'ArrowBackWoFilterBySport',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
      };
    },
    addWoWoSelectWo: (state, action) => {
      return {
        leftIcon: 'ArrowBackWoFilterBySportTwo',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
      };
    },
    athleteWoDetails: (state, action) => {
      return {
        leftIcon: 'ArrowBackDayView',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
        athleteWoDetails: true,
      };
    },
    athleteWoDetailsEditPage: (state, action) => {
      return {
        leftIcon: 'ArrowBackToWoDetails',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
        athleteWoDetails: true,
        bottomButton: 'Update Workout',
      };
    },
    addWoWoLibFromFAB: (state, action) => {
      return {
        leftIcon: 'ArrowBackWeekCal',
        titleText: action.payload.athleteFirstName,
        rightIcon: null,
        date: action.payload.date,
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
  dayViewPage,
  addWoWoLib,
  addWoWoFilterBySport,
  addWoWoTuner,
  addWoWoSelectWo,
  athleteWoDetails,
  athleteWoDetailsEditPage,
  addWoWoLibFromFAB,
} = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
