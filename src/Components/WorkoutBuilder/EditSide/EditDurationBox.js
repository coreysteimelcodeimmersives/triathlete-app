import React from "react";
import Form from "react-bootstrap/Form";

const EditDurationBox = ({ placeholder, duration, setDuration }) => {
  const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const handleNumberInput = (e) => {
    if (e.target.value.length > 2) {
      return false;
    }
    for (let i = 0; i < e.target.value.length; i++) {
      if (!numberArray.includes(e.target.value[i])) {
        return false;
      }
    }
    return true;
  };
  return (
    <div className="WoBuilderDurationInput">
      <Form.Control
        placeholder={placeholder}
        type="text"
        value={duration ? duration : ""}
        onChange={(e) => {
          const inputValid = handleNumberInput(e);
          if (inputValid) {
            setDuration(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default EditDurationBox;
