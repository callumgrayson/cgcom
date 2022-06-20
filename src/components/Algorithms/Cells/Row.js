import React from "react";
import "./Row.css";

function Row({ children, highlight }) {
  return (
    <div className={`algorithms_row`}>
      {children}
      {highlight ? <div className="algorithms_row_highlight"></div> : null}
    </div>
  );
}

export default Row;
