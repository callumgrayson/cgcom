import React from "react";
import { highlightKeys } from "./constants";
import ReverseRow from "./ReverseRow";

function TopRow({ n, highlight = [], digitsArray }) {
  return (
    <div className="toprow">
      <ReverseRow>
        {digitsArray
          ? digitsArray.map((item, idx) => {
              const isHighlighted = highlight
                ? highlight.includes(`${highlightKeys.t[0]}-0-${idx}`)
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

export default TopRow;
