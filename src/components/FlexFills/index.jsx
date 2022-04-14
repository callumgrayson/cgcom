import { useEffect, useState } from "react";
import CodeModal from "./CodeModal";
import "./styles.css";

// eslint-disable-next-line
import cssString from "!css-loader!./styles.css";

const cssMap = [
  "flex-row",
  "flex-column",
  "flex-row-reverse",
  "flex-column-reverse",
];

function trimLoadedCSS(argString, idx) {
  const marker = `/* ##${idx} */`;
  const cutStartIndex = argString.indexOf(marker) + 10;
  const cutEndIndex = argString.indexOf(marker, cutStartIndex + 1);
  return argString.slice(cutStartIndex, cutEndIndex).trim();
}

const getCSS = (inCSSString) => {
  let newArray = [];

  for (let i = 0; i < cssMap.length; i++) {
    const element = trimLoadedCSS(inCSSString, i);

    newArray.push(element);
  }

  return newArray;
};

function FlexFills() {
  const [showCode, setShowCode] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [cssDisplay, setCssDisplay] = useState([]);

  function handleRerun() {
    setBoxes([]);
  }

  useEffect(() => {
    const nextBoxes = [...boxes, boxes.length];

    let t;

    if (boxes.length < 14) {
      t = setTimeout(() => {
        setBoxes(nextBoxes);
      }, 200);
    }

    return () => clearTimeout(t);
  }, [boxes]);

  useEffect(() => {
    const cssList = getCSS(cssString.toString()).map((item) => (
      <pre>{item}</pre>
    ));
    setCssDisplay(cssList);
  }, []);

  return (
    <div className="flex-fills">
      <button className="rerun" onClick={handleRerun}>
        Rerun
      </button>
      <button
        className={`flex-fills-show-button ${showCode ? "show" : ""}`}
        onClick={() => setShowCode((v) => !v)}
      >
        {showCode ? "Hide" : "Show"} Code
      </button>

      <div className="quarter-split">
        {cssMap.map((direction, idx) => (
          <div key={direction} className="quarter-box">
            <p>{direction}</p>
            <div className={direction}>
              {boxes.map((box, idx) => (
                <div key={box} className="box">
                  <div className="box-square">{box + 1}</div>
                </div>
              ))}
            </div>
            <CodeModal content={cssDisplay[idx]} show={showCode} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlexFills;
