// c2

function calcSumOfTwoNumbers(a, b) {
  return a + b;
}

function chooseRandomPair(a, b) {
  return [a, b][Math.floor(Math.random() * 2)];
}

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomHexColor());
