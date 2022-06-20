import React from "react";

function Toggler({ options = [], handler, recordSet }) {
  return (
    <div>
      {options.map((option, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handler(option)}
            className={`options_button ${
              recordSet === option ? "selected" : ""
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Toggler;
