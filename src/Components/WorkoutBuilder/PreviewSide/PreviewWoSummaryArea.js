import React from "react";
import PreviewWoSumBox from "./PreviewWoSumBox";
import PreviewDurationBox from "./PreviewDurationBox";

const PreviewWoSummaryArea = ({
  sportType,
  energySystem,
  durationHours,
  durationMinutes,
  distance,
}) => {
  return (
    <div className="CardPreWoSum">
      <PreviewWoSumBox data={sportType} text={"Sport"}></PreviewWoSumBox>
      <PreviewWoSumBox data={energySystem} text={"Energy"}></PreviewWoSumBox>
      <PreviewDurationBox
        durationHours={durationHours}
        durationMinutes={durationMinutes}
      ></PreviewDurationBox>
      <PreviewWoSumBox data={distance} text={"Dist"}></PreviewWoSumBox>
    </div>
  );
};

export default PreviewWoSummaryArea;
