import React, { createContext, useContext, useReducer, useEffect } from 'react';

// make this an enum
const ACTIONS = {
  ADD_TO_WO_LIB: 'add-to-wo-lib',
  COPY_TO_WO_LIB: 'copy-to-wo-lib',
  DELETE_FROM_WO_LIB: 'delete-from-wo-lib',
  PRESCRIBE_TO_ATHLETE: 'prescribe-to-athlete',
  UPDATE_WO_TITLE: 'update-wo-title',
  UPDATE_WO_SPORT_TYPE: 'update-wo-sport-type',
  UPDATE_WO_ENERGY_SYSTEM: 'update-wo-energy-system',
  UPDATE_WO_DURATION_HOURS: 'update-wo-duration-hours',
  UPDATE_WO_DURATION_MINUTES: 'update-wo-duration-minutes',
  UPDATE_WO_DISTANCE: 'update-wo-distance',
  UPDATE_WO_DISTANCE_UNITS: 'update-wo-distance-units',
  UPDATE_WO_WARM_UP: 'update-wo-warm-up',
  UPDATE_WO_MAIN_SET: 'update-wo-main-set',
  UPDATE_WO_COOL_DOWN: 'update-wo-cool-down',
  UPDATE_WO_SPECIAL_NOTES: 'update-wo-special-notes',
  UPDATE_WO_ATHLETE_NOTES: 'update-wo-athlete-notes',
};

const workoutInitialState = {
  title: '',
  sportType: '',
  energySystem: '',
  durationHours: '',
  durationMinutes: '',
  distance: '',
  distanceUnits: '',
  warmUp: '',
  mainSet: '',
  coolDown: '',
  specialNotes: '',
  athleteNotes: '',
};

export const WorkoutContext = createContext();

export const useWorkoutContext = () => useContext(WorkoutContext);

const reducer = (workout, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WO_LIB: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.COPY_TO_WO_LIB: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.DELETE_FROM_WO_LIB: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.PRESCRIBE_TO_ATHLETE: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_TITLE: {
      // LOGIC GOES HERE
      const updatedWorkout = updateWoTitle(workout, action);
      console.log(updatedWorkout);
      return updatedWorkout;
    }

    case ACTIONS.UPDATE_WO_SPORT_TYPE: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_ENERGY_SYSTEM: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_DURATION_HOURS: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_DURATION_MINUTES: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_DISTANCE: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_DISTANCE_UNITS: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_WARM_UP: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_MAIN_SET: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_COOL_DOWN: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_SPECIAL_NOTES: {
      // LOGIC GOES HERE
      return;
    }

    case ACTIONS.UPDATE_WO_ATHLETE_NOTES: {
      // LOGIC GOES HERE
      return;
    }

    default: {
      return workout;
    }
  }
};

const updateWoTitle = (workout, action) => {
  return { ...workout, title: action.payload.title };
};

const WorkoutContextProvider = (props) => {
  const { children } = props;
  const [workout, dispatch] = useReducer(reducer, workoutInitialState);
  const handleAddToWoLib = (workout) =>
    dispatch({ type: ACTIONS.ADD_TO_WO_LIB, payload: { workout } });
  const handleCopyToWoLib = (workout) =>
    dispatch({ type: ACTIONS.COPY_TO_WO_LIB, payload: { workout } });
  const handleDeleteFromWoLib = (workout) =>
    dispatch({ type: ACTIONS.COPY_TO_WO_LIB, payload: { workout } });
  const handlePrescribeToAthlete = (workout, athlete, date) =>
    dispatch({
      type: ACTIONS.PRESCRIBE_TO_ATHLETE,
      payload: { workout, athlete, date },
    });
  const handleUpdateWoTitle = (title) =>
    dispatch({ type: ACTIONS.UPDATE_WO_TITLE, payload: { title } });
  const handleUpdateWo = () => {
    return;
  };
  return (
    <WorkoutContext.Provider
      value={{
        workout,
        handleAddToWoLib,
        handleCopyToWoLib,
        handleDeleteFromWoLib,
        handlePrescribeToAthlete,
        handleUpdateWoTitle,
        handleUpdateWo,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
