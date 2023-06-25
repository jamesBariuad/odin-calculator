const add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const subtract = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return (display.textContent =
      "dividing by zero broke the calculator! AC to reset");
  }
  return firstNumber / secondNumber;
};

let firstNumber, secondNumber, operator;

const operate = (firstNumber, secondNumber, operator) => {
  waitingForSecondNumber = false;
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
};

let operatorIsclicked = false;

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");

const clearDisplayAfterOperatorClick = () => {
  if (operatorIsclicked && display.textContent != "") {
    storeCurrentDisplay();
    display.textContent = "";
    operatorIsclicked = false;
  }
};

const displayDigitsClicked = (digit) => {
  clearDisplayAfterOperatorClick();

  if (display.textContent != "0") {
    return (display.textContent += digit);
  }

  if (display.textContent == 0 && digit != 0) {
    return (display.textContent = digit);
  }
};

digits.forEach((button) => {
  button.addEventListener("click", (e) =>
    displayDigitsClicked(e.target.textContent)
  );
});

let result = undefined;

const storeCurrentDisplay = () => {
  if (!firstNumber) {
    return (firstNumber = +display.textContent), "1st";
  }
  if (firstNumber && !secondNumber) {
    return (secondNumber = +display.textContent);
  }
};
const operators = document.querySelectorAll(".operators");
let waitingForSecondNumber = false;
const handleOperatorClick = (operation) => {
  operatorIsclicked = true;
  waitingForSecondNumber = true;
  if (!result) {
    handleEqualsClick();
  }
  if (!operator) {
    return (operator = operation);
  }

  if (result && display.textContent != result) {
    firstNumber = result;
    secondNumber = +display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    operator = operation;
    return (display.textContent = result);
  }
  if (operator) {
    return (operator = operation);
  }
};
operators.forEach((button) =>
  button.addEventListener("click", (e) => handleOperatorClick(e.target.id))
);

const ac = document.querySelector("#ac");
const clearAll = () => {
  operator = undefined;
  display.textContent = 0;
  firstNumber = undefined;
  secondNumber = undefined;
  result = undefined;
};
ac.addEventListener("click", () => clearAll());

const equals = document.querySelector("#equals");

const handleEqualsClick = () => {
  if (!firstNumber) {
    return;
  }
  if (firstNumber && !secondNumber) {
    storeCurrentDisplay();
  }

  if (result == +display.textContent) {
    firstNumber = result;
    result = operate(firstNumber, secondNumber, operator);
    return (display.textContent = result);
  }
  if (result) {
    firstNumber = result;
    secondNumber = +display.textContent;
    result = operate(firstNumber, secondNumber, operator);
    return (display.textContent = result);
  }

  if ((firstNumber, secondNumber, operator)) {
    result = operate(firstNumber, secondNumber, operator);
    return (display.textContent = result);
  }
};
equals.addEventListener("click", (e) => handleEqualsClick(e));

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "black";
  });
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "peachpuff";
  });
});

const decimal = document.querySelector("#decimal");
const handleDecimalClick = () => {
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent += ".";
};
decimal.addEventListener("click", handleDecimalClick);

const undoButton = document.querySelector("#undo");
const handleUndoClick = () => {
  let undoDigits = display.textContent.slice(0, -1);

  if (undoDigits.length == 0) {
    return (display.textContent = "0");
  }

  if (result && waitingForSecondNumber == false) {
    result = +undoDigits;
  }
  if (waitingForSecondNumber) {
    secondNumber = display.textContent;
  }

  return (display.textContent = undoDigits);
};
undoButton.addEventListener("click", handleUndoClick);

document.addEventListener("keydown", (e) => handleKeyboardInput(e));

const handleKeyboardInput = (e) => {
  if (e.key >= 0 && e.key <= 9) {
    return displayDigitsClicked(e.key);
  }
  if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    return handleOperatorClick(e.key);
  }
  if (e.key == "=" || e.key == "Enter") {
    return handleEqualsClick();
  }
  if (e.key == ".") {
    return handleDecimalClick();
  }
  if (e.key == "Backspace") {
    return handleUndoClick();
  }
};
