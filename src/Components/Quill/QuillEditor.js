import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useWorkoutContext } from '../../Context/WorkoutContext';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ['link'],

    ['clean'],
  ],
};

const QuillEditor = ({ keyVar }) => {
  const { workout, handleUpdateWo } = useWorkoutContext();
  const [value, setValue] = useState('');
  const editorRef = useRef();

  useEffect(() => {
    const updateWo = { ...workout, [keyVar]: value };
    handleUpdateWo(updateWo);
  }, [value]);

  console.log(value);

  if (editorRef.current) console.log(editorRef.current.editor.getContents());

  return (
    <ReactQuill
      className='QuillEditor'
      theme='snow'
      value={value}
      onChange={setValue}
      modules={modules}
      ref={editorRef}
    />
  );
};

export default QuillEditor;
