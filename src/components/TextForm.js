import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const handleCopyText = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.whiteText(text.value);
    props.showAlert("Copied Text", "success");
  };

  const handleCapitalizedClick = () => {
    for (let i = 0; i < text.length; i++) {
      let newText = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      setText(newText);
      props.showAlert("Capitalized Text", "success");
    }
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalizedClick}
        >
          Capitalized First Word
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter SOmething in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
