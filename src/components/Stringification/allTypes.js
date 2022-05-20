const allTypes = [
  {
    asWritten: "undefined",
    value: undefined,
    typeof: "undefined",
  },
  {
    asWritten: "null",
    value: null,
    typeof: "object",
  },
  {
    asWritten: "[]",
    value: [],
    typeof: "object",
  },
  {
    asWritten: "{}",
    value: {},
    typeof: "object",
  },
  {
    asWritten: "false",
    value: false,
    typeof: "boolean",
  },
  {
    asWritten: "true",
    value: true,
    typeof: "boolean",
  },
  {
    asWritten: '""',
    value: "",
    typeof: "string",
  },
  {
    asWritten: "0",
    value: 0,
    typeof: "number",
  },
  {
    asWritten: "1",
    value: 1,
    typeof: "number",
  },
  {
    asWritten: "-1",
    value: -1,
    typeof: "number",
  },
  {
    asWritten: "Infinity",
    value: Infinity,
    typeof: "number",
  },
  {
    asWritten: "-Infinity",
    value: -Infinity,
    typeof: "number",
  },
  {
    asWritten: "NaN",
    value: NaN,
    typeof: "number",
  },
  {
    asWritten: "new Date()",
    value: new Date(),
    typeof: "object",
  },
  {
    asWritten: "Date()",
    value: Date(),
    typeof: "string",
  },
  {
    asWritten: "Date.now()",
    value: Date.now(),
    typeof: "number",
  },
  {
    asWritten: "function(){}",
    value: function () {},
    typeof: "function",
  },
  {
    asWritten: "()=>{}",
    value: () => {},
    typeof: "function",
  },
  {
    asWritten: "new Promise(()=>{})",
    value: new Promise(() => {}),
    typeof: "object",
  },
  {
    asWritten: "new Set()",
    value: new Set(),
    typeof: "object",
  },
  {
    asWritten: "new Map()",
    value: new Map(),
    typeof: "object",
  },
  {
    asWritten: '[undefined, null, ""]',
    value: [undefined, null, ""],
    typeof: "object",
  },
  {
    asWritten: "[true, false]",
    value: [true, false],
    typeof: "object",
  },
  {
    asWritten: "[NaN, 0, 1, -1]",
    value: [NaN, 0, 1, -1],
    typeof: "object",
  },
  {
    asWritten: "Symbol()",
    value: Symbol(),
    typeof: "symbol",
  },
  {
    asWritten: "RegExp()",
    value: RegExp(),
    typeof: "object",
  },
  {
    asWritten: "/\\w/",
    value: /\w/,
    typeof: "object",
  },
];
export default allTypes;
