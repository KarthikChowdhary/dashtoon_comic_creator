import React, { useState } from "react";
import "./inputForm.css";
import { toast } from "react-toastify";
import { SingleInput } from "../../components";

const InputForm = ({ images }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [responseFetching, setResponseFetching] = useState(false);

  const createImage = (id, inputValue) => {
    console.log(id, inputValue);
    if (inputValue === "")
      return toast.warning("Text should not be empty", {
        position: toast.POSITION.TOP_RIGHT,
      });

    setResponseFetching(true);

    const loadingToastId = toast.info("Creating image...", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });

    query({ inputs: inputValue }).then((response) => {
      toast.dismiss(loadingToastId);
      setResponseFetching(false);
      if (response.success) {
        toast.success("Image created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        images.push(URL.createObjectURL(response));
      } else {
        toast.error("Failed to create image, try again", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  const query = async (data) => {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

  return (
    <div className="input-form">
      {arr.map((index) => {
        return (
          <SingleInput num={index} key={index} createImage={createImage} />
        );
      })}
    </div>
  );
};

export default InputForm;
