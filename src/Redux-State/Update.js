import { createSlice } from '@reduxjs/toolkit';

const updateSlice = createSlice({
  name: 'update',
  initialState: false,
  reducers: {
    doUpdate: (state, action) => {
      return state ? false : true;
    },
  },
});

export const { doUpdate } = updateSlice.actions;
export const { reducer: updateReducer } = updateSlice;
