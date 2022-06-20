import { operationSigns } from "./constants";

export const operationSignDisplays = {
  [operationSigns.multiplication]: (
    <span className="operation_sign_span">&times;</span>
  ),
  [operationSigns.equals]: <span className="operation_sign_span">=</span>,
  [operationSigns.addition]: <span className="operation_sign_span">+</span>,
};

export default operationSignDisplays;
