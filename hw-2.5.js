// Задание 1
function returnSmaller(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(returnSmaller(8, 4));
console.log(returnSmaller(6, 6));
console.log(returnSmaller(1, 7));
console.log(returnSmaller(20, 2));

// Задание 2
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(evenOrOdd(9));
console.log(evenOrOdd(10));

// Задание 3
function Square(num) {
    console.log(num * num);
}

function returnSquare(num) {
    return num * num;
}

Square(5);

var result = returnSquare(9);
console.log(result);

// Задание 4
function checkAge() {
    let age = prompt('Сколько вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

checkAge();

// Задание 5
function multiplyNumbers(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

// Задание 6
function cubeNumber() {

    var userInput = prompt("Введите число:");
    if (isNaN(userInput)) {
        return 'Переданный параметр не является числом';

    } else {
        var number = parseFloat(userInput);
        var result = Math.pow(number, 3);
        return number + ' в кубе равняется ' + result;
    }
}

console.log(cubeNumber(5));

// Задание 7
let circle1 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}

let circle2 = {
    radius: 13,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());