import React from "react";

const PreviewWoSumBox = ({ data, text }) => {
  return <div className="CardPreWoSumEle">{data ? data : text}</div>;
};

export default PreviewWoSumBox;
