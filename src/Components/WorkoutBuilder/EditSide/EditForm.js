import React from "react";
import Form from "react-bootstrap/Form";
import EditWoSummary from "./EditWoSummary";
import EditTitle from "./EditTitle";
import EditQuillArea from "./EditQuillArea";

const EditForm = ({
  title,
  setTitle,
  sportType,
  setSportType,
  energySystem,
  setEnergySystem,
  durationHours,
  setDurationHours,
  durationMinutes,
  setDurationMinutes,
  distance,
  setDistance,
  setWarmUp,
  setMainSet,
  setCoolDown,
  setSpecialNotes,
}) => {
  return (
    <Form className="FormContainer">
      <EditTitle title={title} setTitle={setTitle}></EditTitle>
      <EditWoSummary
        sportType={sportType}
        setSportType={setSportType}
        energySystem={energySystem}
        setEnergySystem={setEnergySystem}
        durationHours={durationHours}
        setDurationHours={setDurationHours}
        durationMinutes={durationMinutes}
        setDurationMinutes={setDurationMinutes}
        distance={distance}
        setDistance={setDistance}
      ></EditWoSummary>
      <EditQuillArea
        setWarmUp={setWarmUp}
        setMainSet={setMainSet}
        setCoolDown={setCoolDown}
        setSpecialNotes={setSpecialNotes}
      ></EditQuillArea>
    </Form>
  );
};

export default EditForm;
