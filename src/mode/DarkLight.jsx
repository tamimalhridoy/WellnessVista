import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

const DarkLight = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const taggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <div>DarkLight</div>;
};

export default DarkLight;
