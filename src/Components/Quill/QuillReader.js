import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [],
};

const QuillReader = ({ richText }) => {
  const editorRef = useRef();

  if (editorRef.current) console.log(editorRef.current.editor.getContents());

  return (
    <ReactQuill
      className="QuillReader"
      modules={{ toolbar: null }}
      value={richText}
      readOnly={true}
    />
  );
};

export default QuillReader;
