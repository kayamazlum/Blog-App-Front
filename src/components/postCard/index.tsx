import React from "react";

const PostCard = () => {
  return (
    <div className="flex gap-4 rounded-md border dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <div className="flex flex-col">
        <div className="border rounded-md h-32 w-72 items-center flex justify-center">
          Image
        </div>
        <div className="flex ">
          <div className="flex gap-1 ">
            <span className="rounded-full w-12 h-12 border flex items-center justify-center cursor-pointer">
              User
            </span>
            <div className="flex flex-col gap-1 ">
              <span className="text-lg">John Doe</span>
              <span className="-mt-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer   ">
                @johndoe47
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Title</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi
          velit delectus aperiam provident harum quos, illum ipsa saepe magnam
          labore, possimus iure veritatis consequatur rem quaerat. Modi,
          excepturi dolor.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
