import { createSlice } from '@reduxjs/toolkit';

// How to split state
const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: () => null,
  },
});

//Action creators. functions that when we call it, create our action
export const { signIn, signOut } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
