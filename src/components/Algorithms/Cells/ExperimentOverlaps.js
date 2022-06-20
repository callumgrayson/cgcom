import React from "react";
import "./ExperimentOverlaps.css";

function getRange(min, max) {
  const list = [];

  for (let i = min; i <= max; i++) {
    list.push(i);
  }

  return list;
}

const list = getRange(0, 3);

function ExperimentOverlaps() {
  return (
    <div>
      <h4>ExperimentOverlaps</h4>
      <div className={`experiment_center_box`}>
        {list.map((item, idx) => (
          <div key={item} className={`experiment_overlap_box b${item}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperimentOverlaps;
