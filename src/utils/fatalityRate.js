export const calculateFatalityRate = (totalDeaths, totalConfirmed) =>
  ((totalDeaths / totalConfirmed) * 100).toFixed(2)
