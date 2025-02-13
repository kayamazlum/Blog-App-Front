import React from "react";

const PostCard = () => {
  return (
    <div className="flex flex-col w-[350px] h-[450px] border dark:border-zinc-600 p-3 items-center rounded-md gap-4">
      <div className="border dark:border-zinc-600 rounded-md h-52 w-full items-center flex justify-center">
        Image
      </div>
      <div className="flex gap-1 justify-start w-full">
        <span className="rounded-md select-none cursor-pointer text-sm bg-blue bg-opacity-10 flex items-center justify-center py-1 px-2 text-blue">
          Category
        </span>
      </div>

      <h1 className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi
        velit delectus aperiam provident harum quos
      </h1>

      <div className="flex w-full justify-between items-center">
        <div className="flex gap-1 items-center">
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
