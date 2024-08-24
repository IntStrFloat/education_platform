import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery: BaseQueryFn = async (args, api, extraOptions) =>
  fetchBaseQuery({
    baseUrl: 'http://localhost',
  })(args, api, extraOptions);

export const strApi = createApi({
  reducerPath: 'str',
  baseQuery,
  endpoints: () => ({}),
});
