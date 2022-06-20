export type MetadataType = {
  problem: (number | string)[];
  top: number;
  topArray: (number | string)[];
  bottom: number;
  bottomArray: (number | string)[];
  underline: boolean;
  operation_sign_column: number | undefined;
  operation_sign: string;
};

export type StringArray = string[];
export type NumberArray = number[];
export type StringOrNumberArray = (string | number)[];
export type StringNumberNullArray = (string | number | null)[];
export type ArrayEmpty = [];
export type ArrayOfArrays = [[]];

export type ActionType = {
  type: string | null;
  payload: any;
};

export type AnswerRowCell = (number | null)[];
export type AnswerRow = AnswerRowCell[];
export type AnswerRows = AnswerRow[];

export type WorkingRow = (number | string)[];
export type Working = WorkingRow[];

export type Highlight = string[];
export type UnderlineAddition = boolean;

export type Step = {
  underline_addition: UnderlineAddition;
  highlight: Highlight;
  working: Working;
  answer_rows: AnswerRows;
  answer_rows_sum: AnswerRows;
};
export type Steps = any[] | Step[];

export type Record = {
  steps: Steps;
  metadata: MetadataType;
};

export type Phase = string[];
export type Phases = {
  calculation: Phase;
  summation: Phase;
};
