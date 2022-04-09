import "./Cell.css";

function Cell({ cellCount, classNames, handleClick }) {
  return (
    <div
      className={["fib-grid-cell", ...classNames].join(" ")}
      onClick={handleClick}
    >
      {cellCount}
    </div>
  );
}

export default Cell;
