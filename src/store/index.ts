import { configureStore } from '@reduxjs/toolkit';
import { LoginReducer } from 'modules/login';
import { loginApi } from 'modules/login/login.api';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
});
