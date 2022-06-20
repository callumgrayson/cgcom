import React from "react";
import operationSignDisplays from "./OperationSigns";
import { operationSigns, highlightKeys, calculations } from "./constants";
import { sum } from "./helpers";

function WorkingBox({ children }) {
  return <div className="working_box">{children}</div>;
}

function Working({ highlight, rows }) {
  if (!rows || !rows.length) {
    return <WorkingBox />;
  }

  return rows.map((row, idx) => {
    const isHighlightedResult = highlight
      ? highlight.includes(`${highlightKeys.w}-${idx}-2`)
      : false;

    if (Array.isArray(row[0])) {
      const cellsJoined = row[0].map((item, idx) => {
        if (idx === 0) {
          return (
            <span key={idx} className={`working_cell `}>
              {item}
            </span>
          );
        }
        return (
          <span key={idx}>
            {operationSignDisplays[row[2]]}
            <span key={idx} className={`working_cell `}>
              {item}
            </span>
          </span>
        );
      });

      return (
        <WorkingBox key={idx}>
          {cellsJoined}
          {operationSignDisplays[operationSigns.equals]}
          <span
            className={`working_cell ${isHighlightedResult ? "highlight" : ""}`}
          >
            {sum(row[0])}
          </span>
        </WorkingBox>
      );
    }

    return (
      <WorkingBox key={idx}>
        <span className={`working_cell `}>{row[0]}</span>
        {operationSignDisplays[row[2]]}
        <span className={`working_cell `}>{row[1]}</span>
        {operationSignDisplays[operationSigns.equals]}
        <span
          className={`working_cell ${isHighlightedResult ? "highlight" : ""}`}
        >
          {calculations[row[2]](row[0], row[1])}
        </span>
      </WorkingBox>
    );
  });
}

export default Working;
