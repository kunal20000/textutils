import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState();

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setText(text.toUpperCase())}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setText(text.toLowerCase())}
      >
        Convert to Lowercase
      </button>
    </div>
  );
};

export default TextForm;
