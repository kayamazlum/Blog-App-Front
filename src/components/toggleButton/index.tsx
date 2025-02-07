"use client";
import { useThemeStore } from "@/store/themeStore";

const ToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  console.log("aaaa", theme);
  return <div onClick={toggleTheme}>{theme}</div>;
};

export default ToggleButton;
