export const operationSigns = {
  addition: "addition",
  subtraction: "subtraction",
  multiplication: "multiplication",
  division: "division",
  equals: "equals",
};

export const highlightKeys = {
  a: ["a", "ac"], // answerRow, answerCarryRow
  ac: ["ac"],
  aCol: ["aCol"],
  b: ["b"],
  s: ["s", "sc"], // sumRow, sumCarryRow
  sc: ["sc"],
  t: ["t"],
  w: ["w"], // workingRow
};

export const actionTypes = {
  UNDERLINE_SUMMATION_ACTIVATE: "UNDERLINE_SUMMATION_ACTIVATE",
  ANSWER_ROWS_SUM_APPEND: "ANSWER_ROWS_SUM_APPEND",
  ANSWER_ROWS_APPEND: "ANSWER_ROWS_APPEND",
  HIGHLIGHT_APPEND: "HIGHLIGHT_APPEND",
  HIGHLIGHT_CLEAR: "HIGHLIGHT_CLEAR",
  WORKING_APPEND: "WORKING_APPEND",
  WORKING_CLEAR: "WORKING_CLEAR",
};

export const calculations = {
  [operationSigns.multiplication]: (a, b) => Number(a) * Number(b),
  [operationSigns.addition]: (a, b) => Number(a) + Number(b),
};

export const phases = {
  calculation: ["calculation", highlightKeys.ac[0]],
  summation: ["summation", highlightKeys.sc[0]],
};
