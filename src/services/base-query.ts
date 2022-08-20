import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { TOKEN } from 'constants/local-storage-keys';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers) => {
    const localData = localStorage.getItem(TOKEN);
    let accessToken = '';
    if (localData) {
      accessToken = JSON.parse(localData).accessToken;
    }

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});
