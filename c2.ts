function calcSumOfTwoNumbers(a, b) {
  if (a === b) return a;
  {
  }
  return a + b;
}

function calcDifferenceInDaysBetweenTwoDays(a: Date, b: Date) {
  return Math.abs(a.getTime() - b.getTime()) / (1000 * 3600 * 24);
}

console.log(
  calcDifferenceInDaysBetweenTwoDays(new Date(2020, 1, 1), new Date(2021, 1, 1))
);
