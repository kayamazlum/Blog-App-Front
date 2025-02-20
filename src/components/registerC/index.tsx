"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="rounded-md flex flex-col py-10 px-14 bg-dark border border-blue bg-opacity-50">
      <div className="flex flex-col gap-4">
        <div className="w-full flex text-xl font-bold mb-4 border-b pb-2 justify-center items-center">
          <span>REGISTER</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Fullname</label>
          <input
            type="text"
            placeholder="Fullname"
            className="rounded-md p-2 bg-transparent border border-blue"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="rounded-md p-2 bg-transparent border border-blue"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Username"
            className="rounded-md p-2 bg-transparent border border-blue"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="">Password</label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            className="rounded-md p-2 pr-8 bg-transparent border border-blue"
          />
          <button
            className="absolute right-2 bottom-[11px]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button className="bg-blue rounded-md p-2 mt-2 hover:bg-orange-600 duration-500 transition">
          Register
        </button>
        <div className="text-sm flex gap-2 mt-2">
          <span>Do you have an account?</span>
          <span className="font-bold underline cursor-pointer hover:text-blue duration-300 transition">
            Sign in now
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterC;
