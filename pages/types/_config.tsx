// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from "react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({
  config,
});

export default ()=><></>