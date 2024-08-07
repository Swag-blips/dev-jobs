import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem("currentTheme");
      return savedTheme ? JSON.parse(savedTheme) : "light";
    } catch (error) {
      console.error("Failed to parse item in local storage", error);
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("currentTheme", JSON.stringify(theme));
  }, [theme]);

  const handleThemeSwitchToLight = () => {
    setTheme("light");
  };

  const handleToggleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleThemeSwitchToDark = () => {
    setTheme("dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        handleThemeSwitchToDark,
        handleThemeSwitchToLight,
        handleToggleSwitch,
        setTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
