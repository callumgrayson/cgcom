import { useState, useEffect } from "react";
import allTypes from "./allTypes";
import {
  toStringed,
  safeJsonParse,
  safeJsonStringify,
  boolIcon,
} from "./utils.js";
import "./styles.css";

function Stringification() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let toObj = [
      {
        stringified: "JSON Stringified",
        toString: "toString()",
        value: "Value",
        asWritten: "JS Value",
        typeof: "Type Of",
        parsed: "JSON Parsed",
        jsonEquivalence: "JSON Equivalence",
      },
    ];
    allTypes.forEach((item) => {
      const stringed = safeJsonStringify(item.value);
      const parsed = safeJsonParse(stringed);
      const same = item.value === parsed;
      toObj.push({
        ...item,
        stringified: stringed,
        toString: toStringed(item.value),
        parsed: parsed,
        jsonEquivalence: same,
      });
    });

    setList(toObj);
  }, []);

  return (
    <div className="stringification">
      <h3>Stringification</h3>
      <div className="stringification_table_box">
        <table className="stringification_table">
          <tbody>
            {list.map((item, idx) =>
              idx === 0 ? (
                <tr className="stringified_row" key={item.asWritten}>
                  <th className="stringified_cell left">{item.asWritten}</th>
                  <th className="stringified_cell">{item.typeof}</th>
                  <th className="stringified_cell">{item.toString}</th>
                  <th className="stringified_cell">{item.stringified}</th>
                  <th className="stringified_cell">{item.parsed}</th>
                  <th className="stringified_cell">{item.jsonEquivalence}</th>
                </tr>
              ) : (
                <tr className="stringified_row" key={item.asWritten}>
                  <td className="stringified_cell left">{item.asWritten}</td>
                  <td className="stringified_cell">{item.typeof}</td>
                  <td className="stringified_cell">{item.toString}</td>
                  <td className="stringified_cell">{item.stringified}</td>
                  <td className="stringified_cell">
                    {JSON.stringify(item.parsed)}
                  </td>
                  <td className="stringified_cell">
                    {boolIcon(item.jsonEquivalence)}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stringification;
