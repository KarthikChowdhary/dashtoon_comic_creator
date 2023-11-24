import "./App.css";
import { Navbar } from "./components";
import { InputBox, ComicStrip } from "./containers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { React, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");

  const onc = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="home-container">
        <InputBox images={images} onc={onc} title={title} />
        <ToastContainer />
        <ComicStrip images={images} title={title} />
      </div>
    </div>
  );
}

export default App;
