import { options } from "./constants";

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
export function pick(options) {
  return options[getRandom(0, options.length - 1)];
}

export function getHighlightString(option) {
  let string = "";

  switch (option) {
    case options[0]:
      string = `c-${getRandom(0, 9)}-${getRandom(0, 9)}`;
      break;
    case options[1]:
      string = `${pick(["c", "a", "ac"])}-${getRandom(0, 9)}-${getRandom(
        0,
        9
      )}`;
      break;
    case options[2]:
      string = `a-${getRandom(0, 9)}-${getRandom(0, 9)}`;
      break;
    case options[3]:
      string = `a-${getRandom(0, 9)}`;
      break;
    case options[4]:
      string = `ac-0-${getRandom(0, 9)}`;
      break;

    default:
      break;
  }

  return string;
}
