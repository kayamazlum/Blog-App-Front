import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const UserProfile = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">
          <div className="flex flex-col gap-4">
            <div className="w-full relative">
              <div className="w-full bg-green-800 h-96 items-center justify-center flex ">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
