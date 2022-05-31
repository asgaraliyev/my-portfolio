import { AppState } from "./../index";
import { createSlice } from "@reduxjs/toolkit";
export interface ThemeState {
  isDark: boolean;
}
const initialState: ThemeState = {
  isDark: false,
};

// buradaki name statede gorsenmedi.createSlice  evvelki methodda manual olarag edilmisin daha avtomatiklesdirilmis veziyyetidi
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark;
    },
    activeDarkMode(state) {
      state.isDark = true;
    },
    deactiveDarkMode(state) {
      state.isDark = false;
    },
  },
});
export const selectTheme = (state: AppState) => state.theme;
export const { toggleDarkMode ,activeDarkMode,deactiveDarkMode} = themeSlice.actions;
export default themeSlice.reducer;
