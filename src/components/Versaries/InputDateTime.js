import React from "react";

const InputDateTime = ({ value, changeHandler }) => {
  return (
    <div>
      <input type="datetime-local" value={value} onChange={changeHandler} />
    </div>
  );
};

export default InputDateTime;
