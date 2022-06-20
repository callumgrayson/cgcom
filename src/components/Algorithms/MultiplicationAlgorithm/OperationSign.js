import React from "react";
import { operationSigns } from "./constants";
import operationSignDisplays from "./OperationSigns";

function OperationSignWrapper({ children }) {
  return <span className="operation_sign_span">{children}</span>;
}
function OperationSign({ sign }) {
  if (!sign || !(sign in operationSigns)) {
    return (
      <div className="cell operation_sign_cell">
        <OperationSignWrapper></OperationSignWrapper>
      </div>
    );
  }

  return (
    <div className="cell operation_sign_cell">
      <OperationSignWrapper>{operationSignDisplays[sign]}</OperationSignWrapper>
    </div>
  );
}

export default OperationSign;
