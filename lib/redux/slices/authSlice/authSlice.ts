import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signOutUser, signUpUser } from './thunks';

interface AuthState {
  user: User | undefined;
  loading: boolean;
  error: string | undefined;
}

interface User {
  id: string;
  email: string;
}

const initialState: AuthState = {
  user: undefined,
  loading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOutUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = undefined;
        state.loading = false;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
