import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';

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

const QuillEditor = ({ keyVar, workoutBuilderForm, setWorkoutBuilderForm }) => {
  const update = useSelector((state) => state.update.woBuilder);
  const [value, setValue] = useState(workoutBuilderForm[keyVar]);
  const editorRef = useRef();

  useEffect(() => {
    setWorkoutBuilderForm({ ...workoutBuilderForm, [keyVar]: value });
  }, [value]);

  useEffect(() => {
    setValue('');
  }, [update]);

  useEffect(() => {
    setValue(workoutBuilderForm[keyVar]);
  }, []);

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
