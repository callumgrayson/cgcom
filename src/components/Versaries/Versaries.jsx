import { useState } from "react";
import moment from "moment-timezone";
import InputDateTime from "./InputDateTime";
import InputTimezone from "./InputTimezone";
import "./Versaries.css";

function solveEmoment() {
  // console.log("solve E moment");
  // if (false) {
  //   console.log("baseObj", baseObj);
  //   console.log("inDateString", inDateString);
  //   console.log("baseObj", baseObj);
  //   console.log("momentBase", momentBase);
  //   console.log("momentBase.unix()", momentBase.unix());
  //   console.log("momentBase.format(formatFull)", momentBase.format(formatFull));
  //   const valueEyears = 85780560807;
  //   const zBirthEpoch = new Date("2021-02-12").valueOf(); //
  //   console.log("zBirthEpoch", zBirthEpoch);
  //   const zeEpoch = zBirthEpoch + valueEyears;
  //   console.log("zeEpoch", zeEpoch);
  //   const isoZeEpoch = new Date(zeEpoch);
  //   console.log("isoZeEpoch", isoZeEpoch);
  // }
  const formatShort = "YYYY MMM DD";
  const inString = "2020-01-01T00:00:00.001Z";
  const startM = moment(inString).toISOString();
  const startN = new Date(inString).toISOString();
  console.log("startM, startN", startM, startN);

  const eYears = Math.E;
  const convEYearsMs = eYears * 365.2425 * 24 * 60 * 60 * 1000;
  const valueMsOfEyears = 85780560807;
  console.log(
    "convEYearsMs, valueMsOfEyears",
    convEYearsMs,
    valueMsOfEyears,
    convEYearsMs - valueMsOfEyears
  );

  const momAdded = moment(inString).add(valueMsOfEyears, "milliseconds");
  console.log("momAdded", momAdded);
  const momAddedYears = moment(inString).add(Math.E, "years");
  console.log("momAddedYears", momAddedYears);
  const years2 = moment(inString).add(2, "years");
  console.log("years2", years2);
  const yearsPoint71828 = moment(inString).add(Math.E - 2, "years");
  console.log("yearsPoint71828", yearsPoint71828);
  const conv_2YearsMs = (Math.E - 2) * 365.2425 * 24 * 60 * 60 * 1000;
  const yearsp71828ms = moment(inString).add(conv_2YearsMs, "milliseconds");
  console.log("yearsp71828ms", yearsp71828ms);
  const yearSplit1 = moment(inString).add(0.5, "years").add(0.5, "years");
  console.log("yearSplit1", yearSplit1);
  console.log("Math.E", Math.E);
  const momAddedMonths = moment(inString).add(Math.E * 12, "months");
  console.log("momAddedMonths", momAddedMonths);
  console.log("momAddedYears", momAddedYears);
}

// solveEmoment();

const PHI = (Math.sqrt(5) + 1) / 2;

const base10sMap = [
  { unit: "seconds", value: PHI },
  { unit: "seconds", value: Math.E },
  { unit: "seconds", value: Math.PI },
  { unit: "seconds", value: 10000 },
  { unit: "seconds", value: 100000 },
  { unit: "seconds", value: 1000000 },
  { unit: "seconds", value: 10000000 },
  { unit: "seconds", value: 100000000 },
  { unit: "seconds", value: 1000000000 },

  { unit: "minutes", value: PHI },
  { unit: "minutes", value: Math.E },
  { unit: "minutes", value: Math.PI },
  { unit: "minutes", value: 1000 },
  { unit: "minutes", value: 10000 },
  { unit: "minutes", value: 100000 },
  { unit: "minutes", value: 1000000 },
  { unit: "minutes", value: 10000000 },

  { unit: "hours", value: PHI },
  { unit: "hours", value: Math.E },
  { unit: "hours", value: Math.PI },
  { unit: "hours", value: 100 },
  { unit: "hours", value: 1000 },
  { unit: "hours", value: 10000 },
  { unit: "hours", value: 100000 },
  { unit: "hours", value: 1000000 },

  { unit: "days", value: PHI },
  { unit: "days", value: Math.E },
  { unit: "days", value: Math.PI },
  { unit: "days", value: 1 },
  { unit: "days", value: 10 },
  { unit: "days", value: 100 },
  { unit: "days", value: 1000 },
  { unit: "days", value: 10000 },

  { unit: "weeks", value: PHI },
  { unit: "weeks", value: Math.E },
  { unit: "weeks", value: Math.PI },
  { unit: "weeks", value: 1 },
  { unit: "weeks", value: 10 },
  { unit: "weeks", value: 100 },
  { unit: "weeks", value: 1000 },

  { unit: "months", value: PHI },
  { unit: "months", value: Math.E },
  { unit: "months", value: Math.PI },
  { unit: "months", value: 10 },
  { unit: "months", value: 100 },
  { unit: "months", value: 1000 },

  { unit: "years", value: PHI },
  { unit: "years", value: Math.E },
  { unit: "years", value: Math.PI },
];

