import React, { useState } from "react";
import "./Excercise1.css";
const Excercise1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [style, setStyle] = useState("class1");
  const [fontSize, setFontSize] = useState(24);
  const [fontStyle, setFontStyle] = useState("Arial");
  const characterLimit = 50;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= characterLimit) {
      setInputValue(newValue);
    }
  };
  return (
    <div>
      Excercise1
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={`Enter text...`}
      />
      <p>
        {characterLimit - inputValue.length} / {characterLimit}
      </p>
      <div className={style}>
        <button
          onClick={() => {
            setStyle((prev) => (prev == "class1" ? "class2" : "class1"));
          }}
        >
          Click Here
        </button>
      </div>
      <div>
        <br></br>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" ,textAlign:'center'}}>
          <button
            onClick={() => {
              setFontSize((prev) => prev - 1);
            }}
          >
            -
          </button>
          <p>{fontSize}</p>
          <button
            onClick={() => {
              setFontSize((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <br />
        <select
          value={fontStyle}
          onChange={(e) => {
            setFontStyle(e.target.value);
          }}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <textarea style={{ fontSize: fontSize ,fontFamily:fontStyle}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet nunc nulla. Donec vitae enim finibus, auctor ligula ullamcorper,
          commodo leo.
        </textarea>
      </div>
    </div>
  );
};

export default Excercise1;
