import React from "react";
import "./inputBox.css";
import InputForm from "../inputForm/InputForm";
import Sharebar from "./../../components/sharebar/Sharebar";

const InputBox = ({ images, onc, title }) => {
  return (
    <div className="input-box">
      <div className="input-box-heading">
        <h2>Start typing below to create your custom comic strip</h2>
      </div>
      <div class="titleinput">
        <h1>Enter your title</h1>
        <input
          type="text"
          className="form-control titleform"
          placeholder=""
          value={title}
          onChange={onc}
        />
      </div>
      <div class="input-form">
        <InputForm images={images} />
      </div>
      <div class="share-bar">
        <Sharebar />
      </div>
      <div class="copyright">
        <p>COPYRIGHT / KARTHIK</p>
      </div>
    </div>
  );
};

export default InputBox;
