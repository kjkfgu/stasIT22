let age = parseInt(prompt("Будь ласка, введи свій вік:"));

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age <= 65) {
    alert("Ласкаво просимо! У вас буде все!");
} else {
    alert("Ти старий!");
}


let n = parseInt(prompt("Введи число n:"));

if (!isNaN(n) && n >= 2) {
    console.log("Парні числа від 2 до " + n + ":");
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
} else {
    console.log("Введи число більше або рівне 2.");
}


let n1 = parseInt(prompt("Введи число n1:"));

if (!isNaN(n1) && n1 >= 0) {
    let factorial = 1;
    let i = 1;

    while (i <= n1) {
        factorial *= i;
        i++;
    }
    console.log(`Факторіал числа ${n1} дорівнює ${factorial}`);
} else {
    console.log("Введи невідємне ціле число.");
}


let a = parseFloat(prompt("Введи перше число (a):"));
let b = parseFloat(prompt("Введи друге число (b):"));
let operation = prompt("Вибери операцію (+, -, *, /):");

let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "На нуль не можна ділити!";
        }
        break;
    default:
        result = "Невірна операція!";
        break;
}

alert("Результат: " + result);


const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = parseInt(prompt("Вгадайте число від 1 до 100:"));

    if (isNaN(guess)) {
        alert("Число треба!!!!!!!!!!!");
    } else if (guess < secretNumber) {
        alert("Загадане число більше.");
    } else if (guess > secretNumber) {
        alert("Загадане число менше.");
    } else {
        alert("Ти вгадав(-ла) число!");
    }
} while (guess !== secretNumber);