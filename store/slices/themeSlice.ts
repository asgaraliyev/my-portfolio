import { createSlice } from "@reduxjs/toolkit";
export interface ThemeState {
  isDark: boolean;
}
const initialState: ThemeState = {
  isDark: false,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
      toggle(state){
        console.log("state",state)
        state.isDark=!state.isDark
      }
  }
});
console.log("themeSlice.tsx",themeSlice)
export const {toggle}=themeSlice.actions
export default themeSlice.reducer