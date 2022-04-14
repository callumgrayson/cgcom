import toJSXString from "react-element-to-jsx-string";

// This is loaded by the style-loader, injecting the styles into the DOM
import "./styles.css";

// eslint-disable-next-line
import output from "!css-loader!./styles.css";
const jsxS =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function trimLoadedCSS(cssString) {
  const cutStartIndex = cssString.indexOf("/* ##1") + 10;
  const cutEndIndex = cssString.indexOf("/* ##1", cutStartIndex + 1);
  return cssString.slice(cutStartIndex, cutEndIndex).trim();
}

function JsxToNest({ nest }) {
  return (
    <div className="pre-container">
      <pre className="pre-text">{nest}</pre>
    </div>
  );
}

const JsxToNestString = toJSXString(
  <div className="pre-container">
    <pre className="pre-text">{jsxS}</pre>
  </div>
);

const displayCSS = trimLoadedCSS(output.toString());

function DisplayCode() {
  return (
    <div className="display-code-container">
      <h2>Display Code</h2>
      <h4>Output</h4>
      <JsxToNest nest={jsxS} />
      <h4>JSX</h4>
      <pre className="display-text-pre-wrapper">{JsxToNestString}</pre>
      <h4>CSS</h4>
      <pre className="display-text-pre-wrapper">{displayCSS}</pre>
    </div>
  );
}

export default DisplayCode;
