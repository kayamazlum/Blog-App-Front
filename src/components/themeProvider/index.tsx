"use client";

import { useThemeStore } from "@/store/themeStore";
import React, { ReactNode, useEffect } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useThemeStore();

  // İlk açılışta localStorage'dan temayı çek
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  // Tema değiştiğinde hem HTML'e uygula hem localStorage'a kaydet
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <div>{children}</div>;
};

export default ThemeProvider;
