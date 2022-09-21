import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const EditSelector = ({
  label,
  selectorClassName,
  valueVar,
  setterFunc,
  defaultText,
  array,
}) => {
  return (
    <div>
      <Form.Group as={Col} controlId="formGridWoSummary">
        <Form.Label className="WoBuilderSumLabels">{label}</Form.Label>
        <div className={selectorClassName}>
          <Form.Select
            value={valueVar ? valueVar : "DEFAULT"}
            onChange={(e) => {
              setterFunc(e.target.value);
            }}
          >
            <option disabled value="DEFAULT">
              {defaultText}
            </option>
            {array.map((key) => (
              <option key={key}>{key}</option>
            ))}
          </Form.Select>
        </div>
      </Form.Group>
    </div>
  );
};

export default EditSelector;
