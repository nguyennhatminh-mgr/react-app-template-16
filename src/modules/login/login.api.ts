import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from 'services/base-query';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'api/login/',
        method: 'POST',
        body: { email, password },
      }),
    }),
    refreshToken: builder.mutation({
      query: ({ refresh }) => ({
        url: 'api/refresh/',
        method: 'POST',
        body: { refresh },
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = loginApi;
