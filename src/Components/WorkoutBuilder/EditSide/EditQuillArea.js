import React from "react";
import Form from "react-bootstrap/Form";
import QuillEditor from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Components/Quill/QuillEditor.js";

const EditQuillArea = ({
  setWarmUp,
  setMainSet,
  setCoolDown,
  setSpecialNotes,
}) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Warm Up</Form.Label>
        <QuillEditor setRichText={setWarmUp} />
        <Form.Label>Main Set</Form.Label>
        <QuillEditor setRichText={setMainSet} />
        <Form.Label>Cool Down</Form.Label>
        <QuillEditor setRichText={setCoolDown} />
        <Form.Label>Special Notes</Form.Label>
        <QuillEditor setRichText={setSpecialNotes} />
      </Form.Group>
    </div>
  );
};

export default EditQuillArea;
