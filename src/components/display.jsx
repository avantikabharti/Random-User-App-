import React from "react";
import Image from "./imageTag";
import Button from "./buttonTag";
import Name from "./text";

export const Display = ({ imageHref, onBtnClickHandler, userName }) => (
  <div>
    <Button btnName="Submit" onBtnClick={onBtnClickHandler} />
    <Name userName={userName} />
    <Image imgSrc={imageHref} imgAlt="Random Image" />
  </div>
);
