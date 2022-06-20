import { highlightKeys, actionTypes } from "../constants";
import { Phase } from "../types";

export function getHighlights(bIndex: number, tIndex: number) {
  const bottomKey = `${highlightKeys.b}-0-${bIndex}`;
  const topKey = `${highlightKeys.t}-0-${tIndex}`;
  return { type: actionTypes.HIGHLIGHT_APPEND, payload: [bottomKey, topKey] };
}

export function clearHighlight() {
  return { type: actionTypes.HIGHLIGHT_CLEAR, payload: null };
}

export function getHighlightWorkingPlusCarry(
  bIndex: number,
  tIndex: number,
  phase: Phase
) {
  const workingKey = `${highlightKeys.w}-0-2`;
  const carryKey = `${phase[1]}-${bIndex}-${tIndex + bIndex}`; // Add indexes to allow for horizontal shift of each row
  return {
    type: actionTypes.HIGHLIGHT_APPEND,
    payload: [workingKey, carryKey],
  };
}

export function getHighlightAnswerColumn(columnIndex: number) {
  const columnKey = `${highlightKeys.a[0]}-0-${columnIndex}`;
  const sumCarryKey = `${highlightKeys.s[1]}-0-${columnIndex}`;
  const payload = [columnKey];

  if (columnIndex > 0) {
    payload.push(sumCarryKey);
  }
  return {
    type: actionTypes.HIGHLIGHT_APPEND,
    payload: payload,
  };
}

export function getFinalHighlightAction() {
  return {
    type: actionTypes.HIGHLIGHT_APPEND,
    payload: [`${highlightKeys.s[0]}-0`],
  };
}
