const add = function (...nums) {
  return nums.reduce((total, currentItem) => total + currentItem, 0);
};

const subtract = function (...nums) {
  return nums.reduce((total, currentItem) => total - currentItem, 2 * nums[0]);
};

const multiply = function (nums) {
  return nums.reduce((total, currentItem) => total * currentItem, 1);
};
