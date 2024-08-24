import { strApi } from '@/shared/api/strApi';

export const cardApi = strApi.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query<unknown, unknown>({
      query: () => '/api/v1/cards',
    }),
  }),
  overrideExisting: false,
});

export const { useGetCardsQuery } = cardApi;
