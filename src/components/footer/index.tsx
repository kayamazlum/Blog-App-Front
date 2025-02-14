import React from "react";

const Footer = () => {
  return (
    <div className="bg-lightultra dark:bg-darkultra w-full flex justify-center">
      <div className="w-[1200px] flex flex-col mx-4 mt-20 mb-5 ">
        <div className="flex md:gap-20 gap-10 md:flex-row flex-col">
          <div className="md:w-72 flex flex-col">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">About</span>
              <span className="font-extralight mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                obcaecati sunt, velit aspernatur veritatis cupiditate at aliquid
                iusto laborum! Aliquam, harum. Dignissimos delectus quae error
                amet possimus officia, nesciunt provident?
              </span>
            </div>
            <div className="font-extralight flex flex-col mt-4">
              <span>
                <span className="font-semibold">Email: </span>hello@blog.net
              </span>
              <span>
                <span className="font-semibold">Phone: </span> 396 444 238 968
              </span>
            </div>
          </div>
          <div className="flex md:gap-20 gap-10">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Quick Link</span>
              <div className="flex flex-col gap-2 mt-2">
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Home
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  About
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Profile
                </span>
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold text-lg">Category</span>
              <div className="flex flex-col gap-2 mt-2 ">
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Edebiyat
                </span>

                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Yazılım
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Politika
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Spor
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Teknoloji
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Uzay
                </span>
                <span className="cursor-pointer hover:text-blue transition duration-300">
                  Sinema
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lightdark dark:bg-zinc-700 h-[1px] w-full mt-10 mb-4 "></div>
        <div className="my-3 w-full gap-4 flex md:flex-row flex-col md:justify-between items-center">
          <div className="flex items-center flex-wrap sm:flex-row flex-col gap-3">
            <span className="text-2xl font-bold">BLOG</span>
            <span className="font-extralight ml-4 text-sm">
              MKJS Template 2025. All Right Reserved.
            </span>
          </div>
          <div className="flex gap-4 text-sm font-extralight items-center justify-center flex-wrap">
            <span className="cursor-pointer">Terms of Use</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
