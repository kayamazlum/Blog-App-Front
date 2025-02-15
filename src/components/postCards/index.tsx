import React from "react";
import PostCard from "../postCard";

const PostCards = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <h1 className="text-xl font-semibold">Latest Post</h1>
      <div className="flex flex-wrap justify-between xl:gap-x-4 gap-y-8">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="w-full flex items-center justify-center my-10">
        <span className="w-36 h-12 border items-center justify-center flex p-2 font-medium rounded-md hover:bg-blue duration-300 transition-all cursor-pointer ">
          View All Post
        </span>
      </div>
    </div>
  );
};

export default PostCards;
