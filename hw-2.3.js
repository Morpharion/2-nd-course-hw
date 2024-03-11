// Задание 1
let password = "123-123-143"
let value = prompt('Введите пароль');

if (value === password) {
    alert('Пароль введен верно');
}
else {
    alert('Введен не верный пароль');
}

// Задание 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

// Задание 3
let d = 150;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

// Задание 4 
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5  ///

let monthNumber = Number(prompt("Введите месяц года"));

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна')
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень')
        break;
    default:
        console.log('Не месяц года')
        break;
}