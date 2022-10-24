import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const Navigate = (dest) => {
  const navigate = useNavigate();
  return navigate(dest);
};

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: () => null,
  },
});

export const { signIn, signOut } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
