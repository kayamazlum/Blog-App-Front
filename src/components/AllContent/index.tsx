import React from "react";
import PostCard from "../postCard";

const AllContent = () => {
  return (
    <div className="w-full flex justify-center text-black dark:text-white mt-8">
      <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 bg-zinc-100 dark:bg-zinc-900 p-4 ">
        <div className="w-full flex flex-row">
          <div className=" w-full">
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContent;
