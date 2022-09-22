import React from "react";
import QuillReader from "../../Quill/QuillReader";

const PreviewQuillArea = ({ title, text }) => {
  return (
    <div>
      <h2 className="WoPreviewTitle">{title}</h2>

      <QuillReader richText={text}></QuillReader>
    </div>
  );
};

export default PreviewQuillArea;
