import { actionTypes, calculations, operationSigns } from "../constants";
import { safeNumber, getLastStep, copyObjectJSONMethod } from "../helpers";
import { ActionType, AnswerRows, Record } from "../types";

export function getWorking(
  operation: string,
  bValue: number | string,
  tValue: number | string
) {
  const payload = [tValue, bValue, operation];
  return { type: actionTypes.WORKING_APPEND, payload: payload };
}

export function clearWorking() {
  return { type: actionTypes.WORKING_CLEAR, payload: null };
}

export function getWorkingPlusCarry(
  record: Record,
  bIndex: number,
  tIndex: number
): [a: ActionType, b: number] {
  const lastStep = getLastStep(record);

  // Get the result from the working on the line above
  const workingResult = calculations[lastStep.working[0][2]](
    lastStep.working[0][0],
    lastStep.working[0][1]
  );

  // Get the carry value for the current indexes
  const carryValueOfAnswerCell = getCarryValueOfCell(
    lastStep.answer_rows,
    bIndex,
    tIndex
  );

  // Add the display calculation to the working array: [workingResult, carryValue, 'addition']
  const payload = [
    workingResult,
    carryValueOfAnswerCell,
    operationSigns.addition,
  ];

  return [
    { type: actionTypes.WORKING_APPEND, payload: payload },
    safeNumber(workingResult) + safeNumber(carryValueOfAnswerCell),
  ];
}

function getCarryValueOfCell(
  answerRows: AnswerRows,
  bIndex: number,
  tIndex: number
) {
  try {
    return safeNumber(answerRows[bIndex][tIndex + bIndex][1]); // Add indexes to allow for horizontal shift of each row
  } catch (error) {
    return 0;
  }
}

export function getWorkingSummation(
  columnIndex: number,
  answerRows: AnswerRows,
  record: Record
): [a: number, b: ActionType] {
  const lastStep = getLastStep(record);
  const answerRowsSum = copyObjectJSONMethod(lastStep.answer_rows_sum);

  const carryValue =
    columnIndex === 0 ? 0 : safeNumber(answerRowsSum[0][columnIndex][1]);

  let sum = 0;
  const digits = [];

  for (let i = 0; i < answerRows.length; i++) {
    const digit = safeNumber(answerRows[i][columnIndex]);
    digits.push(digit);
    sum += digit;
  }

  // Add carry value - if not zeroth column
  if (columnIndex > 0) {
    digits.push(carryValue);
    sum += safeNumber(carryValue);
  }

  const workingArray = [digits, null, operationSigns.addition];

  return [sum, { type: actionTypes.WORKING_APPEND, payload: workingArray }];
}
