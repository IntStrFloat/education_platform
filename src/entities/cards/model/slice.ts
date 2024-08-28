import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardInterface, Tag } from "./types";

const initialState: CardInterface = {
  selectedTheme: "Frontend",
  filterTag: [],
};

export const CardsSlice = createSlice({
  name: "CardsSlice",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Tag>) => {
      state.selectedTheme = action.payload;
    },
    changeTags: (state, action: PayloadAction<string[]>) => {
      state.filterTag = action.payload;
    },
  },
});
export const { changeTheme, changeTags } = CardsSlice.actions;
