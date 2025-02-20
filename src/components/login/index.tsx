"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <div className="rounded-md flex flex-col py-10 sm:px-14 px-[10%] bg-dark border border-blue bg-opacity-50 text-light">
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
        <button className="bg-blue rounded-md p-2 mt-2 hover:bg-orange-600 duration-500 transition">
          Login
        </button>
        <div className="text-sm flex gap-2 mt-2">
          <span>Dont have an account?</span>
          <span
            onClick={() => router.push("/register")}
            className="font-bold underline cursor-pointer hover:text-blue duration-300 transition"
          >
            Sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
