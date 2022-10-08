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

const QuillEditor = ({ keyVar, dispatchFunc }) => {
  const workout = useSelector((state) => state.workout);
  const [value, setValue] = useState(workout[keyVar] ? workout[keyVar] : '');
  const editorRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchFunc({ [keyVar]: value }));
  }, [value]);

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
