import React from "react";

const CategoryNav = () => {
  return (
    <div className="bg-blue text-white w-full flex justify-center items-center py-2">
      <div className="max-w-[900px] flex flex-wrap md:flex-nowrap justify-center items-center gap-x-5 gap-y-2  text-lg overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
        {[
          "Yaşam",
          "Edebiyat",
          "Kişisel Gelişim",
          "Politika",
          "Spor",
          "Teknoloji",
          "Uzay",
          "Sinema",
        ].map((category, index) => (
          <span
            key={index}
            className="cursor-pointer hover:text-dark transition duration-300"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
