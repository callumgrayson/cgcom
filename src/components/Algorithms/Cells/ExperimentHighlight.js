import React from "react";
import "./ExperimentHighlight.css";

function H({ highlight }) {
  return (
    <div className={`experiment_highlight ${highlight ? "highlight" : ""}`}>
      <div className="digit">8</div>
    </div>
  );
}

function ExperimentHighlight() {
  return (
    <div className="experimental_highlight_box">
      <H highlight={true}>ExperimentHighlight</H>
      <H highlight={false}>ExperimentHighlight</H>
    </div>
  );
}

export default ExperimentHighlight;
