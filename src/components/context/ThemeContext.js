import { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
