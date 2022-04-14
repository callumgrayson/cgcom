import { useEffect, useState } from "react";
import "./styles.css";

function FlexFills() {
  const [boxes, setBoxes] = useState<number[]>([]);

  function handleRerun() {
    setBoxes([]);
  }

  useEffect(() => {
    const nextBoxes = [...boxes, boxes.length];

    let t: any;

    if (boxes.length < 14) {
      t = setTimeout(() => {
        setBoxes(nextBoxes);
      }, 200);
    }

    return () => clearTimeout(t);
  }, [boxes]);

  return (
    <>
      <button className="rerun" onClick={handleRerun}>
        Rerun
      </button>
      <div className="quarter-split">
        {["normal", "vertical", "reverse-row", "reverse-column"].map(
          (direction) => (
            <div className="quarter-box">
              <p>{direction}</p>
              <div className={`quarter-one ${direction}`}>
                {boxes.map((box, idx) => (
                  <div key={box} className="box">
                    <div className="box-square">{box + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default FlexFills;
