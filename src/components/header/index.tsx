import React from "react";
import Menu from "../menu";

const Header = () => {
  return (
    <div className="w-full dark:bg-dark bg-light  flex justify-center">
      <div className="w-[900px] flex justify-between h-16 items-center">
        <span className="text-3xl font-bold ml-4">BLOG</span>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
