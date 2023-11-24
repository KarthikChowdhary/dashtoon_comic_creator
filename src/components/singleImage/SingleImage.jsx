import React from "react";
import "./singleImage.css";

const SingleImage = ({ w, b, imgsrc }) => {
  return (
    <div
      className="img-container"
      style={{
        margin: "2px auto",

        width: `${w}%`,
        height: "272px",
        border: `${b}px solid black`,
      }}
    >
      {imgsrc ? (
        <img src={imgsrc} alt="start creating"></img>
      ) : (
        <p className="alternate">start creating</p>
      )}
    </div>
  );
};

export default SingleImage;
