import { useRef, useState, useEffect } from "react";
import moment from "moment-timezone";
import "./TimeSince.css";

const zBirthDateTime = "2021-02-12T05:47+01:00";
const cBirthDateTime = "1981-08-09T04:00+12:00";
const lBirthDateTime = "1987-03-11T05:00+01:00";
const eBirthDateTime = "2023-02-03T01:48+13:00";

const birthMomentMap = {
  c: () => moment(cBirthDateTime),
  l: () => moment(lBirthDateTime),
  z: () => moment(zBirthDateTime),
  e: () => moment(eBirthDateTime),
  now: () => moment(new Date().toISOString()),
};

const personMap = {
  c: "C",
  l: "L",
  z: "Z",
  e: "E",
  now: "Now",
};

const delay = 166;

const stopwatchCallback = ({ now, dateFrom }) => {
  const nowMoment = moment(now);

  const diffYears = nowMoment.diff(dateFrom, "years");
  const laterYears = moment(dateFrom).add(diffYears, "years");

  const diffMonths = nowMoment.diff(laterYears, "months");
  const laterMonths = moment(laterYears).add(diffMonths, "months");

  const diffWeeks = nowMoment.diff(laterMonths, "weeks");
  const laterWeeks = moment(laterMonths).add(diffWeeks, "weeks");

  const diffDays = nowMoment.diff(laterWeeks, "days");
  const laterDays = moment(laterWeeks).add(diffDays, "days");

  const diffHours = nowMoment.diff(laterDays, "hours");
  const laterHours = moment(laterDays).add(diffHours, "hours");

  const diffMinutes = nowMoment.diff(laterHours, "minutes");
  const laterMinutes = moment(laterHours).add(diffMinutes, "minutes");

  const diffSeconds = nowMoment.diff(laterMinutes, "seconds");

  const diffAsSeconds = nowMoment.diff(dateFrom, "seconds");
  const diffAsMinutes = nowMoment.diff(dateFrom, "minutes", true);
  const diffAsHours = nowMoment.diff(dateFrom, "hours", true);
  const diffAsDays = nowMoment.diff(dateFrom, "days", true);
  const diffAsWeeks = nowMoment.diff(dateFrom, "weeks", true);
  const diffAsMonths = nowMoment.diff(dateFrom, "months", true);
  const diffAsYears = nowMoment.diff(dateFrom, "years", true);

  return {
    split: `${diffYears} years, ${diffMonths} months, ${diffWeeks} weeks, ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`,
    seconds: diffAsSeconds.toLocaleString(),
    minutes: diffAsMinutes.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    hours: diffAsHours.toLocaleString(undefined, {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }),
    days: diffAsDays.toLocaleString(undefined, {
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
    }),
    weeks: diffAsWeeks.toLocaleString(undefined, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }),
    months: diffAsMonths.toLocaleString(undefined, {
      minimumFractionDigits: 7,
      maximumFractionDigits: 7,
    }),
    years: diffAsYears.toLocaleString(undefined, {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    }),
  };
};

const initialPerson = "z";

const StopwatchDisplay = () => {
  const [person, setPerson] = useState(personMap[initialPerson]);
  const [dateFrom, setDateFrom] = useState(birthMomentMap[initialPerson]());

  // const timeDisplay = useRef(null)
  const siRef = useRef(null); // Holds setInterval ref
  const splitRef = useRef(null);
  const secondsRef = useRef(null);
  const minutesRef = useRef(null);
  const hoursRef = useRef(null);
  const daysRef = useRef(null);
  const weeksRef = useRef(null);
  const monthsRef = useRef(null);
  const yearsRef = useRef(null);

  const handleDateChange = (name) => {
    setPerson(personMap[name]);
    setDateFrom(birthMomentMap[name]());
  };
  const handleInputDateChange = (e) => {
    const date = e.target.value;
    const m = moment(date);
    setDateFrom(m);
    setPerson("You");
  };

  useEffect(() => {
    if (!dateFrom) return;

    function step() {
      const valuesObj = stopwatchCallback({ now: Date.now(), dateFrom });
      splitRef.current.innerText = valuesObj.split;
      secondsRef.current.innerText = valuesObj.seconds;
      minutesRef.current.innerText = valuesObj.minutes;
      hoursRef.current.innerText = valuesObj.hours;
      daysRef.current.innerText = valuesObj.days;
      weeksRef.current.innerText = valuesObj.weeks;
      monthsRef.current.innerText = valuesObj.months;
      yearsRef.current.innerText = valuesObj.years;
    }

    siRef.current = setInterval(step, delay);

    return () => {
      clearInterval(siRef.current);
    };
  }, [dateFrom]);

  return (
    <div className="time-since">
      <h3>Time Since</h3>
      <div className="time-since-details">
        <p>Time for {person}</p>
        <p>Local: {Boolean(dateFrom) ? dateFrom.toLocaleString() : " "}</p>
        <p>UTC: {Boolean(dateFrom) ? moment(dateFrom).utc().toString() : ""}</p>
      </div>
      <div>
        {Object.keys(personMap).map((personKey) => (
          <button
            key={personKey}
            type="button"
            onClick={() => {
              handleDateChange(personKey);
            }}
            className={`time-since-person-button ${
              person === personMap[personKey] ? "show" : ""
            }`}
          >
            {personMap[personKey]}
          </button>
        ))}
      </div>
      <div>
        <br />
        <input type="datetime-local" onChange={handleInputDateChange} />
        <br />
        <br />

        <div>
          <div ref={splitRef}></div>
          <br />
          <div>
            <table className="time-since-table">
              <tbody>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={yearsRef}></span>
                      <span className="hidden"></span>
                    </p>
                  </td>
                  <td>Years</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={monthsRef}></span>
                      <span className="hidden">a</span>
                    </p>
                  </td>
                  <td>Months</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={weeksRef}></span>
                      <span className="hidden">aa</span>
                    </p>
                  </td>
                  <td>Weeks</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={daysRef}></span>
                      <span className="hidden">aaa</span>
                    </p>
                  </td>
                  <td>Days</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={hoursRef}></span>
                      <span className="hidden">aaaa</span>
                    </p>
                  </td>
                  <td>Hours</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={minutesRef}></span>
                      <span className="hidden">aaaaaa</span>
                    </p>
                  </td>
                  <td>Minutes</td>
                </tr>
                <tr>
                  <td>
                    <p className="time-since-styles">
                      <span ref={secondsRef}></span>
                      <span className="hidden">aaaaaaaaa</span>
                    </p>
                  </td>
                  <td>Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopwatchDisplay;
