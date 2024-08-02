import React from "react";
import "./Radices.css";

function Radices() {
  const values = (function () {
    const n1 = 0;
    const n2 = 1296;

    const out = [];

    for (let i = n1; i < n2; i++) {
      const row = [];
      for (let j = 2; j <= 36; j++) {
        row.push(i.toString(j));
      }
      out.push(row);
    }
    return out;
  })();
  return (
    <div>
      <h1>Radices</h1>
      <table className="radices-table">
        <tbody>
          <tr key="" className="header-row">
            {values[0].map((cell, cellIndex) => {
              return (
                <th key={cellIndex} className="th-cell radices-cell">
                  {cellIndex + 2}
                </th>
              );
            })}
          </tr>
          {values.map((row, rowIndex) => {
            return (
              <tr key={rowIndex} className="radices-row">
                {row.map((cell, cellIndex) => {
                  return (
                    <td
                      key={cellIndex}
                      className={`radices-cell ${
                        cellIndex === 8 ? "base-10-col" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Radices;
