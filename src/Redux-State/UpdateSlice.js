import { createSlice } from '@reduxjs/toolkit';

const updateSlice = createSlice({
  name: 'update',
  initialState: { general: false, woBuilder: false },
  reducers: {
    doUpdate: (state, action) => {
      return state.general
        ? { ...state, general: false }
        : { ...state, general: true };
    },
    doClearWoBuilderForm: (state, action) => {
      return state.woBuilder
        ? { ...state, woBuilder: false }
        : { ...state, woBuilder: true };
    },
  },
});

export const { doUpdate, doClearWoBuilderForm } = updateSlice.actions;
export const { reducer: updateReducer } = updateSlice;
