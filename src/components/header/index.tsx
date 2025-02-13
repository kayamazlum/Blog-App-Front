import React from "react";
import Menu from "../menu";

const Header = () => {
  return (
    <div className="w-full dark:bg-dark bg-light  flex justify-center">
      <div className="w-[1200px]  flex justify-between h-16 items-center mx-4">
        <span className="text-3xl font-bold ">BLOG</span>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
