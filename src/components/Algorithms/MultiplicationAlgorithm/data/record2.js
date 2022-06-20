import { operationSigns } from "./constants";

// Must calculate operation_sign_column during initialization
// Must determine top and bottom numbers during initn

export const record = {
  metadata: {
    problem: [581, 17, operationSigns.multiplication, 9877],
  },
  steps: [
    { top: null, bottom: null, operation_sign_column: 3 },
    { top: 581, bottom: null, operation_sign_column: 3 },
    { top: 581, bottom: 17, operation_sign_column: 3 },
    { top: 581, bottom: 17, underline: true, operation_sign_column: 3 },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-0"],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-0"],
      working: [[1, 7, operationSigns.multiplication]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-0"],
      working: [[1, 7, operationSigns.multiplication]],
      answer_rows: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-0"],
      working: [],
      answer_rows: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-0"],
      working: [[8, 7, operationSigns.multiplication]],
      answer_rows: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-0"],
      working: [[8, 7, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-0"],
      working: [[8, 7, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [null, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-2", "b-0-0"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [null, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-2", "b-0-0"],
      working: [[5, 7, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [null, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["w-0-2", "ac-0-2"],
      working: [[5, 7, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [null, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["w-0-2", "ac-0-2"],
      working: [
        [5, 7, operationSigns.multiplication],
        [35, 5, operationSigns.addition],
      ],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [null, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [
        [5, 7, operationSigns.multiplication],
        [35, 5, operationSigns.addition],
      ],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [
        [5, 7, operationSigns.multiplication],
        [35, 5, operationSigns.addition],
      ],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [null, 4],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [
        [5, 7, operationSigns.multiplication],
        [35, 5, operationSigns.addition],
      ],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [[0, null]],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-1"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [[0, null]],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-1"],
      working: [[1, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [[0, null]],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-0", "b-0-1"],
      working: [[1, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-1"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-1"],
      working: [[8, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-1", "b-0-1"],
      working: [[8, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-2", "b-0-1"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-2", "b-0-1"],
      working: [[5, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["t-0-2", "b-0-1"],
      working: [[5, 1, operationSigns.multiplication]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: [],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-0", "a-1-0"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-0", "a-1-0"],
      working: [[7, 0, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-0", "a-1-0"],
      working: [[7, 0, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-1", "a-1-1"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-1", "a-1-1"],
      working: [[6, 1, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [[[7, null]]],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-1", "a-1-1"],
      working: [[6, 1, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-2", "a-1-2"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-2", "a-1-2"],
      working: [[0, 8, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-2", "a-1-2"],
      working: [[0, 8, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-3", "a-1-3"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-3", "a-1-3"],
      working: [[4, 5, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
          [8, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["a-0-3", "a-1-3"],
      working: [[4, 5, operationSigns.addition]],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
          [8, null],
          [9, null],
        ],
      ],
    },
    {
      top: 581,
      bottom: 17,
      underline: true,
      underline_addtion: true,
      operation_sign: operationSigns.multiplication,
      operation_sign_column: 3,
      highlight: ["s-0"],
      working: [],
      answer_rows: [
        [
          [7, null],
          [6, null],
          [0, 5],
          [4, 4],
        ],
        [
          [0, null],
          [1, null],
          [8, null],
          [5, null],
        ],
      ],
      answer_rows_addition: [
        [
          [7, null],
          [7, null],
          [8, null],
          [9, null],
        ],
      ],
    },
  ],
};
