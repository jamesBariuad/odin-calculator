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
    return "huh";
  }
  return firstNumber / secondNumber;
};

let firstNumber, secondNumber, operator;

const operate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
    case "subtract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
  }
};

let operatorIsclicked = false;

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");

const isOperatorClicked = () => {
  if (operatorIsclicked == true && display.textContent != "") {
    storeCurrentDisplay();
    display.textContent = "";
    operatorIsclicked = false;
  }
};

const displayDigitsClicked = (e) => {
  isOperatorClicked();
  if (display.textContent == 0) {
    display.textContent = "";
  }

  display.textContent += e.target.textContent;
};

digits.forEach((button) => {
  button.addEventListener("click", displayDigitsClicked);
});

let result = undefined;

const storeCurrentDisplay = () => {
  if (!firstNumber) {
    return (firstNumber = +display.textContent);
  }
  if (firstNumber && !secondNumber) {
    return (secondNumber = +display.textContent);
  }
};
const operators = document.querySelectorAll(".operators");

const handleOperatorClick = (e) => {
  operatorIsclicked = true;
  if (!operator) {
    operator = e.target.id;
  }
  if (operator && e.target.classList[1] == "operators") {
    operator = e.target.id;
  }
};
operators.forEach((button) =>
  button.addEventListener("click", (e) => handleOperatorClick(e))
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

const handleEqualsClick = (e) => {
  if (!firstNumber) {
    return;
  }
  if (firstNumber && !secondNumber) {
    storeCurrentDisplay();
  }

  if(result==+display.textContent){
    firstNumber=result
    result=operate(firstNumber,secondNumber,operator) 
    return display.textContent= result
  }
  if (result) {
    firstNumber = result;
    secondNumber = +display.textContent;
    console.log(firstNumber, secondNumber, e.target.id);
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
