import { CardsSlice } from '@/entities/cards/model/slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [CardsSlice.name]: CardsSlice.reducer,
});
