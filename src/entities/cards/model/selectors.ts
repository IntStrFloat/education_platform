import { RootState } from "@/app/store";

export const selectSelectedTags = (state: RootState) =>
  state.CardsSlice.filterTag;
