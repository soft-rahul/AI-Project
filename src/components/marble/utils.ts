export const calculatePercentageChange = (
  lastYearData: number,
  currentYearData: number
) => {
  let percentageChange =
    ((currentYearData - lastYearData) / Math.abs(lastYearData)) * 100;

  return percentageChange;
};
