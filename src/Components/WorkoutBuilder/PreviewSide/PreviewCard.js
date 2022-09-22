import React from "react";
import PreviewTitle from "./PreviewTitle";
import PreviewWoSummary from "./PreviewWoSummary";
import QuillReader from "/Users/coreysteimel/code-immersives-300/triathlete-app/src/Components/Quill/QuillReader.js";

const PreviewCard = ({
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
}) => {
  return (
    <div className="WoPreviewContainer">
      <PreviewTitle title={title}></PreviewTitle>
      <PreviewWoSummary
        sportType={sportType}
        energySystem={energySystem}
        durationHours={durationHours}
        durationMinutes={durationMinutes}
        distance={distance}
      ></PreviewWoSummary>

      <h2 className="WoPreviewTitle">Warm Up</h2>

      <QuillReader richText={warmUp}></QuillReader>

      <h2 className="WoPreviewTitle">Main Set</h2>

      <QuillReader richText={mainSet}></QuillReader>

      <h2 className="WoPreviewTitle">Cool Down</h2>

      <QuillReader richText={coolDown}></QuillReader>

      <h2 className="WoPreviewTitle">Special Notes</h2>

      <QuillReader richText={specialNotes}></QuillReader>
    </div>
  );
};

export default PreviewCard;
