import React from "react";
import OperationSign from "./OperationSign.js";
import { highlightKeys } from "./constants";
import ReverseRow from "./ReverseRow";

function Cell({ children, className }) {
  return (
    <div className={`cell${className ? " " + className : ""}`}>{children}</div>
  );
}

function FillerCells({ count }) {
  let returnArray = [];

  for (let i = 0; i < count; i++) {
    returnArray.push(<Cell key={i} />);
  }

  return returnArray;
}

function BottomRow({
  n,
  digitsArray,
  operationSign,
  operationSignColumn,
  highlight,
}) {
  return (
    <div className="bottomrow">
      <OperationSign sign={operationSign} />
      <FillerCells count={operationSignColumn - digitsArray.length} />
      <ReverseRow>
        {digitsArray
          ? digitsArray.map((item, idx) => {
              const isHighlighted = highlight
                ? highlight.includes(`${highlightKeys.b}-0-${idx}`)
                : false;
              return (
                <div key={idx} className={`cell problemrow_cell`}>
                  <div className={`problemrow_cell_box`}>
                    <div
                      className={`problemrow_box ${
                        isHighlighted ? "highlight" : ""
                      }`}
                    >
                      <div className={`problemrow_box_digit`}>{item}</div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </ReverseRow>
    </div>
  );
}

export default BottomRow;
