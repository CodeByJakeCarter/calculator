let displayValue = "0";
let primary = null;
let secondary = null;
let operator1 = null;
let operator2 = null;
let result = null;
const buttons = document.querySelectorAll("button");

console.log(buttons);

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`button[data-key='${e.code}']`);
  key.click();
});

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayValue;
  if (displayValue.length > 9) {
    display.innerText = displayValue.substring(0, 9);
  }
}
updateDisplay();

document.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    const button = event.target;
    if (button.classList.contains("number")) {
      inputNumber(button.value);
      updateDisplay();
    } else if (button.classList.contains("operator")) {
      inputOperator(button.value);
    } else if (button.classList.contains("clear")) {
      clearDisplay();
      updateDisplay();
    } else if (button.classList.contains("modulus")) {
      inputModulus(displayValue);
      updateDisplay();
    } else if (button.classList.contains("sign")) {
      inputSign(displayValue);
      updateDisplay();
    } else if (button.classList.contains("dot")) {
      inputDot(button.value);
      updateDisplay();
    } else if (button.classList.contains("equals")) {
      inputEquals();
      updateDisplay();
    }
  }
});

function inputNumber(number) {
  if (operator1 === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = number;
    } else if (displayValue === primary) {
      displayValue = number;
    } else {
      displayValue += number;
    }
  } else {
    if (displayValue === primary) {
      displayValue = number;
    } else {
      displayValue += number;
    }
  }
  updateDisplay();
}

function inputOperator(operator) {
  if (operator1 != null && operator2 === null) {
    operator2 = operator;
    secondary = displayValue;
    result = operate(Number(primary), Number(secondary), operator1);
    displayValue = rounding(result, 15).toString();
    primary = displayValue;
    result = null;
  } else if (operator1 != null && operator2 != null) {
    secondary = displayValue;
    result = operate(Number(primary), Number(secondary), operator2);
    operator2 = operator;
    displayValue = rounding(result, 15).toString();
    primary = displayValue;
    result = null;
  } else {
    operator1 = operator;
    primary = displayValue;
  }
  updateDisplay();
}

function inputEquals() {
  if (operator1 === null) {
    displayValue = displayValue;
  } else if (operator2 != null) {
    secondary = displayValue;
    result = operate(Number(primary), Number(secondary), operator2);
    if (result === "quik mafs") {
      displayValue = "quik mafs";
    } else {
      displayValue = rounding(result, 15).toString();
      primary = displayValue;
      secondary = null;
      operator1 = null;
      operator2 = null;
      result = null;
    }
  } else {
    secondary = displayValue;
    result = operate(Number(primary), Number(secondary), operator1);
    if (result === "quik mafs") {
      displayValue = "quik mafs";
    } else {
      displayValue = rounding(result, 15).toString();
      primary = displayValue;
      secondary = null;
      operator1 = null;
      operator2 = null;
      result = null;
    }
  }
  updateDisplay();
}

function inputDot(dot) {
  if (displayValue === primary || displayValue === secondary) {
    displayValue = "0";
    displayValue += dot;
  } else if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

function inputModulus() {
  displayValue = (Number(displayValue) / 100).toString();
}

function inputSign() {
  displayValue = (Number(displayValue) * -1).toString();
}

function clearDisplay() {
  displayValue = "0";
  primary = null;
  secondary = null;
  operator1 = null;
  operator2 = null;
  result = null;
}

function inputBackspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

function rounding(num, places) {
  return parseFloat(Math.round(num + "e" + places) + "e-" + places);
}

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

const operate = function (primary, secondary, operator) {
  switch (operator) {
    case "*":
      return multiply(primary, secondary);
    case "+":
      return add(primary, secondary);
    case "/":
      if (secondary === 0) {
        return "quik mafs";
      } else {
        return divide(primary, secondary);
      }
    case "-":
      return subtract(primary, secondary);
    default:
      console.error("Unsupported operator:", operator);
      return null;
  }
};
