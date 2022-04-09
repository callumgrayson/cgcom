export const calculate = (params) => {
  const { initial, monthly, returnRate, inflationRate, termMonths } = params
  // console.log("in calculate")
  // console.log(
  //   "initial, monthly, rate, inflationRate, termMonths",
  //   initial,
  //   monthly,
  //   returnRate,
  //   inflationRate,
  //   termMonths,
  //   typeof initial
  // )
  let vals = []
  let lastVal = initial
  for (let i = 0; i < termMonths; i++) {
    const monthVal = monthly * (1 + inflationRate / 100) ** Math.floor(i / 12)
    const val = initial * (1 + returnRate / 12 / 100) ** i
    const valWithMonthly = (lastVal + monthVal) * (1 + returnRate / 12 / 100)
    lastVal = valWithMonthly
    vals.push({
      period: i,
      period_value: Number(val.toFixed(0)),
      monthly: Number(monthVal.toFixed(0)),
      cumlComp: Number(valWithMonthly.toFixed(0)),
    })
  }
  return vals
}
