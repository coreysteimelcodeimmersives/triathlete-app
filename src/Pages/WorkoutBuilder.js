import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import QuillReader from "../Components/Quill/QuillReader";
import EditForm from "../Components/WorkoutBuilder/EditSide/EditForm";

const WorkoutBuilder = () => {
  const [title, setTitle] = useState("");
  const [sportType, setSportType] = useState(null);
  const [energySystem, setEnergySystem] = useState(null);
  const [durationHours, setDurationHours] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");
  const [distance, setDistance] = useState("");
  const [warmUp, setWarmUp] = useState("");
  const [mainSet, setMainSet] = useState("");
  const [coolDown, setCoolDown] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  const workout = {
    title,
    sportType,
    energySystem,
    durationHours,
    durationMinutes,
    distance,
    warmUp,
    mainSet,
    coolDown,
    specialNotes,
  };

  return (
    <>
      <h1 style={{ marginTop: "3%" }}>Workout Builder</h1>
      <div className="WorkoutBuilderContainer">
        <EditForm
          title={title}
          setTitle={setTitle}
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
          setWarmUp={setWarmUp}
          setMainSet={setMainSet}
          setCoolDown={setCoolDown}
          setSpecialNotes={setSpecialNotes}
        ></EditForm>
        <div className="WoPreviewContainer">
          <h1 className="WoPreviewTitle">{title ? title : "Workout Title"}</h1>

          <div className="CardPreWoSum">
            <div className="CardPreWoSumEle">
              {sportType ? sportType : "Sport"}
            </div>

            <div className="CardPreWoSumEle">
              {energySystem ? energySystem : "Energy"}
            </div>

            <div className="CardPreWoSumEle">
              <div className="CardPreDurRow">
                {durationHours ? durationHours : "00"}

                <div>:</div>
                <div>{durationMinutes ? durationMinutes : "00"}</div>
              </div>
            </div>

            <div className="CardPreWoSumEle">
              <div>{distance ? distance : "Dist"}</div>
            </div>
          </div>

          <h2 className="WoPreviewTitle">Warm Up</h2>

          <QuillReader richText={warmUp}></QuillReader>

          <h2 className="WoPreviewTitle">Main Set</h2>

          <QuillReader richText={mainSet}></QuillReader>

          <h2 className="WoPreviewTitle">Cool Down</h2>

          <QuillReader richText={coolDown}></QuillReader>

          <h2 className="WoPreviewTitle">Special Notes</h2>

          <QuillReader richText={specialNotes}></QuillReader>
        </div>
      </div>
      <Button style={{ marginBottom: "5%" }} variant="primary">
        Create
      </Button>
    </>
  );
};

export default WorkoutBuilder;
