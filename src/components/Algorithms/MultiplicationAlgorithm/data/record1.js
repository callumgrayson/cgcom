import { operationSigns } from "./constants";

export const record = {
  metadata: {
    problem: [5, 17, operationSigns.multiplication, 85],
  },
  steps: [
    { top: null, bottom: null, operation_sign_column: 2 },
    { top: 17, bottom: null, operation_sign_column: 2 },
    { top: 17, bottom: 5, operation_sign_column: 2 },
    { top: 17, bottom: 5, underline: true, operation_sign_column: 2 },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-0", "b-0-0"],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-0", "b-0-0"],
      working: [[7, 5, operationSigns.multiplication]],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-0", "b-0-0"],
      working: [[7, 5, operationSigns.multiplication]],
      answer_rows: [[[5, null]]],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-0", "b-0-0"],
      working: [[7, 5, operationSigns.multiplication]],
      answer_rows: [
        [
          [5, null],
          [null, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-1", "b-0-0"],
      working: [],
      answer_rows: [
        [
          [5, null],
          [null, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["t-0-1", "b-0-0"],
      working: [[1, 5, operationSigns.multiplication]],
      answer_rows: [
        [
          [5, null],
          [null, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["w-0-2", "ac-0-1"],
      working: [[1, 5, operationSigns.multiplication]],
      answer_rows: [
        [
          [5, null],
          [null, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["w-0-2", "ac-0-1"],
      working: [
        [1, 5, operationSigns.multiplication],
        [5, 3, operationSigns.addition],
      ],
      answer_rows: [
        [
          [5, null],
          [null, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["w-0-2", "ac-0-1"],
      working: [
        [1, 5, operationSigns.multiplication],
        [5, 3, operationSigns.addition],
      ],
      answer_rows: [
        [
          [5, null],
          [8, 3],
        ],
      ],
    },
    {
      top: 17,
      bottom: 5,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 2,
      highlight: ["a-0"],
      working: [],
      answer_rows: [
        [
          [5, null],
          [8, 3],
        ],
      ],
    },
  ],
};
