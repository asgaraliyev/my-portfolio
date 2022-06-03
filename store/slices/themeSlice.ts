import { AppState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface MenuItem {
  title: string;
  path: string;
}
export interface SocialIconItem {
  title: string;
  path: string;
  icon_name: string;
}
export interface ThemeState {
  isDark: boolean;
  isMobileMenuActive: boolean;
  menu: MenuItem[];
  social: SocialIconItem[];
}

const initialState: ThemeState = {
  isDark: false,
  isMobileMenuActive: false,
  menu: [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ],
  social: [
    {
      title: "Github",
      path: "Github",
      icon_name: "github",
    },
    {
      title: "Linkedin",
      path: "Linkedin",
      icon_name: "linkedin",
    },
    {
      title: "Facebook",
      path: "Facebook",
      icon_name: "facebook",
    },
    {
      title: "Instagram",
      path: "Instagram",
      icon_name: "instagram",
    },
  ],
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
      const isActive = !state.isMobileMenuActive;
      state.isMobileMenuActive = isActive;
      if (state.isMobileMenuActive === true)
        document.body.style.overflow = "hidden";
      else document.body.style.overflow = "initial";
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
