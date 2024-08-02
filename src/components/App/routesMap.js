import * as React from "react";
const ConvertTemp = React.lazy(() => import("../ConvertTemp"));
const FlexFills = React.lazy(() => import("../FlexFills"));
// const DisplayCode = React.lazy(() => import("../DisplayCode"));
const Algorithms = React.lazy(() => import("../Algorithms"));
const TaxCalculator = React.lazy(() =>
  import("../TaxCalculator/TaxCalculator")
);
const Anagrams = React.lazy(() => import("../Anagrams/Anagrams"));
const Make24 = React.lazy(() => import("../Make24/Make24"));
const Logos = React.lazy(() => import("../Logos/Logos"));
const FibGrid = React.lazy(() => import("../FibGrid/FibGrid/FibGrid"));
const Versaries = React.lazy(() => import("../Versaries/Versaries"));
const TimeSince = React.lazy(() => import("../TimeSince/TimeSince"));
const DiceSum = React.lazy(() => import("../Dice/DiceSum"));
const SavingsProjector = React.lazy(() =>
  import("../SavingsProjector/SavingsProjector")
);
const Stringification = React.lazy(() =>
  import("../Stringification/Stringification")
);
const Equality = React.lazy(() => import("../Equality/Equality"));
const TennisBig3 = React.lazy(() => import("../TennisBig3/TennisBig3"));
const Bitwise = React.lazy(() => import("../Bitwise/Bitwise"));
const Dates = React.lazy(() => import("../Dates/Dates"));
const Radices = React.lazy(() => import("../Radices/Radices"));

const routesMap = [
  {
    path: "calculations-by-hand",
    element: Algorithms,
    title: "Calculations By Hand",
  },
  {
    path: "anagrams",
    element: Anagrams,
    title: "Anagrams",
  },
  {
    path: "bitwise",
    element: Bitwise,
    title: "Bitwise",
  },
  {
    path: "convert-temperature",
    element: ConvertTemp,
    title: "Convert Temperature",
  },
  {
    path: "dice-sum",
    element: DiceSum,
    title: "Dice Sum",
  },
  // {
  //   path: "display-code",
  //   element: DisplayCode,
  //   title: "Display Code",
  // },
  {
    path: "fib-grid",
    element: FibGrid,
    title: "FibGrid",
  },
  {
    path: "flex-fills",
    element: FlexFills,
    title: "Flex Fills",
  },
  {
    path: "logos",
    element: Logos,
    title: "Logos",
  },
  {
    path: "make24",
    element: Make24,
    title: "Make 24",
  },
  {
    path: "radices",
    element: Radices,
    title: "Radices",
  },
  {
    path: "savings-projector",
    element: SavingsProjector,
    title: "Savings Projector",
  },
  {
    path: "tax-calculator",
    element: TaxCalculator,
    title: "Tax Calculator",
  },
  {
    path: "tennis-big-3",
    element: TennisBig3,
    title: "Tennis Big 3",
  },
  {
    path: "time-since",
    element: TimeSince,
    title: "Time Since",
  },

  {
    path: "versaries",
    element: Versaries,
    title: "Versaries",
  },
  {
    path: "stringification",
    element: Stringification,
    title: "Stringification",
  },
  {
    path: "equality",
    element: Equality,
    title: "Equality",
  },
  {
    path: "dates",
    element: Dates,
    title: "Dates",
  },
];

export default routesMap;
