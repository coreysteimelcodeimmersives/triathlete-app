import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import EditDurationBox from "./EditDurationBox";

const EditDurationArea = ({
  durationHours,
  setDurationHours,
  durationMinutes,
  setDurationMinutes,
}) => {
  return (
    <div>
      <Form.Group as={Col} controlId="formGridWoSummary">
        <Form.Label className="WoBuilderSumLabels">Duration</Form.Label>
        <div className="WoBuilderDurationRow">
          <EditDurationBox
            placeholder={"HH"}
            duration={durationHours}
            setDuration={setDurationHours}
          ></EditDurationBox>
          <div style={{ padding: ".2vw" }}>:</div>
          <EditDurationBox
            placeholder={"MM"}
            duration={durationMinutes}
            setDuration={setDurationMinutes}
          ></EditDurationBox>
        </div>
      </Form.Group>
    </div>
  );
};

export default EditDurationArea;
