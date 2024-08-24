import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardInterface } from './types';

const initialState: CardInterface = {
  selectedTheme:'Frontend Dev'
};

export const CardsSlice = createSlice({
  name: 'CardsSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>)=>{
      state.selectedTheme = action.payload
    }
  },
});
export const { changeTheme } = CardsSlice.actions;