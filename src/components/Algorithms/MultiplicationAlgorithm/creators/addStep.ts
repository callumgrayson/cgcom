import { actionTypes } from "../constants";
import { copyObjectJSONMethod } from "../helpers";
import { Record, Step, ActionType } from "../types";

export default function addStep(record: Record, actionList: ActionType[]) {
  const stepsLen = record.steps.length;
  const newRecordRow = copyObjectJSONMethod({ ...record.steps[stepsLen - 1] });

  let create = false;

  actionList.forEach((action) => {
    try {
      if (action.type) {
        create = true;
        subStepActions(newRecordRow, action);
      }
    } catch (error: any) {
      console.log("error", stepsLen, error.message, action, actionList);
    }
  });

  if (create) {
    record.steps.push(newRecordRow);
  }
}

function subStepActions(newRecordRow: Step, { type, payload }: ActionType) {
  switch (type) {
    case actionTypes.ANSWER_ROWS_APPEND:
      newRecordRow.answer_rows = payload;
      break;
    case actionTypes.ANSWER_ROWS_SUM_APPEND:
      newRecordRow.answer_rows_sum = payload;
      break;
    case actionTypes.HIGHLIGHT_APPEND:
      newRecordRow.highlight.push(...payload);
      break;
    case actionTypes.HIGHLIGHT_CLEAR:
      newRecordRow.highlight = [];
      break;
    case actionTypes.WORKING_APPEND:
      newRecordRow.working.push(payload);
      break;
    case actionTypes.WORKING_CLEAR:
      newRecordRow.working = [];
      break;
    case actionTypes.UNDERLINE_SUMMATION_ACTIVATE:
      newRecordRow.underline_addition = true;
      break;

    default:
      break;
  }
}
