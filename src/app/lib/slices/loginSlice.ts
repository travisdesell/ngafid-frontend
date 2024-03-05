import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './../store';

interface LoginState {
  loggedIn: boolean;
  data: Object | null;
}

const initialState: LoginState = {
  loggedIn: false,
  data: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.loggedIn = true;
      state.data = {};
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loggedIn = false;
      state.data = action.payload;
    },
    forgotPasswordSuccess: (state) => {
        state.loggedIn = false;
    },
    forgotPasswordFailure: (state, action: PayloadAction<string>) => {
        state.loggedIn = false;
        state.data = action.payload;
      },
  },
});

export const { loginSuccess, loginFailure,forgotPasswordSuccess,forgotPasswordFailure  } = loginSlice.actions;
export default loginSlice.reducer;

// Async action to handle the API call
export const loginUser = (email: string, password: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', { email, password });

    const { status, data } = response;

    if (status === 200) {
      const { loggedIn, loggedOut, message } = data;

      if (loggedIn) {
        dispatch(loginSuccess());
        window.location.href = '/welcome';
      } else if (loggedOut) {
        dispatch(loginFailure("Invalid email or password!"));
      }
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Async action to handle the forgot password API call
export const forgotPassword = (email: string): AppThunk => async (dispatch) => {
    try {
      const response = await axios.post('/api/forgot_password', { email });
  
      const { status, data } = response;
  
      if (status === 200) {
        const { registeredEmail, message } = data;
  
        if (registeredEmail) {
          dispatch(forgotPasswordSuccess());
        } else {
          dispatch(forgotPasswordFailure("Please enter a registered email address."));
        }
      }
    } catch (error) {
      console.error('Error handling forgot password:', error);
    }
  };
