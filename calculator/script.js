let result;

let first = "";
let firstDecimal = false;
let firstPercent = false;
let operator = undefined;
let second = "";
let secondDecimal = false;
let secondPercent = false;
let opInProgress = false;

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear");
const posNeg = document.querySelector("#posneg");
const percent = document.querySelector("#percent");
const decimal = document.querySelector("#decimal");
const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

posNeg.addEventListener("click", () => {
    if (opInProgress && second[0] === "-") {
        second = second.split("");
        second.shift();
        second = second.join("");
        updateDisplay(second);
    } else if (opInProgress && second[0] !== "-") {
        second = second.split("")
        second.unshift("-")
        second = second.join("");
        updateDisplay(second);
    } else {
        if (first[0] === "-"){
            first = first.split("");
            first.shift();
            first = first.join("");
            updateDisplay(first);
        } else if (first[0] !== "-") {
            first = first.split("")
            first.unshift("-")
            first = first.join("");
            updateDisplay(first);
        }
    } 
});

percent.addEventListener("click", () => {
    if (opInProgress && !secondPercent) {
        second = String(Number(second) / 100);
        secondPercent = true;
        updateDisplay(second);
    } else if (!opInProgress && !firstPercent) {
        first = String(Number(first) / 100);
        firstPercent = true;
        updateDisplay(first);
    }
});

decimal.addEventListener("click", () => {
    if (opInProgress && secondDecimal) {
        return;
    } else if (opInProgress) {
        second += ".";
        secondDecimal = true;
        updateDisplay(second);
    }

    if (!opInProgress && firstDecimal) {
        return;
    } else if (!opInProgress && !firstDecimal) {
        first += ".";
        firstDecimal = true;
        updateDisplay(first);
    }
});

zeroButton.addEventListener("click", () => {
    if (opInProgress) {
        if (second.length === 1 && second === "0"){
            updateDisplay(second);
            return;
        } else {
            second += "0";
            updateDisplay(second);
        }
    } else {
        if (first.length === 1 && first === "0") {
            updateDisplay(first);
            return;
        } else {
            updateDisplay(first);
            first += "0";
        }
    }
    console.log(first, second);
});

oneButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "1";
        updateDisplay(second);
    } else {
        first += "1";
        updateDisplay(first);
        
    }
    console.log(first,second);
});

twoButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "2";
        updateDisplay(second);
    } else {
        first += "2";
        updateDisplay(first);
    }
    console.log(first,second);
});

threeButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "3";
        updateDisplay(second);
    } else {
        first += "3";
        updateDisplay(first);
    }
    console.log(first, second);
});

fourButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "4";
        updateDisplay(second);
    } else {
        first += "4";
        updateDisplay(first);
    }
    console.log(first, second);
});

fiveButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "5";
        updateDisplay(second);
    } else {
        first += "5";
        updateDisplay(first);
    }
    console.log(first, second);
});

sixButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "6";
        updateDisplay(second);
    } else {
        first += "6";
        updateDisplay(first);
    }
    console.log(first, second);
});

sevenButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "7";
        updateDisplay(second);
    } else {
        first += "7";
        updateDisplay(first);
    }
    console.log(first, second);
});

eightButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "8";
        updateDisplay(second);
    } else {
        first += "8";
        updateDisplay(first);
    }
    console.log(first, second);
});

nineButton.addEventListener("click", () => {
    if (opInProgress) {
        second += "9";
        updateDisplay(second);
    } else {
        first += "9";
        updateDisplay(first);
    }
    console.log(first, second);
});

plus.addEventListener("click", () => {
    if (operator === undefined) {
        operator = "+";
        opInProgress = true;
    } 
    else {
        operate(first, operator, second);
        secondDecimal = false;
        secondPercent = false;
        displayResult();
    }
});

minus.addEventListener("click", () => {
    if (operator === undefined) {
        operator = "-";
        opInProgress = true;
    } 
    else {
        operate(first, operator, second);
        secondDecimal = false;
        secondPercent = false;
        displayResult();
    }
});

times.addEventListener("click", () => {
    if (operator === undefined) {
        operator = "*";
        opInProgress = true;
    } 
    else {
        operate(first, operator, second);
        secondDecimal = false;
        secondPercent = false;
        displayResult();
    }
});

divide.addEventListener("click", () => {
    if (operator === undefined) {
        operator = "/";
        opInProgress = true;
    } 
    else {
        operate(first, operator, second);
        secondDecimal = false;
        secondPercent = false;
        displayResult();
    }
});

equals.addEventListener("click", () => {
    if (first !== "" && second !== ""){
        operate(first, operator, second);
        secondDecimal = false;
        secondPercent = false;
        displayResult();
        console.log(first, second);
    }
    else if (first !== "" && second === "") {

    } else {
        operate(first, operator, first);
        secondDecimal = false;
        secondPercent = false;        
        displayResult();
    }
});

clear.addEventListener("click", () => {
    first = "";
    second = "";
    opInProgress = false;
    firstDecimal = false;
    secondDecimal = false;
    operator = undefined;
    result = undefined;
    const display = document.querySelector(".result");
    display.textContent = "0";
});


//minus.addEventListener("click", () => {operator = "-"; console.log(operator);});
//times.addEventListener("click", () => {operator = "*"; console.log(operator);});
//divide.addEventListener("click", () => {operator = "/"; console.log(operator);});
//equals.addEventListener("click", () => {operator = "="; console.log(operator);});

const operate = (num1, operator, num2) => {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            sub(num1, num2);
            break;
        case "*":
            mul(num1, num2);
            break;
        case "/":
            div(num1, num2);
            break;
        case "=":
            displayResult();
            break;
        default:
            console.log("didn't work");
    }
}

const updateDisplay = (num) => {
    const display = document.querySelector(".result");
    display.textContent = num;
}

const displayResult = () => {
    const display = document.querySelector(".result");
    display.textContent = result;
    console.log(operator);
}

const add = (a,b) => {
    result = Number(a) + Number(b);
    if (result % 1 !== 0) result = result.toFixed(6);
    first = result;
    second = "";
    operator = undefined;
}
const sub = (a,b) => {
    result = Number(a) - Number(b);
    if (result % 1 !== 0) result = result.toFixed(6);
    first = result;
    second = "";
    operator = undefined;
}
const mul = (a,b) => {
    result = Number(a) * Number(b);
    if (result % 1 !== 0) result = result.toFixed(6);
    first = result;
    second = "";
    operator = undefined;
}
const div = (a,b) => {
    if (Number(b) === 0) {
        console.log("its zero.")
        result = "Error, can't divide by zero. Click 'clear' and try again.";
        return;
    }
    result = Number(a) / Number(b);
    if (result % 1 !== 0) result = result.toFixed(6);
    first = result;
    second = "";
    operator = undefined;
}

