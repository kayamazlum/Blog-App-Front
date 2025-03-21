"use client";

import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";

const TinyEditor = () => {
  const [isClient, setIsClient] = useState(false);
  const [editorContent, setEditorContent] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    console.log("Editor Content: ", content);
  };

  return (
    <div>
      <Editor
        apiKey="zbyhbelxndcxujlzx7r8sof4vb84tw6iwxg3w99xjeukty9r"
        init={{
          height: 400,
          width: "100%",
          menubar: true,
          plugins: ["image", "link"],
          toolbar:
            "undo redo | fontsize bold italic underline hr styles | link image",
          content_style:
            "body { font-family:Arial, sans-serif; font-size:14px; direction: ltr; text-align: left; }",
          tinydrive_demo_files_url: "../",
        }}
        // initialValue="Welcome to TinyMCE!"
        onEditorChange={handleEditorChange}
      />
      <div>
        <h3>HTML Output:</h3>
        <pre>{editorContent}</pre>
      </div>
    </div>
  );
};

export default TinyEditor;
