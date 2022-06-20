import {
  getHighlights,
  clearHighlight,
  getHighlightWorkingPlusCarry,
  getHighlightAnswerColumn,
  getFinalHighlightAction,
} from "./getHighlights";
import {
  getWorking,
  clearWorking,
  getWorkingPlusCarry,
  getWorkingSummation,
} from "./getWorking";
import {
  getInserts,
  getInsertsSummation,
  getInsertPlaceValueCells,
} from "./getInsert";
import {
  getReverseDigitArray,
  getSumStepCount,
  getAnswerRows,
} from "../helpers";
import { getUnderlineSummationAction } from "./getActions";
import addStep from "./addStep";
import { phases } from "../constants";
import { ActionType, Record, Phase, AnswerRows } from "../types";

export function runMultiplication(record: Record) {
  const { topArray, bottomArray } = record.metadata;

  // For each digit in the bottom number...
  for (let b = 0; b < bottomArray.length; b++) {
    // ...cycle through each digit in the top number
    for (let t = 0; t < topArray.length; t++) {
      runDigitPairCycle(b, t, record, phases.calculation);
    }
  }

  return record;
}

function runDigitPairCycle(
  bIndex: number,
  tIndex: number,
  record: Record,
  phase: Phase
) {
  // This is the record function with record partially applied
  const addStepRecord = (...actionList: ActionType[]) =>
    addStep(record, actionList);

  // Add Place Value cells if needed
  addStepRecord(getInsertPlaceValueCells(record, bIndex, tIndex));

  // Highlight
  addStepRecord(getHighlights(bIndex, tIndex));

  // Working
  addStepRecord(
    getWorking(
      record.metadata.operation_sign,
      record.metadata.bottomArray[bIndex],
      record.metadata.topArray[tIndex]
    )
  );

  // Highlight working result and carry cell
  addStepRecord(getHighlightWorkingPlusCarry(bIndex, tIndex, phase));

  // Add working line: Sum working and carry
  const [action, result] = getWorkingPlusCarry(record, bIndex, tIndex);
  addStepRecord(action);

  // Insert unit digit
  const [insertUnitAction, insertCarryAction] = getInserts(
    bIndex,
    tIndex,
    result,
    record
  );
  addStepRecord(insertUnitAction);

  // Insert carry digit
  addStepRecord(insertCarryAction);

  // Clear Highlights ready for next pair
  addStepRecord(clearHighlight(), clearWorking());
}

export function runSummation(record: Record) {
  // Begin the summation cycles
  const sumStepCount = getSumStepCount(record);
  const answerRows = getAnswerRows(record);

  // For each column in the answer rows..
  for (let i = 0; i < sumStepCount; i++) {
    runSumCycle(i, sumStepCount, answerRows, record);
  }
}

export function runSumCycle(
  columnIndex: number,
  sumStepCount: number,
  answerRows: AnswerRows,
  record: Record
) {
  // Set the record function
  const addStepRecord = (...actionList: ActionType[]) =>
    addStep(record, actionList);

  // If its the first cycle add a summation underline
  if (columnIndex === 0) {
    addStepRecord(getUnderlineSummationAction());
  }

  // Highlight the answer column
  const highlightAction = getHighlightAnswerColumn(columnIndex);
  addStepRecord(highlightAction);

  // Add a column summation working line
  const [result, workingAction] = getWorkingSummation(
    columnIndex,
    answerRows,
    record
  );
  addStepRecord(workingAction);

  // Get digits
  const [sumDigit, carryDigit] = getReverseDigitArray(result);

  // Get record actions
  const [sumDigitAction, carryDigitAction] = getInsertsSummation(
    [sumDigit, carryDigit],
    record,
    columnIndex,
    sumStepCount
  );

  // Insert summation digit
  addStepRecord(sumDigitAction);

  // Insert summation carry
  addStepRecord(carryDigitAction);

  // Clear Highlights ready for next pair
  if (columnIndex === sumStepCount - 1) {
    addStepRecord(clearHighlight(), clearWorking(), getFinalHighlightAction());
  } else {
    addStepRecord(clearHighlight(), clearWorking());
  }
}
