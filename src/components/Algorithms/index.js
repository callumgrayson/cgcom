import { useState } from "react";
import MultiplicationAlgorithm from "./MultiplicationAlgorithm/MutliplicationAlgorithm";
import AdditionAlgorithm from "./AdditionAlgorithm/AdditionAlgorithm";
import SquareRootAlgorithm from "./SquareRootAlgorithm/SquareRootAlgorithm";
import Cells from "./Cells/Cells";
import "./Algorithms.css";

const viewMap = {
  MultiplicationAlgorithm: MultiplicationAlgorithm,
  AdditionAlgorithm: AdditionAlgorithm,
  SquareRootAlgorithm: SquareRootAlgorithm,
  Cells: Cells,
};

// function Options({ options, setter }) {
//   return (
//     <div className="algorithms_options">
//       {Object.keys(options).map((key, idx) => (
//         <button key={key} onClick={() => setter(key)}>
//           {key}
//         </button>
//       ))}
//     </div>
//   );
// }

function Algorithms() {
  const [
    algorithmType,
    // setAlgorithmType
  ] = useState("MultiplicationAlgorithm");
  const C = viewMap[algorithmType];
  return (
    <div className="algorithms">
      {/* <Options options={viewMap} setter={setAlgorithmType} /> */}
      <C />
    </div>
  );
}

export default Algorithms;
