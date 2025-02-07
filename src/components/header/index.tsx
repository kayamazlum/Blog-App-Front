import React from "react";
import Menu from "../menu";

const Header = () => {
  return (
    <div className="w-full bg-zinc-900 flex justify-center">
      <div className="w-[900px] flex justify-between h-14 items-center px-2">
        <span className="text-3xl font-bold">BLOG</span>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
