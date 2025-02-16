import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const PostDetails = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">Post details</div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
