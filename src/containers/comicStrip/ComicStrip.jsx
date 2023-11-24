import React from "react";
import "./comicStrip.css";
import SingleImage from "../../components/singleImage/SingleImage";

const ComicStrip = ({ title, images }) => {
  return (
    <div className="right-container">
      <div className="title">
        <h1>{title ? title : "Enter Your Title"}</h1>
      </div>
      <div className="strip-container">
        <SingleImage w={33} b={3} imgsrc={images[0]} />
        <SingleImage w={33} b={3} imgsrc={images[1]} />
        <SingleImage w={33} b={3} imgsrc={images[2]} />
        <SingleImage w={24.5} b={3} imgsrc={images[3]} />
        <SingleImage w={24.5} b={3} imgsrc={images[4]} />
        <SingleImage w={24.5} b={3} imgsrc={images[5]} />
        <SingleImage w={24.5} b={3} imgsrc={images[6]} />
        <SingleImage w={33} b={3} imgsrc={images[7]} />
        <SingleImage w={33} b={3} imgsrc={images[8]} />
        <SingleImage w={33} b={3} imgsrc={images[9]} />
      </div>
    </div>
  );
};

export default ComicStrip;
