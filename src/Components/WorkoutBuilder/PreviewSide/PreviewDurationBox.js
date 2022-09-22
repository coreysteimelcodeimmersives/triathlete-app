import React from "react";

const PreviewDurationBox = ({ durationHours, durationMinutes }) => {
  return (
    <div className="CardPreWoSumEle">
      <div className="CardPreDurRow">
        {durationHours ? durationHours : "00"}
        <div>:</div>
        <div>{durationMinutes ? durationMinutes : "00"}</div>
      </div>
    </div>
  );
};

export default PreviewDurationBox;
