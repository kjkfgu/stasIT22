let arrayLength = Math.floor(Math.random() * 100) + 1;
let numbers = [];
for (let i = 0; i < arrayLength; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

let average = numbers.reduce(function(acc, num) {
    return acc + num  / numbers.length;
}, 0);


let maxValue = Math.max.apply(null, numbers);
let minValue = Math.min.apply(null, numbers);

let numbersSorted = numbers.slice().sort(function(a, b) {
    return a - b;
});

console.log("Масив чисел:", numbers);
console.log("Середнє арифметичне:", average);
console.log("Максимальне значення:", maxValue);
console.log("Мінімальне значення:", minValue);
console.log("Відсортований масив:", numbersSorted);
