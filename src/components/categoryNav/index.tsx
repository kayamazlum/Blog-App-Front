import React from "react";

const CategoryNav = () => {
  return (
    <div className="bg-zinc-100 dark:bg-slate-200 text-black h-8 w-full flex justify-center items-center ">
      <div className="max-w-[900px] flex justify-center items-center ml-8 gap-5 text-lg overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Edebiyat
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Yazılım
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Politika
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Spor
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Teknoloji
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Uzay
        </span>
        <span className="cursor-pointer hover:text-red-500 transition duration-300 ">
          Sinema
        </span>
      </div>
    </div>
  );
};

export default CategoryNav;
