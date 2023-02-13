const InputDateTime = ({ value, changeHandler }) => {

  const safeValue = dateAsIsoWithoutZ(value);


  return (
    <div className="versaries-input input-datetime">
      <label htmlFor="datetime">Date & Time</label>
      <input
        name="datetime"
        type="datetime-local"
        value={safeValue}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputDateTime;

function dateAsIsoWithoutZ(dateish) {
  if (typeof dateish === "string") {
    const dateObj = new Date(dateish);
    const isValid = !isNaN(dateObj);

    if (isValid) {
      // return dateObj.toISOString().substring(0, 16);
      return dateish.substring(0, 16);
    }
  }

  if (typeof dateish === "object" && dateish instanceof Date) {
    return dateish.toISOString().substring(0, 16);
  }
}
