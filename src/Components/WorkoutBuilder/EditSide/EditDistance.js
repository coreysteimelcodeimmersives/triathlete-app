import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const EditDistance = ({ distance, setDistance }) => {
  return (
    <div>
      <Form.Group as={Col} controlId="formGridWoSummary">
        <Form.Label className="WoBuilderSumLabels">Distance</Form.Label>
        <div className="WoBuilderDist">
          <Form.Control
            placeholder="Distance"
            type="text"
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
        </div>
      </Form.Group>
    </div>
  );
};

export default EditDistance;
