import { useState } from "react";
import { ProgressSlider, ProgressButtons } from "../../Sliders";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Underline from "./Underline";
import Working from "./Working";
import AnswerRows from "./AnswerRows";
import { operationSigns } from "./constants";
import operationSignDisplays from "./OperationSigns";
import { creatorMultiplication } from "./creators";
import "./MutliplicationAlgorithm.css";

const sliderRange = {
  from: 0,
};

const max = "999999";
const min = "1";

const [a, b] = ["876", "159"];
const newRecord = creatorMultiplication(Number(a), Number(b));

function MutliplicationAlgorithm() {
  const [multiplicands, setMultiplicands] = useState([a, b]);
  const [step, setStep] = useState(0);
  const [errorDisplay, setErrorDisplay] = useState(null);
  const [record, setRecord] = useState(newRecord);
  const metadata = record ? record.metadata : {};
  const problemSteps = record ? record.steps : {};

  // Abstract handleCreate to useCreate

  function handleCreate() {
    try {
      const [n0, n1] = [Number(multiplicands[0]), Number(multiplicands[1])];
      if (n0 > 0 && n1 > 0) {
        const created = creatorMultiplication(n0, n1);
        if (created) {
          setRecord(created);
          setErrorDisplay(null);
          setStep(0);
        }
      } else {
        throw new Error("Input 2 integers greater than zero.");
      }
    } catch (error) {
      console.log("error - handleCreate()", error.message);
      setErrorDisplay(error.message);
    }
  }

  // Abstract handleChangeMultiplicands to useProblem

  function handleChangeMultiplicands(e, inputIdx) {
    const [a, b] = multiplicands;
    const newValue = Number(e.target.value);
    if (newValue > max) {
      setErrorDisplay("Numbers can be no more than 6 digits");
      return;
    } else {
      // console.log("default", newValue);
      const newMultiplicands = [a, b];
      newMultiplicands[inputIdx] = e.target.value;
      setMultiplicands(newMultiplicands);
      setErrorDisplay(null);
    }
  }

  return (
    <div className="multiplication_algorithm">
      <div className="info_box">
        <h3>Mutliplication Algorithm By Hand</h3>

        <div>
          <p style={{ color: "red", fontWeight: "bold" }}>{errorDisplay}</p>
        </div>
        <div className="algorithm_inputs_box">
          <div className="input_box">
            <input
              type="number"
              value={multiplicands[0]}
              onChange={(e) => handleChangeMultiplicands(e, 0)}
              max={max}
              min={min}
            />
          </div>
          <div className="sign_box">
            {operationSignDisplays[metadata.problem[2]]}
          </div>
          <div className="input_box">
            <input
              type="number"
              value={multiplicands[1]}
              onChange={(e) => handleChangeMultiplicands(e, 1)}
              max={max}
              min={min}
            />
          </div>
        </div>
        <div className="create_steps_button_box">
          <button className="create_steps_button" onClick={handleCreate}>
            Create Steps
          </button>
        </div>
        <h4>
          {metadata ? (
            <>
              <span>{metadata.problem[0]}</span>
              <span>{operationSignDisplays[metadata.problem[2]]}</span>
              <span>{metadata.problem[1]}</span>
              <span>{operationSignDisplays[operationSigns.equals]}</span>
              <span>{metadata.problem[3]}</span>
            </>
          ) : null}
        </h4>
      </div>

      <div className="algorithm_working_box">
        {Number(step) === 0 ||
        Number(step) === problemSteps.length - 1 ? null : (
          <>
            <div className="working_box_area">
              <h4>Working</h4>
              <Working
                rows={problemSteps[step].working}
                operation={problemSteps[step].operation_sign}
                highlight={problemSteps[step].highlight}
              />
            </div>
          </>
        )}
      </div>

      <div className="algorithm_positioner_box">
        <div className="algorithm_positioner_grouper">
          <div className="algorithm_problem_box">
            <TopRow
              n={metadata.top}
              highlight={problemSteps[step].highlight}
              digitsArray={metadata.topArray}
            />
            <BottomRow
              operationSign={metadata.operation_sign}
              n={metadata.bottom}
              digitsArray={metadata.bottomArray}
              operationSignColumn={metadata.operation_sign_column}
              highlight={problemSteps[step].highlight}
            />
            <Underline show={metadata.underline} />
            <AnswerRows
              answerRows={problemSteps[step].answer_rows}
              highlight={problemSteps[step].highlight}
              highlightKey="a"
            />
            <Underline show={problemSteps[step].underline_addition} />
            <AnswerRows
              answerRows={problemSteps[step].answer_rows_sum}
              highlight={problemSteps[step].highlight}
              highlightKey="s"
            />
          </div>
        </div>
      </div>
      <div className="progress_box">
        <div className="progress_buttons_box">
          <ProgressButtons
            step={step}
            max={problemSteps.length - 1}
            handler={setStep}
            counterValue={Number(step)}
          />
        </div>
        <div className="slider_box">
          <ProgressSlider
            step={step}
            handler={setStep}
            from={sliderRange.from}
            to={problemSteps.length - 1}
          />
        </div>
      </div>
    </div>
  );
}

export default MutliplicationAlgorithm;
