import React from "react";
import Form from "react-bootstrap/Form";

const EditTitle = ({ title, setTitle }) => {
  return (
    <div className="WoBuilderTitleInput">
      <Form.Group className="mb-3">
        <Form.Label>Workout Title</Form.Label>
        <Form.Control
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>
    </div>
  );
};

export default EditTitle;
