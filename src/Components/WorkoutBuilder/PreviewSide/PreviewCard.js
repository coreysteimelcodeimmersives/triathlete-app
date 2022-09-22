import React from "react";
import Button from "react-bootstrap/esm/Button";
import PreviewQuillArea from "./PreviewQuillArea";
import PreviewTitle from "./PreviewTitle";
import PreviewWoSummaryArea from "./PreviewWoSummaryArea";

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
    <div className="PreviewSide">
      <div className="WoPreviewContainer">
        <PreviewTitle title={title}></PreviewTitle>
        <PreviewWoSummaryArea
          sportType={sportType}
          energySystem={energySystem}
          durationHours={durationHours}
          durationMinutes={durationMinutes}
          distance={distance}
        ></PreviewWoSummaryArea>
        <PreviewQuillArea title={"Warm Up"} text={warmUp}></PreviewQuillArea>
        <PreviewQuillArea title={"Main Set"} text={mainSet}></PreviewQuillArea>
        <PreviewQuillArea
          title={"Cool Down"}
          text={coolDown}
        ></PreviewQuillArea>
        <PreviewQuillArea
          title={"Special Notes"}
          text={specialNotes}
        ></PreviewQuillArea>
      </div>
      <Button style={{ marginBottom: "5%" }} variant="primary">
        Create
      </Button>
    </div>
  );
};

export default PreviewCard;
