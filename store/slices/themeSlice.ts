import { AppState } from "./../index";
import { createSlice } from "@reduxjs/toolkit";
export interface ThemeState {
  isDark: boolean;
}
const initialState: ThemeState = {
  isDark:false,
};

function changeIsDarkTo(isDark: boolean) {
  if (isDark === true) {
    document.body.classList.add("dark");
  localStorage.setItem("isDark", true.toString());
  }else if(isDark===false){
    document.body.classList.remove("dark");
    localStorage.setItem("isDark", false.toString());
  }
}
// buradaki name statede gorsenmedi.createSlice  evvelki methodda manual olarag edilmisin daha avtomatiklesdirilmis veziyyetidi
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark;
      changeIsDarkTo(state.isDark);
    },
    activeDarkMode(state) {
      state.isDark = true;
      changeIsDarkTo(state.isDark);
    },
    deactiveDarkMode(state) {
      state.isDark = false;
      changeIsDarkTo(state.isDark);
    },
  },
});
export const selectTheme = (state: AppState) => state.theme;
export const { toggleDarkMode, activeDarkMode, deactiveDarkMode } =
  themeSlice.actions;
export default themeSlice.reducer;
