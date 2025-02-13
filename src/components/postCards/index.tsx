import React from "react";
import PostCard from "../postCard";

const PostCards = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-between gap-4 p-6 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="w-full flex items-center justify-center">
        <span className="w-36 h-12 border items-center justify-center flex p-2 font-medium rounded-md hover:bg-blue duration-300 transition-all cursor-pointer ">
          View All Post
        </span>
      </div>
    </div>
  );
};

export default PostCards;
