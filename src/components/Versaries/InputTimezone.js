import React from "react";
import moment from "moment-timezone";

const favouriteTimezones = [
  "Asia/Singapore",
  "Europe/Amsterdam",
  "Europe/Paris",
  "Pacific/Auckland",
];

const userTzGuess = moment.tz.guess();

function InputTimezone({ handler, value }) {
  return (
    <div className="versaries-input input-timezone">
      <label htmlFor="timezone-select">Timezone</label>
      <select name="timezone-select" value={value} onChange={handler}>
        <optgroup label="Local">
          <option value={userTzGuess} key={userTzGuess}>
            {userTzGuess}
          </option>
        </optgroup>
        <optgroup label="Favourites">
          {favouriteTimezones.map((tz) => (
            <option value={tz} key={tz}>
              {tz}
            </option>
          ))}
        </optgroup>
        <optgroup label="All Timezones">
          {moment.tz.names().map((tz) => (
            <option value={tz} key={tz}>
              {tz}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}

export default InputTimezone;
