import "./Cell.css";

function Cell({ digits, highlightCarry, highlightResult }) {
  return (
    <div className={`algorithms_cell`}>
      <div className={`algorithms_cell_carry`}>
        <div
          className={`algorithms_carry  ${highlightCarry ? "highlight" : ""}`}
        >
          <div className={`algorithms_carry_digit`}>{digits[1]}</div>
        </div>
      </div>
      <div className={`algorithms_cell_result`}>
        <div
          className={`algorithms_result ${highlightResult ? "highlight" : ""}`}
        >
          <div className={`algorithms_result_digit`}>{digits[0]}</div>
        </div>
      </div>
    </div>
  );
}

export default Cell;
