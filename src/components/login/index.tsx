"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="rounded-md flex flex-col py-10 px-14 bg-dark border border-blue">
      <div className="flex flex-col gap-4">
        <div className="w-full flex text-xl font-bold mb-4 border-b pb-2 justify-center items-center">
          <span>LOGIN</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
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
        <span className="text-xs w-full text-right cursor-pointer hover:underline ">
          Forgot your password?
        </span>
        <button className="bg-blue rounded-md p-2 mt-2 hover:bg">Login</button>
        <div className="text-sm flex gap-2 mt-2">
          <span>Dont have an account?</span>
          <span className="font-bold underline cursor-pointer">
            Sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
