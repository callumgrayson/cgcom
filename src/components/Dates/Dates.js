import { useState } from "react";
import moment from "moment-timezone";

const zonesList = Intl.supportedValuesOf("timeZone");

const abbrs = zonesList.map((z) => {
  return [z, moment.tz(z).format("z")];
});

const abbrsGroups = getZoneGroups(abbrs);
const abbrsMap = Array.from(abbrsGroups, ([key, value]) => [key, value]).sort(
  sortAbbreviations
);

function Dates() {
  const [datetimeLocal, setDatetimeLocal] = useState("2023-02-17T04:00:00.000");
  const [abbreviation, setAbbreviation] = useState(0); // index of selected value

  function handleDatetimeLocalChange(e) {
    const { value } = e.target;
    setDatetimeLocal(value);
  }

  function handleAbbreviationChange(e) {
    const { value } = e.target;
    setAbbreviation(value); // sets the index of the abbreviation in the abbrsMap array
  }

  const supportedValues = [
    [`Intl.supportedValuesOf('calendar')`, Intl.supportedValuesOf("calendar")],
    [
      `Intl.supportedValuesOf('collation')`,
      Intl.supportedValuesOf("collation"),
    ],
    [`Intl.supportedValuesOf('currency')`, Intl.supportedValuesOf("currency")],
    [
      `Intl.supportedValuesOf('numberingSystem')`,
      Intl.supportedValuesOf("numberingSystem"),
    ],
    [`Intl.supportedValuesOf('timeZone')`, Intl.supportedValuesOf("timeZone")],
    [`Intl.supportedValuesOf('unit')`, Intl.supportedValuesOf("unit")],
  ];

  const dateNow = new Date();

  return (
    <div>
      <h1>Dates</h1>
      <h2>Formats</h2>
      <div>
        <p>
          <code>const date = new Date()</code>
        </p>
        <p>
          <code>date.toString()</code> : {dateNow.toString()}
        </p>
        <p>
          <code>date.toISOString()</code> : {dateNow.toISOString()}
        </p>
        <p>
          <code>date.toUTCString()</code> : {dateNow.toUTCString()}
        </p>
        <p>
          <code>date.toDateString()</code> : {dateNow.toDateString()}
        </p>
        <p>
          <code>date.toLocaleString()</code> : {dateNow.toLocaleString()}
        </p>
        <p>
          <code>date.toLocaleDateString()</code> :{" "}
          {dateNow.toLocaleDateString()}
        </p>
        <p>
          <code>date.toLocaleTimeString()</code> :{" "}
          {dateNow.toLocaleTimeString()}
        </p>
        <p>
          <code>date.getTimezoneOffset()</code> : {dateNow.getTimezoneOffset()}
        </p>

        <h2>Intl</h2>
        <div>
          <p>
            <code>{`new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date))`}</code>{" "}
            :{" "}
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "full",
              timeStyle: "long",
              timeZone: "Australia/Sydney",
            }).format(dateNow)}
          </p>
          {supportedValues.map((supportedItem) => (
            <p key={supportedItem}>
              <code>{supportedItem[0]}</code> :{" "}
              <select>
                {supportedItem[1].map((v) => (
                  <option value={v} key={v}>
                    {v}
                  </option>
                ))}
              </select>
            </p>
          ))}
        </div>
        <div>
          <h2>Input datetime-local</h2>
          <p>Value output is in the format: yyyy-mm-ddThh:mm</p>
          <input
            type="datetime-local"
            onChange={handleDatetimeLocalChange}
            value={datetimeLocal}
          />
          <p>{datetimeLocal}</p>
          <p>
            It accepts a value in the format of an ISO string without the "Z".
          </p>
          <p>
            <code>date.toISOString()</code> :{" "}
            {new Date(datetimeLocal).toISOString()}
          </p>
        </div>
        <div>
          <h2>Timezones</h2>
          <div>
            <select onChange={handleAbbreviationChange}>
              {abbrsMap.map((abbrvn, abIdx) => (
                <option value={abIdx} key={abbrvn[0]}>
                  {abbrvn[0]}
                </option>
              ))}
            </select>
            <select>
              {abbrsMap[abbreviation]?.[1].map((tz) => (
                <option value={tz} key={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dates;

function getZoneGroups(zonesArray) {
  const groups = new Map();

  for (const [zone, timeCode] of zonesArray) {
    if (groups.has(timeCode)) {
      groups.set(timeCode, [...groups.get(timeCode), zone]);
    } else {
      groups.set(timeCode, [zone]);
    }
  }

  return groups;
}

function sortAbbreviations(a, b) {
  const aV = a[0];
  const bV = b[0];
  const aInt = parseInt(aV);
  const bInt = parseInt(bV);
  const aIsNum = !isNaN(aInt);
  const bIsNum = !isNaN(bInt);

  if (aIsNum && !bIsNum) {
    return 1;
  }

  if (!aIsNum && bIsNum) {
    return -1;
  }

  if (aIsNum && bIsNum) {
    return aInt === bInt ? 0 : aInt > bInt ? 1 : -1;
  }

  return aV > bV ? 1 : -1;
}
