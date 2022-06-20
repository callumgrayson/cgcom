import React from "react";
import { highlightKeys } from "./constants";

function AnswerCell({
  answerCell = [null, null],
  highlight,
  colIdx,
  rowIdx,
  highlightKey,
}) {
  const isHighlightedAnswerColumn = highlight
    ? highlight.includes(`${highlightKeys[highlightKey][0]}-0-${colIdx}`)
    : false;
  const isHighlightedAnswer = highlight
    ? highlight.includes(
        `${highlightKeys[highlightKey][0]}-${rowIdx}-${colIdx}`
      )
    : false;
  const isHighlightedCarry = highlight
    ? highlight.includes(
        `${highlightKeys[highlightKey][1]}-${rowIdx}-${colIdx}`
      )
    : false;

  return (
    <div className={`cell answer_cell`}>
      <div className={`answer_cell_carry`}>
        <div
          className={`answer_carry ${isHighlightedCarry ? "highlight" : ""}`}
        >
          <div className={`answer_carry_digit`}>{answerCell[1]}</div>
        </div>
      </div>
      <div className={`answer_cell_result`}>
        <div
          className={`answer_result ${
            isHighlightedAnswer || isHighlightedAnswerColumn ? "highlight" : ""
          }`}
        >
          <div className={`answer_result_digit`}>{answerCell[0]}</div>
        </div>
      </div>
    </div>
  );
}

function AnswerRow({ answerRow = [], highlight, rowIdx, highlightKey }) {
  const isHighlighted = highlight
    ? highlight.includes(`${highlightKeys[highlightKey][0]}-${rowIdx}`)
    : false;

  return (
    <div className="answer_row">
      <div className={`answer_row_box`}>
        <div
          className={`highlight_box ${isHighlighted ? "highlight" : ""}`}
        ></div>
        <div className={`answer_row_cells_box`}>
          {answerRow.map((answerCell, idx) => (
            <AnswerCell
              key={idx}
              answerCell={answerCell}
              highlight={highlight}
              colIdx={idx}
              rowIdx={rowIdx}
              highlightKey={highlightKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnswerRows({ answerRows = [], highlight, highlightKey }) {
  return answerRows.map((answerRow, idx) => (
    <AnswerRow
      key={idx}
      answerRow={answerRow}
      highlight={highlight}
      rowIdx={idx}
      highlightKey={highlightKey}
    />
  ));
}

export default AnswerRows;
