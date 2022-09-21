import React from "react";
import {
  sportTypeArray,
  energySytmeArray,
} from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Utils/Data.js";
import EditSelector from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Components/WorkoutBuilder/EditSide/EditSelector.js";
import EditDurationArea from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Components/WorkoutBuilder/EditSide/EditDurationArea.js";
import EditDistance from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Components/WorkoutBuilder/EditSide/EditDistance.js";

const EditWoSummary = ({
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
}) => {
  return (
    <div id="WorkoutBuilderSumSpace">
      <EditSelector
        label={"Sport Type"}
        selectorClassName={"WoBuilderSportDrop"}
        valueVar={sportType}
        setterFunc={setSportType}
        defaultText={"Select Sport Type"}
        array={sportTypeArray}
      ></EditSelector>
      <EditSelector
        label={"Energy System"}
        selectorClassName={"WoBuilderEnergyDrop"}
        valueVar={energySystem}
        setterFunc={setEnergySystem}
        defaultText={"Select Energy System"}
        array={energySytmeArray}
      ></EditSelector>
      <EditDurationArea
        durationHours={durationHours}
        setDurationHours={setDurationHours}
        durationMinutes={durationMinutes}
        setDurationMinutes={setDurationMinutes}
      ></EditDurationArea>
      <EditDistance
        distance={distance}
        setDistance={setDistance}
      ></EditDistance>
    </div>
  );
};

export default EditWoSummary;
