import React from "react";

const PreviewTitle = ({ title }) => {
  return <h1 className="WoPreviewTitle">{title ? title : "Workout Title"}</h1>;
};

export default PreviewTitle;
