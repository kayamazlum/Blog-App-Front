"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PostCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col xl:w-[350px] lg:w-[32%] md:w-[47%] sm:w-[48%] w-full h-[450px] justify-between border dark:border-zinc-600 p-3 items-center rounded-md gap-4">
      <div className="flex flex-col gap-2">
        <div className="border dark:border-zinc-600 rounded-md h-52 w-full items-center flex justify-center">
          Image
        </div>
        <div className="flex gap-1 justify-start w-full">
          <span className="rounded-md select-none cursor-pointer text-sm bg-blue bg-opacity-10 flex items-center justify-center py-1 px-2 text-blue">
            Category
          </span>
        </div>

        <h1 className="text-lg font-medium line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi
          velit delectus aperiam provident harum quos
        </h1>
      </div>

      <div className="flex w-full justify-between items-center ">
        <div
          className="flex gap-1 items-center"
          onClick={() => router.push("/user_profile")}
        >
          <span className="rounded-full w-10 h-10 border flex items-center justify-center cursor-pointer">
            User
          </span>
          <div className="flex flex-col ml-1">
            <span className="text-zinc-600 dark:text-zinc-300">John Doe</span>
            <span className="-mt-[6px] text-sm text-zinc-400 dark:text-zinc-400 cursor-pointer   ">
              @johndoe47
            </span>
          </div>
        </div>
        <div className="text-sm text-zinc-400 dark:text-zinc-400">
          August 20, 2025
        </div>
      </div>
    </div>
  );
};

export default PostCard;
