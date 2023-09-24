import { createAppAsyncThunk } from '../../createAppAsyncThunk';

export const signInUser = createAppAsyncThunk(
  'auth/signInUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data.message);
      }

      const user = await response.json();
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const signOutUser = createAppAsyncThunk(
  'auth/signOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/auth/sign-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data.message);
      }
    } catch (error) {
      throw error;
    }
  }
);

export const signUpUser = createAppAsyncThunk(
  'auth/signUpUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data.message);
      }

      const user = await response.json();
      return user;
    } catch (error) {
      throw error;
    }
  }
);
