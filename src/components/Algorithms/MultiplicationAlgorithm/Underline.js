import React from "react";

function Underline({ show }) {
  return <div className={`underline${show ? " show" : ""}`}></div>;
}

export default Underline;
