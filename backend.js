const add = function (...nums) {
  return nums.reduce((total, currentItem) => total + currentItem, 0);
};

const subtract = function (...nums) {
  return nums.reduce((total, currentItem) => total - currentItem, 2 * nums[0]);
};

const multiply = function (...nums) {
  return nums.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function (num1, num2) {
  const array = [];
  for (let i = num2; i > 0; i--) {
    array.push(num1);
  }
  return array.reduce((total, currentItem) => total * currentItem, 1);
};

const divide = function (...nums) {
  return nums.reduce((total, currentItem) => total / currentItem);
};

const primary = "";
const secondary = "";
const operator = "";

const operate = function (primary, secondary, operator) {
  switch (operator) {
    case "*":
      return multiply(primary, secondary);
    case "+":
      return add(primary, secondary);
    case "/":
      return divide(primary, secondary);
    case "-":
      return subtract(primary, secondary);
  }
};
