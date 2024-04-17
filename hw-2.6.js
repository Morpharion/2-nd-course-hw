// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);

    if (numbs[i] === 10) {
        console.log(numbs[i]);
        break;
    }
}

// Задание 2

const numbersArray = [1, 5, 4, 10, 0, 3];

const index = numbersArray.indexOf(4);
console.log(index);

// Задание 3

const numbersArraySecond = [1, 3, 5, 10, 20];
const result = numbersArraySecond.join(' ');
console.log(result);

// Задание 4

const n = 3;
const m = 3;

const array = [];

for (let i = 0; i < n; i++) {
    const innerArray = [];
    for (let j = 0; j < m; j++) {
        innerArray.push(1);
    }
    array.push(innerArray);
}

console.log(array);

// Задание 5

const numbers = [1, 1, 1];
numbers.push('2', '2', '2');

console.log(numbers);

// Задание 6

const massive = [9, 8, 7, 'a', 6, 5];

const newArr = massive.filter((element) => {
    return typeof element === 'number';
});

console.log(newArr);

// Задание 7

const numbers = [9, 8, 7, 6, 5];

const guess = prompt("Угадай число!");
const guessNumber = Number(guess);
const guessed = numbers.includes(guessNumber);

if (guessed) {
    alert("Угадал!");
} else {
    alert("Не угадал");
}

// Задание 8

const letters = 'abcdef';
const reversedLetters = letters.split('').reverse().join('');
console.log(reversedletters);

// Задание 9

const massive = [[1, 2, 3], [4, 5, 6]];
const newMassive = [...massive[0], ...massive[1]];
console.log(NewMssive);

// Задание 9. Через flat()

const massive = [[1, 2, 3], [4, 5, 6]];
const newMassive = massive.flat(1);
console.log(newMassive);

// Задание 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length - 1; i++) {
    console.log(`Сумма ${numbers[i]} и ${numbers[i + 1]} равна ${numbers[i] + numbers[i + 1]}`);
}

// Задание 11

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function squareNumbers(arr) {
    const squaredNumbers = arr.map((number) => number * number);
    return squaredNumbers;
}

const result = squareNumbers(numbers);
console.log(result);

// Задание 12

const words = ['four', 'five5', 'seven77', 'elevenElevn'];

function getWordLengths(arr) {
    const lengths = arr.map((word) => word.length);
    return lengths;
}

const result = getWordLengths(words);
console.log(result);

// Задание 13

const numbers = [-1, 2, 3, -4, 5, 6, -7, 8, 9];

function getNegativeNumbers(arr) {
    const negativeNumbers = arr.filter((number) => number < 0);
    return negativeNumbers;
}

const result = getNegativeNumbers(numbers);
console.log(result);

// Задание 14

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 11));
}

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("Исходный массив:", numbers);
console.log("Массив четных значений:", evenNumbers);

// Задание 15

const numbers = [];
for (let i = 0; i < 6; i++) {
    numbers.push(Math.floor(Math.random() * 10) + 1);
}

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const average = sum / numbers.length;

console.log("Исходный массив:", numbers);
console.log("Среднее арифметическое:", average);

asd