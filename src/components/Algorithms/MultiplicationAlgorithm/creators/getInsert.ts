import { actionTypes } from "../constants";
import {
  safeNumber,
  getAnswerRows,
  getAnswerRowsSum,
  copyObjectJSONMethod,
  getReverseDigitArray,
} from "../helpers";
import { Record, ActionType, AnswerRows } from "../types";

export function getInserts(
  bIndex: number,
  tIndex: number,
  result: number,
  record: Record
) {
  const lastAnswerRows = getAnswerRows(record);

  // Fresh copy of last answer rows
  const newAnswerRowsForUnit = copyObjectJSONMethod(lastAnswerRows);

  // Add a new cell in case carry is needed
  if (tIndex < record.metadata.topArray.length - 1) {
    // Place the digit in the unit cell as well
    newAnswerRowsForUnit[bIndex].push([null, null]);
  }

  // Get unit digit & carry digit
  const [unitDigit, carryDigit] = getReverseDigitArray(result);

  // Add the unit digit
  newAnswerRowsForUnit[bIndex][bIndex + tIndex][0] = safeNumber(unitDigit);

  // Get new array for carry digit
  const newAnswerRowsForCarry = copyObjectJSONMethod(newAnswerRowsForUnit);

  // If it is the last digit in the row, also add the digit in unit cell
  if (tIndex === record.metadata.topArray.length - 1) {
    // Place the digit in the unit cell as well
    newAnswerRowsForCarry[bIndex][bIndex + tIndex + 1] = [
      carryDigit,
      carryDigit,
    ];
  } else {
    newAnswerRowsForCarry[bIndex][bIndex + tIndex + 1][1] = carryDigit;
  }

  const actions: ActionType[] = [
    { type: actionTypes.ANSWER_ROWS_APPEND, payload: newAnswerRowsForUnit },
  ];

  if (carryDigit > 0) {
    actions.push({
      type: actionTypes.ANSWER_ROWS_APPEND,
      payload: newAnswerRowsForCarry,
    });
  } else {
    actions.push({ type: null, payload: null });
  }

  return actions;
}

export function getInsertPlaceValueCells(
  record: Record,
  bIndex: number,
  tIndex: number
) {
  if (tIndex === 0) {
    const lastAnswerRows = getAnswerRows(record);

    // Fresh copy of last answer rows
    const newAnswerRows = copyObjectJSONMethod(lastAnswerRows);
    newAnswerRows.push([]);
    addPlaceValueCells(newAnswerRows, bIndex);

    return { type: actionTypes.ANSWER_ROWS_APPEND, payload: newAnswerRows };
  }

  return { type: null, payload: null };
}

export function getInsertsSummation(
  [sumDigit, carryDigit]: (number | string)[],
  record: Record,
  columnIndex: number,
  sumStepCount: number
) {
  const lastAnswerRowsSum = getAnswerRowsSum(record);
  const answerRowsSum = copyObjectJSONMethod(lastAnswerRowsSum);

  if (columnIndex === 0) {
    answerRowsSum.push([[null, null]]);
  }
  if (columnIndex < sumStepCount) {
    // No extra column needed for carry when at last column
    answerRowsSum[0].push([null, null]);
  }

  // Insert sum into the cell
  answerRowsSum[0][columnIndex][0] = sumDigit;

  // Fresh copy for the carry action
  const answerRowsSumForCarry = copyObjectJSONMethod(answerRowsSum);
  const carryDigitAction: ActionType = { type: null, payload: null };

  // Insert carry if needed

  if (carryDigit) {
    try {
      if (columnIndex === sumStepCount - 1) {
        answerRowsSumForCarry[0][columnIndex + 1][0] = carryDigit;
      }
      answerRowsSumForCarry[0][columnIndex + 1][1] = carryDigit;
      carryDigitAction.type = actionTypes.ANSWER_ROWS_SUM_APPEND;
      carryDigitAction.payload = answerRowsSumForCarry;
    } catch (error: any) {
      console.log("error", error.message);
      console.log("carryDigit", carryDigit);
    }
  }

  const sumDigitAction = {
    type: actionTypes.ANSWER_ROWS_SUM_APPEND,
    payload: answerRowsSum,
  };

  return [sumDigitAction, carryDigitAction];
}

function addPlaceValueCells(newAnswerRows: AnswerRows, bIndex: number) {
  for (let i = 0; i < bIndex; i++) {
    newAnswerRows[bIndex].push([0, null]);
  }
  newAnswerRows[bIndex].push([null, null]);
}
