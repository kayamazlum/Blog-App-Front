"use client";
import TinyEditor from "@/components/tinyEditor";
// import { useState } from "react";

const CreatePost = () => {
  // const [content, setContent] = useState("");
  const handleSubmit = () => {
    // console.log("İçerik:", content);
    // Burada içeriği backend'e gönderme işlemi yapabilirsin
  };
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">
        <div className="p-4 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Yaz</h1>
          <TinyEditor />
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Yayınla
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
