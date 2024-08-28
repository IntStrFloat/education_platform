export interface CardInterface {
  selectedTheme: Tag;
  filterTag: string[];
}

export type Tag =
  | "Frontend"
  | "Backend"
  | "QA"
  | "IOS"
  | "Android"
  | "Data Sciense";
