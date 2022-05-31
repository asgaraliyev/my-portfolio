import { AppState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ThemeState {
  isDark: boolean;
  isMobileMenuActive: boolean;
}
const initialState: ThemeState = {
  isDark: false,
  isMobileMenuActive: false,
};

function changeIsDarkTo(isDark: boolean) {
  if (isDark === true) {
    document.body.classList.add("dark");
    localStorage.setItem("isDark", true.toString());
  } else if (isDark === false) {
    document.body.classList.remove("dark");
    localStorage.setItem("isDark", false.toString());
  }
}
// buradaki name statede gorsenmedi.createSlice  evvelki methodda manual olarag edilmisin daha avtomatiklesdirilmis veziyyetidi
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      const isActive=!state.isMobileMenuActive
      state.isMobileMenuActive = isActive;
    },
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
export const {
  toggleDarkMode,
  activeDarkMode,
  deactiveDarkMode,
  toggleMobileMenu,
} = themeSlice.actions;
export default themeSlice.reducer;