const zoeBirthDateTime = "2021-02-12T05:47+01:00"; // ISOish string, no ss or Z
const zoeBirthTimezone = "Europe/Paris";
const elliotBirthDateTime = "2023-02-03T01:48+13:00";
const elliotBirthTimezone = "Pacific/Auckland";
const formatFull = "dddd, MMMM Do YYYY, h:mm:ss a";
const formatShort = "YYYY MMM DD";

const userTzGuess = moment.tz.guess();

const getDisplayDates = (inDateString) => {
  const momentBirth = moment(inDateString);
  const baseArray = base10sMap.map((baseObj) => {
    // TODO - use ms instead of years.
    // if (
    //   baseObj.value === Math.E ||
    //   baseObj.value === Math.PI ||
    //   baseObj.value === PHI
    // ) {
    //   console.log("baseObj", baseObj);
    // }
    const momentBase = moment(inDateString).add(baseObj.value, baseObj.unit);

    return {
      ...baseObj,
      valueUnix: momentBase.unix(),
      display: momentBase.format(formatFull),
      short: momentBase.format(formatShort),
      future: momentBase.unix() * 1000 - Date.now() > 0,
      age: momentBase.from(momentBirth, true),
    };
  });

  const sortedDates = baseArray.sort((a, b) => a.valueUnix - b.valueUnix);

  return sortedDates;
};

const initialDate = zoeBirthDateTime;
const initialTz = zoeBirthTimezone;

const DatesBaseTen = () => {
  const [dateTime, setDateTime] = useState(initialDate);
  const [tz, setTz] = useState(initialTz);

  const handleDateTimeChange = (inVal) => {
    const val = inVal.target.value;
    setDateTime(val);
  };
  const handleTzChange = (e) => {
    const { value } = e.target;
    setTz(value);
  };
  const zHandler = () => {
    setDateTime(zoeBirthDateTime);
    setTz(zoeBirthTimezone);
  };
  const eHandler = () => {
    setDateTime(elliotBirthDateTime);
    setTz(elliotBirthTimezone);
  };

  const dateTimeIso = moment.tz(dateTime, tz).toISOString();
  const displayDates = getDisplayDates(dateTimeIso);

  return (
    <>
      <h3>Versaries</h3>
      <InputDateTime value={dateTime} changeHandler={handleDateTimeChange} />
      <InputTimezone value={tz} handler={handleTzChange} />
      <button type="button" onClick={zHandler}>
        Z
      </button>
      <button type="button" onClick={eHandler}>
        E
      </button>
      <br />
      <p>Results displayed in "{userTzGuess}" time.</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Versary Type</th>
              <th>Date and Time</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {displayDates.map((baseObj) => (
              <tr
                key={`${baseObj.value}${baseObj.unit}`}
                style={{ color: `${baseObj.future ? "black" : "lightgray"}` }}
              >
                <td>{baseObj.short}</td>
                <td>
                  {baseObj.value.toLocaleString()} {baseObj.unit}
                </td>
                <td>{baseObj.display}</td>
                <td>{baseObj.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DatesBaseTen;
