import React from "react";
import "./ProgressSlider.css";

function ProgressSlider({ step, from = 0, to = 100, handler }) {
  function handleChange(e) {
    const v = e.target.value;
    handler(v);
  }
  return (
    <div className="progress_slider_box">
      <input
        id="progress_slider"
        type="range"
        onChange={handleChange}
        min={from}
        max={to > 0 ? to : 0}
        value={step}
      />
    </div>
  );
}

export default ProgressSlider;
