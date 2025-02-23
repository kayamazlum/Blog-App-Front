"use client";
import TinyEditor from "@/components/edtior";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log("Blog İçeriği:", content);
    // Burada backend'e gönderme işlemi yapabilirsin
  };
  return (
    <>
      <Header />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">
          <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Yeni Blog Yaz</h1>
            <TinyEditor value={content} onChange={setContent} />
            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Yayınla
            </button>
          </div>
          {content && (
            <div
              className="mt-4 border p-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreatePost;
