let firstNumber = "";
let secondNumber = "";
let operator = "";

function updateScreen(value) {
    const screen = document.getElementById("screen");
    screen.value = value;
}

for (let i = 0; i <= 9; i++){
    document.getElementById(i).addEventListener("click", () => {
    firstNumber += i;
    updateScreen(firstNumber);
    })
}

document.getElementById("clear").addEventListener("click", () => {
     firstNumber = ""; 
     secondNumber = ""; 
     operator = "";     
     updateScreen("0"); 
});
document.getElementById("+").addEventListener("click", () => {
    secondNumber = firstNumber;
    operator = "+";
    updateScreen(operator);
    firstNumber = "";
})
document.getElementById("-").addEventListener("click", () => {
    secondNumber = firstNumber;
    operator = "-";
    updateScreen(operator);
    firstNumber = "";
})
document.getElementById("*").addEventListener("click", () => {
    secondNumber = firstNumber;
    operator = "*";
    updateScreen(operator);
    firstNumber = "";
})
document.getElementById("/").addEventListener("click", () => {
    secondNumber = firstNumber;
    operator = "/";
    updateScreen(operator);
    firstNumber = "";
})
document.getElementById(".").addEventListener("click", () => {
    updateScreen(".")
})
document.getElementById("modulo").addEventListener("click", () => {
    updateScreen("%")
})
document.getElementById("signe").addEventListener("click", () => {
    updateScreen("±")
})
document.getElementById("=").addEventListener("click", () => {
    let result = 0;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } 

    updateScreen(result);   
    firstNumber = result.toString();  
    secondNumber = '';
    operator = '';
});


