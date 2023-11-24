import React, { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import "./singleInput.css";

const SingleInput = ({ num, createImage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    // Update the inputValue state as the user types
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Text for image ${num}: ${inputValue}`);
    createImage(num, inputValue);
  };

  return (
    <div className="single-input">
      <span className="input-nums">#{num}</span>
      <form className="form-container" onSubmit={onSubmit}>
        <input
          className="form-control input-text"
          type="text"
          placeholder={`text for image ${num}`}
          aria-label="default input example"
          value={inputValue}
          onChange={handleOnChange}
        />
        <div className="input-icon">
          {/* <button className="input-icon-edit-button" type="button">
            <CiEdit />
          </button> */}
          <button className="input-icon-create-button" type="submit">
            <RiAiGenerate />
          </button>
          <p className="hide">create</p>
        </div>
      </form>
    </div>
  );
};

export default SingleInput;
