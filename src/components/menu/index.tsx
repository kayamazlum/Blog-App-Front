"use client";
import React, { useState } from "react";
import ToggleButton from "../toggleButton";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden block bg-gray-500 text-white px-2 py-1 bg-opacity-40 rounded-md text-2xl "
      >
        ☰
      </button>

      <div className="lg:block hidden">
        <div className="flex gap-10 text-xl">
          <span className="hover:text-blue duration-300 transition-all cursor-pointer">
            Home
          </span>
          <div className="flex gap-2 justify-center items-center hover:text-blue duration-300 transition-all group">
            <span
              onClick={() => router.push("/user_profile")}
              className="cursor-pointer "
            >
              My Profile
            </span>
            <span className="rounded-full border flex items-center justify-center h-8 w-8 duration-300 group-hover:border-blue">
              H
            </span>
          </div>
          <span>
            <ToggleButton />
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="bg-black inset-0 fixed bg-opacity-70 transition-opacity duration-500 lg:hidden"
        ></div>
      )}

      <div
        className={`h-screen text-xl lg:hidden fixed right-0 top-0 z-50 font-medium ${
          isOpen ? "translate-x-0" : "translate-x-64"
        } w-64 bg-white text-black dark:bg-dark dark:text-white rounded-l-3xl dark:border-zinc-300 border-l transition-transform duration-500 `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 "
        >
          <IoClose
            size={40}
            className="hover:text-blue transition-all cursor-pointer"
          />
        </button>
        <div className="flex flex-col w-full justify-center items-center gap-8 mt-32">
          <span className="hover:text-blue duration-300 transition-all cursor-pointer">
            Home
          </span>
          <div className="flex gap-2 justify-center items-center hover:text-blue duration-300 transition-all group">
            <span className="cursor-pointer ">My Profile</span>
            <span className="rounded-full border flex items-center justify-center h-8 w-8  group-hover:border-blue transition-all duration-300">
              H
            </span>
          </div>
          <span>
            <ToggleButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
