import { operationSigns } from "./constants";
import { Record } from "./types";

export function safeNumber(n: any) {
  try {
    const int = parseInt(n);
    return isNaN(int) ? 0 : int;
  } catch (error) {
    return 0;
  }
}

export function sum(addends: (string | number)[]) {
  return addends.reduce((acc: number, addend) => acc + safeNumber(addend), 0);
}

export function getReverseDigitArray(n: number) {
  try {
    if (typeof n !== "string" && typeof n !== "number") return [0, 0];
    return n
      .toString()
      .split("")
      .reverse()
      .map((i) => Number(i));
  } catch (error) {
    return [0, 0];
  }
}

export function getLastStep(record: Record) {
  const stepsArray = record.steps;
  return stepsArray[stepsArray.length - 1];
}

export function copyObjectJSONMethod(object: [] | {}) {
  try {
    return JSON.parse(JSON.stringify(object));
  } catch (error: any) {
    console.error("error - copyObjectJSONMethod", error.message);
    return undefined;
  }
}

export function getSumStepCount(record: Record) {
  const lastStep = record.steps[record.steps.length - 1];
  const lastAnswerRowLength =
    lastStep.answer_rows[lastStep.answer_rows.length - 1].length;
  return lastAnswerRowLength;
}

export function getAnswerRows(record: Record) {
  const lastStep = record.steps[record.steps.length - 1];
  const lastAnswerRows = lastStep.answer_rows;
  return lastAnswerRows;
}

export function getAnswerRowsSum(record: Record) {
  const lastStep = record.steps[record.steps.length - 1];
  const lastAnswerRows = lastStep.answer_rows_sum;
  return lastAnswerRows;
}

export function getOperationSignColumn(operationType: string, list: number[]) {
  if (operationType === operationSigns.multiplication) {
    const [a, b] = list;
    return Math.floor(Math.log10(a * b));
  }
}
