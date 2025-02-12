"use client";
import { useThemeStore } from "@/store/themeStore";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className="cursor-pointer hover:text-blue duration-300 transition-all"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <MdOutlineDarkMode size={32} />
      ) : (
        <MdOutlineLightMode size={32} />
      )}
    </div>
  );
};

export default ToggleButton;
