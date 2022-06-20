import { operationSigns } from "../constants";
import { getOperationSignColumn, getReverseDigitArray } from "../helpers";
import { runMultiplication, runSummation } from "./runCycles";
import { Record } from "../types";

const initialStep = {
  underline_addition: false,
  highlight: [],
  working: [],
  answer_rows: [],
  answer_rows_sum: [],
};

export function creatorMultiplication(n1: number, n2: number) {
  // 1 - Initialize
  const [a, b] = [n1, n2].sort((a, b) => b - a);
  const [topArray, bottomArray] = [a, b].map((item) =>
    getReverseDigitArray(item)
  );
  const operationSignColumn = getOperationSignColumn(
    operationSigns.multiplication,
    [a, b]
  );
  const record: Record = {
    metadata: {
      problem: [a, b, operationSigns.multiplication, a * b],
      top: a,
      topArray: topArray,
      bottom: b,
      bottomArray: bottomArray,
      underline: true,
      operation_sign_column: operationSignColumn,
      operation_sign: operationSigns.multiplication,
    },
    steps: [initialStep],
  };

  // 2 - Build all the steps for the multiplication phase
  runMultiplication(record);

  // 3 - Build all the steps for the summation phase
  runSummation(record);

  return record;
}
