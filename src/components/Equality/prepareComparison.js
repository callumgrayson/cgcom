import { equalityModes } from "./constants";

function prepareValue(val) {
  if (val.typeof === "object") return JSON.parse(JSON.stringify(val.value));
  if (val.typeof === "symbol") return Symbol();

  return val.value;
}

function compareDoubleEquals(a, b) {
  return a == b;
}
function compareTripleEquals(a, b) {
  return a === b;
}
function compareObjectIs(a, b) {
  return Object.is(a, b);
}

const functionMap = {
  doubleEquals: compareDoubleEquals,
  tripleEquals: compareTripleEquals,
  objectIs: compareObjectIs,
};

function prepareComparison(mode, content) {
  //   console.log("mode, content", mode, content);
  try {
    // Check mode
    if (!mode) throw new Error("mode must be provided");
    if (!(mode in equalityModes))
      throw new Error(
        `mode must be one of ${Object.keys(equalityModes).join(" | ")}`
      );

    const compareFn = functionMap[mode];

    const { list, on } = content;

    if (!list || !Array.isArray(list)) throw new Error("list must be an array");

    // if no 'on' key then compare the array items as they stand
    // console.log("on", on);
    if (!on) throw new Error('No "on" key provided.');

    // if 'on' key build comparison object based on this value
    const matrix = list.map((row) => {
      return list.map((col) => {
        const rowVal = prepareValue(row);
        const colVal = prepareValue(col);
        const areEqual = compareFn(rowVal, colVal);
        // console.log("row, col, areEqual", row, col, areEqual);
        return { row, col, areEqual };
      });
    });

    // console.log("matrix", matrix);
    return matrix;
  } catch (error) {
    console.log("error - prepareComparison()", error);
    return null;
  }
}

export default prepareComparison;
