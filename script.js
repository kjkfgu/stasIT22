let chislo = 17;
let float = 27.53;
let slovo = "zieg heil";
let pravda = true;

console.log("Початкові типи:");
console.log("chislo:", typeof chislo);
console.log("float:", typeof float);
console.log("slovo:", typeof slovo);
console.log("pravda:", typeof pravda);

integer = "ешкере пеніс";
float = false;
str = 2687;
bool = 25.63;

console.log("Типи після зміни:");
console.log("chislo:", typeof chislo);
console.log("float:", typeof float);
console.log("slovo:", typeof slovo);
console.log("pravda:", typeof pravda);

console.log("Результати перетворень:");
console.log("Конкатенація числа та рядка:", 10 + "20");
console.log("true як число:", Number(true));
console.log("false як число:", Number(false));
console.log("Рядок '123.45' як число:", Number("123.45"));
console.log("Пустий рядок у булеве:", Boolean(""));
console.log("Число 0 у булеве:", Boolean(0));
console.log("Не нульове число у булеве:", Boolean(42));

const user = {
  name: "Стас",
  age: 17,
  student: true,
  hobbies: ["гроші", "гроші"],
  address: {
    city: "Луцьк",
    zipCode: "43005",
    street: "Звитяжна",
    house: "5",
  }
};

console.log(JSON.stringify(user));





let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));

let average = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", average);

console.log("Модуль першого числа:", Math.abs(num1));
console.log("Округлення в більшу сторону:", Math.ceil(average));
console.log("Округлення в меншу сторону:", Math.floor(average));
console.log("Піднесення першого числа до другого степеня:", Math.pow(num1, num2));

console.log("Чи ділиться без залишку на 5?", average % 5 === 0);
console.log("Чи ділиться без залишку на 7?", average % 7 === 0);

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник НЕ існує");
}