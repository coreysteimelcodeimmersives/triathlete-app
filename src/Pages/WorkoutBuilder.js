import React, { useState } from "react";
import EditForm from "../Components/WorkoutBuilder/EditSide/EditForm";
import PreviewCard from "../Components/WorkoutBuilder/PreviewSide/PreviewCard";
import { Box } from "@mui/material";

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
        <PreviewCard
          title={title}
          sportType={sportType}
          energySystem={energySystem}
          durationHours={durationHours}
          durationMinutes={durationMinutes}
          distance={distance}
          warmUp={warmUp}
          mainSet={mainSet}
          coolDown={coolDown}
          specialNotes={specialNotes}
        ></PreviewCard>
      </div>
    </>
  );
};

export default WorkoutBuilder;
