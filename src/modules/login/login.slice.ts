import { createSlice } from '@reduxjs/toolkit';
import { TOKEN } from 'constants/local-storage-keys';
import { loginApi } from './login.api';

export interface LoginState {
  accessToken: string;
  refreshToken: string;
}

const initialState: LoginState = {
  accessToken: '',
  refreshToken: '',
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearRedentials: (state) => {
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
    },
    tokenReceived: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        localStorage.setItem(TOKEN, JSON.stringify(payload));
      }
    );
    builder.addMatcher(
      loginApi.endpoints.refreshToken.matchFulfilled,
      (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        localStorage.setItem(
          TOKEN,
          JSON.stringify({
            accessToken: state.accessToken,
            refreshToken: payload.refreshToken,
          })
        );
      }
    );
  },
});

export const { clearRedentials, tokenReceived } = LoginSlice.actions;

export default LoginSlice.reducer;
