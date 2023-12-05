import React, { useState } from "react";
import "./UrlResul.css";

function UrlResul(props) {
  const [iscopied, setCopy] = useState(false);
  function handelCopy(newLink) {
    navigator.clipboard.writeText(newLink);
    setCopy(true);
  }
  return (
    <div className="url-box">
      <p className="old-link">{props.oldLink}</p>
      <div className="new-link">
        <p>{props.newLink}</p>
        <button
          onClick={() => {
            handelCopy(props.newLink);
          }}
          style={iscopied ? { background: "hsl(257, 27%, 26%)" } : null}
        >
          {iscopied ? "Copied!" : "copy"}
        </button>
      </div>
    </div>
  );
}

export default UrlResul;
