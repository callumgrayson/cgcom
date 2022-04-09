import { useReducer, useState } from "react";
import ProjectionLabel from "./ProjectionLabel";
import ProjectionInput from "./ProjectionInput";
import NumberFormat from "react-number-format";
import { calculate } from "./helpers/calculation";
import { getStored, setStored } from "./helpers";

const localStorageKey = "SavingsProjector";
const projectionsInputsList = [
  { name: "initial_amount", label: "Initial Amount", defaultVal: 100000 },
  { name: "monthly", label: "Monthly", defaultVal: 2000 },
  { name: "rate_return", label: "Return Rate %", defaultVal: 5 },
  { name: "rate_inflation", label: "Inflation Rate %", defaultVal: 2 },
  { name: "term_months", label: "Term Months", defaultVal: 384 },
];

const SavingsProjector = () => {
  const [list, setList] = useState([]);

  const init = () => {
    const storedInputs = getStored(localStorageKey);
    if (storedInputs) {
      // console.log("in true: storedInputs", storedInputs);
      return storedInputs;
    } else {
      let initialState = {};
      for (let i of projectionsInputsList) {
        initialState[i.name] = i.defaultVal;
      }
      // console.log("in else: initialState", initialState);
      return initialState;
    }
  };

  const projectionsReducer = (state, action) => {
    const { name, value } = action.data;
    setStored(localStorageKey, {
      ...state,
      [name]: value,
    });
    switch (action.type) {
      case "UPDATE_PROJECTIONS":
        return {
          ...state,
          [name]: value,
        };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(projectionsReducer, {}, init);

  const updateInputVals = (name, value) => {
    // console.log("in updateInputVals: name, value", name, value);
    dispatch({ type: "UPDATE_PROJECTIONS", data: { name, value } });
  };

  const getCalculation = () => {
    const {
      initial_amount,
      monthly,
      rate_return,
      rate_inflation,
      term_months,
    } = state;
    const vals = calculate({
      initial: initial_amount,
      monthly,
      returnRate: rate_return,
      inflationRate: rate_inflation,
      termMonths: term_months,
    });
    setList(vals);
  };

  const getYear = (p) => {
    return (p - 1) % 12 === 0 ? Math.ceil((p + 1) / 12) : null;
  };

  const getFormatted = (val) => (
    <NumberFormat value={val} displayType={"text"} thousandSeparator={true} />
  );

  const calculateReady =
    state.initial_amount &&
    state.initial_amount > 0 &&
    state.rate_return &&
    state.rate_return > 0 &&
    state.term_months &&
    state.term_months > 0;

  return (
    <div className="projections">
      <h3>Savings Projector</h3>
      <div className="table-box">
        <table>
          <tbody>
            {projectionsInputsList.map((p, idx) => (
              <tr key={idx} className="input-pair">
                <td>
                  <ProjectionLabel name={p.name} label={p.label} />
                </td>
                <td>
                  <ProjectionInput
                    name={p.name}
                    value={state[p.name]}
                    handler={updateInputVals}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="calc-box">
          <button onClick={() => getCalculation()} disabled={!calculateReady}>
            Calculate
          </button>
        </div>
      </div>
      <div className="table-list">
        <h3>Values</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Value</th>
              <th>Monthly</th>
              <th>Cumulative</th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, idx) => (
              <tr key={idx}>
                <td>{getYear(val.period + 1)}</td>
                <td>{val.period + 1}</td>
                <td>{getFormatted(val.period_value)}</td>
                <td>{getFormatted(val.monthly)}</td>
                <td>{getFormatted(val.cumlComp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavingsProjector;
