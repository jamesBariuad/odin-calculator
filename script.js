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

let displayValue = "";

const display = document.querySelector("#display");

const digits = document.querySelectorAll(".digits");
digits.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
  });
});

// const operators = document.querySelectorAll(".operators")
// operators.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         firstNumber = +display.textContent
//         operator=e.target.id
//         console.log(operator,firstNumber)
//     })
// })

const ac= document.querySelector("#ac")
ac.addEventListener("click",()=>{
    operator=""
    firstNumber=""
    secondNumber=""
    displayValue=""
    display.textContent=0
})

