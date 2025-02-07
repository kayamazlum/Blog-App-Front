import React from "react";
import ToggleButton from "../toggleButton";

const Menu = () => {
  return (
    <div className="flex gap-6 text-lg">
      <span className="hover:text-yellow-400 transition-all cursor-pointer">
        Home
      </span>
      <div className="flex gap-2 justify-center items-center hover:text-yellow-400 transition-all group">
        <span className="cursor-pointer ">Profile</span>
        <span className="rounded-full border flex items-center justify-center h-8 w-8 group-hover:border-yellow-400">
          H
        </span>
      </div>
      <span>
        <ToggleButton />
      </span>
    </div>
  );
};

export default Menu;
