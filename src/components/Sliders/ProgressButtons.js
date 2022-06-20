import React from "react";
import { ReactComponent as ChevronRight } from "../../svg/chevron-right.svg";
import "./ProgressButtons.css";

const directions = [-1, 1];

function ProgressButton({ direction, handler }) {
  return (
    <button className="progress_button" onClick={handler}>
      {direction > 0 ? (
        <ChevronRight className="chevron_right right" />
      ) : (
        <ChevronRight className="chevron_right left" />
      )}
    </button>
  );
}

function ProgressButtons({ handler, step, max, counterValue }) {
  function handleClick(direction) {
    const newStep = Number(step) + Number(direction);
    if (newStep >= 0 && newStep <= max) {
      handler(newStep);
    }
  }
  return (
    <div className="progress_buttons_spacer">
      <div className="counter_value">{counterValue}</div>
      {directions.map((direction) => {
        return (
          <ProgressButton
            key={direction}
            direction={direction}
            handler={() => handleClick(direction)}
          />
        );
      })}
    </div>
  );
}

export default ProgressButtons;
