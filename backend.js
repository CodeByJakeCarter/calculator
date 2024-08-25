const add = function (...nums) {
  return nums.reduce((total, currentItem) => total + currentItem, 0);
};
