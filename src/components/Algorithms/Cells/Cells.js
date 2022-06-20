import { useState } from "react";
import Cell from "./Cell";
import Row from "./Row";
import Options from "./Options";
import ExperimentHighlight from "./ExperimentHighlight";
import ExperimentOverlaps from "./ExperimentOverlaps";
import {
  getIsRowHighlighted,
  getIsCarryHighlighted,
  getIsResultHighlighted,
} from "./getHighlights";
import { getHighlightString } from "./helpers";
import { options, numerals } from "./constants";
import "./Cells.css";

function Cells() {
  const [highlightType, setHighlightType] = useState(options[1]);
  const [highlightString, setHighlightString] = useState("a-3-7");
  function handleOptionChange(option) {
    setHighlightType(option);
    setHighlightString(getHighlightString(option));
  }
  const highlightArray = highlightString.split("-");

  return (
    <div className="algorithms_cells">
      <ExperimentOverlaps />
      <Options
        options={options}
        handler={handleOptionChange}
        selected={highlightType}
      />
      <pre>{highlightString}</pre>

      <div className="algorithms_cells_box">
        {numerals.map((numeral0, rowIdx) => {
          const isRowHighlighted = getIsRowHighlighted(highlightArray, rowIdx);
          return (
            <Row key={rowIdx} highlight={isRowHighlighted}>
              {numerals.map((numeral1, columnIdx) => {
                const isCarryHighlighted = getIsCarryHighlighted(
                  highlightArray,
                  rowIdx,
                  columnIdx
                );

                const isResultHighlighted = getIsResultHighlighted(
                  highlightArray,
                  rowIdx,
                  columnIdx
                );

                return (
                  <Cell
                    key={[rowIdx, columnIdx].join("")}
                    digits={[numeral0, numeral1]}
                    highlightCarry={isCarryHighlighted}
                    highlightResult={isResultHighlighted}
                  />
                );
              })}
            </Row>
          );
        })}
      </div>
      <ExperimentHighlight />
    </div>
  );
}

export default Cells;
