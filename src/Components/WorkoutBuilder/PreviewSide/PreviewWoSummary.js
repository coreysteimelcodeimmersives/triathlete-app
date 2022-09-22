import React from "react";
import PreviewDurationBox from "./PreviewDurationBox";

const PreviewWoSummary = ({
  sportType,
  energySystem,
  durationHours,
  durationMinutes,
  distance,
}) => {
  return (
    <div className="CardPreWoSum">
      <PreviewWoSummary data={sportType} text={"Sport"}></PreviewWoSummary>
      <PreviewWoSummary data={energySystem} text={"Energy"}></PreviewWoSummary>
      <PreviewDurationBox
        durationHours={durationHours}
        durationMinutes={durationMinutes}
      ></PreviewDurationBox>
      <PreviewWoSummary data={distance} text={"Dist"}></PreviewWoSummary>
    </div>
  );
};

export default PreviewWoSummary;
