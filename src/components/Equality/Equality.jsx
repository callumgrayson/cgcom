import { useEffect, useState } from "react";
import { allTypes } from "./allTypes";
import { equalityModes } from "./constants";
import prepareComparison from "./prepareComparison";
import "./styles.css";

const defaultEqualityMode = Object.keys(equalityModes)[0];

function Equality() {
  const [displayMatrix, setDisplayMatrix] = useState(null);
  const [equalityMode, setEqualityMode] = useState(defaultEqualityMode);
  function handleEqualityMode(e) {
    setEqualityMode(equalityModes[e.target.value]);
  }

  useEffect(() => {
    const matrix = prepareComparison(
      equalityMode?.value || defaultEqualityMode,
      {
        list: allTypes,
        on: "value",
      }
    );
    setDisplayMatrix(matrix);
  }, [equalityMode]);

  return (
    <div className="equality">
      <h3>Equality</h3>
      {/* <p>{equalityMode.displayName}</p> */}
      <div className="equality_mode">
        <label htmlFor="equality_mode">Equality Mode</label>

        <select
          name="equality_mode"
          id="equality_mode"
          onChange={handleEqualityMode}
        >
          {Object.values(equalityModes).map((item) => (
            <option value={item.value} key={item.value}>
              {item.displayName}
            </option>
          ))}
        </select>
      </div>
      <table className="equality_table">
        <tbody>
          <tr>
            <th></th>
            {displayMatrix &&
              displayMatrix.map((row) => <th>{row[0].row.asWritten}</th>)}
          </tr>
          {displayMatrix &&
            displayMatrix.map((row) => (
              <tr>
                <th>{row[0].row.asWritten}</th>
                {row.map((cell) => (
                  <td
                    className={`cell ${cell.areEqual ? "true" : "false"}`}
                  ></td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(displayMatrix, null, 2)}</pre> */}

      <h3>Key Points</h3>
      <ul>
        <li>
          Avoid double equals. Predictability is very low unless one memorizes
          all its workings.
        </li>
        <li>
          Objects like object literals and arrays are never equal with
          themselves unless they reference the same memory block.
        </li>
        <li>
          Triple equals is sufficient for most comparisons except
          differentiating +0 and -0, or comparing <var>NaN</var>s.
        </li>
        <li>
          Object.is() is useful to differentiate between +0 and -0, AND to
          assert the equivalence of <var>NaN</var>s.
        </li>
      </ul>

      <h3>Comparing Objects</h3>
      <p>
        When I think of comparing two objects I probably want to know if they
        contain the same keys and values. This would require using a function
        that does not come with Javascript. It would need to iterate through all
        levels comparing the keys and values with an appropriate comparison
        function.
      </p>
    </div>
  );
}

export default Equality;
