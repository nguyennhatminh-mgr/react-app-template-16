import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { TOKEN } from 'constants/local-storage-keys';
import { RouterConstants } from 'routes';

import { baseQuery } from './base-query';

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const localData = localStorage.getItem(TOKEN);
    let refreshToken = '';
    if (localData) {
      refreshToken = JSON.parse(localData).refreshToken;
    }

    const refreshResult = await baseQuery(
      {
        url: '/api/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      baseQuery(
        {
          url: '/api/logout/',
          method: 'POST',
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );
      window.location.replace(RouterConstants.login);
    }
  }
  return result;
};
