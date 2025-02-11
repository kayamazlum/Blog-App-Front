import React from "react";

const PostCard = () => {
  return (
    <div className="flex gap-4 rounded-md border p-6 bg-white">
      <div className="flex flex-col">
        <div className="flex ">
          <div className="flex gap-1 ">
            <span className="rounded-full w-12 h-12 border flex items-center justify-center cursor-pointer">
              User
            </span>
            <div className="flex flex-col">
              <span className="text-lg">John Doe</span>
              <span className="-mt-2 text-sm text-zinc-500 cursor-pointer   ">
                @johndoe47
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi
          velit delectus aperiam provident harum quos, illum ipsa saepe magnam
          labore, possimus iure veritatis consequatur rem quaerat. Modi,
          excepturi dolor.
        </p>
      </div>
      <div className="border rounded-md h-32 w-72 items-center flex justify-center">
        Image
      </div>
    </div>
  );
};

export default PostCard;
