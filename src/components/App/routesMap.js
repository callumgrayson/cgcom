import * as React from "react";
const ConvertTemp = React.lazy(() => import("../ConvertTemp"));
const FlexFills = React.lazy(() => import("../FlexFills"));
const DisplayCode = React.lazy(() => import("../DisplayCode"));
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

const routesMap = [
  {
    path: "anagrams",
    element: Anagrams,
    title: "Anagrams",
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
  {
    path: "display-code",
    element: DisplayCode,
    title: "Display Code",
  },
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
];

export default routesMap;
