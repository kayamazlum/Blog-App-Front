import Footer from "@/components/footer";
import Header from "@/components/header";
import PostCard from "@/components/postCard";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const UserProfile = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">
          <div className="flex flex-col gap-4">
            <div className="w-full relative">
              <div className="w-full bg-green-800 h-96 items-center justify-center flex rounded-md">
                Header Image
              </div>
              <div className="absolute -translate-y-36 translate-x-4 flex gap-2 items-center justify-center">
                <div className="rounded-full h-32 w-32 border flex justify-center items-center text-light text-lg bg-zinc-900">
                  User
                </div>
                <div className="w-32 bg-black bg-opacity-50 px-4 py-2 rounded-md flex flex-col">
                  <span className="text-light text-lg">John Doe</span>
                  <span className="text-zinc-300 text-sm">@johndoe47</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 gap-4 dark:bg-darkultra bg-light2 rounded-md  items-center">
              <div className="flex gap-2 items-center">
                <FaLocationDot size={20} /> <span>New York, USA</span>
              </div>
              <p className="border-l-2  border-dark dark:border-light2 pl-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum sunt quasi est quaerat alias
              </p>
            </div>
            <div className="text-2xl mt-8 mb-4 flex w-full justify-center items-center">
              All Post
            </div>
            <div className="flex flex-wrap justify-between xl:gap-x-4 gap-y-8 mb-16">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
