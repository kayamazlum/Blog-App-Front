"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

interface TinyEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function TinyEditor({ value, onChange }: TinyEditorProps) {
  const editorRef = useRef<Editor | null>(null);

  return (
    <Editor
      apiKey="zbyhbelxndcxujlzx7r8sof4vb84tw6iwxg3w99xjeukty9r" // API key'ini gizli tut!
      onInit={(_, editor) => (editorRef.current = editor)}
      value={value} // ✅ controlled state olarak kullan
      onEditorChange={(content) => onChange(content)}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent | removeformat | help",
        content_style: "body { font-family:Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
