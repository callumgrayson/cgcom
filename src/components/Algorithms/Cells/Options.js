import React from "react";
import "./Options.css";
function Options({ options, handler, selected }) {
  return (
    <div>
      {options.map((option, idx) => {
        return (
          <button
            key={option}
            className={`option_highlight_button ${
              selected === option ? "highlight" : ""
            }`}
            onClick={() => handler(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
