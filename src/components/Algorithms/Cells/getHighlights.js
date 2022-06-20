export function getIsRowHighlighted(highlightArray, rowIdx) {
  return highlightArray[0] === "a" &&
    Number(highlightArray[1]) === rowIdx &&
    highlightArray.length === 2
    ? true
    : false;
}
export function getIsCarryHighlighted(highlightArray, rowIdx, columnIdx) {
  return highlightArray[0] === "c" &&
    Number(highlightArray[1]) === rowIdx &&
    Number(highlightArray[2]) === columnIdx
    ? true
    : false;
}
export function getIsResultHighlighted(highlightArray, rowIdx, columnIdx) {
  return (highlightArray[0] === "a" &&
    Number(highlightArray[1]) === rowIdx &&
    Number(highlightArray[2]) === columnIdx) ||
    (highlightArray[0] === "ac" && Number(highlightArray[2]) === columnIdx)
    ? true
    : false;
}
