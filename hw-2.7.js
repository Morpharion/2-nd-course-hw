// Задание 1

const str = 'js';

const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// Задание 2
function yourFn(array, str) {
    return array.filter(element => element.toLowerCase().startsWith(str.toLowerCase()));
}

const result = yourFn(['кошка', 'кот', 'кора', 'тест'], 'ко');
console.log(result);

// Задание 3

const num = 32.58884;

const roundedDown = Math.floor(num);
console.log("Округление до меньшего целого:", roundedDown);

const roundedUp = Math.ceil(num);
console.log("Округление до большего целого:", roundedUp);

const roundedNearest = Math.round(num);
console.log("Округление до ближайшего целого:", roundedNearest);

// Задание 4

const minValue = Math.min(52, 53, 49, 77, 21, 32);
console.log("Минимальное значение:", minValue);

const maxValue = Math.max(52, 53, 49, 77, 21, 32);
console.log("Максимальное значение:", maxValue);

// Задание 5

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Случайное число от 1 до 10:", randomNumber);
}

getRandomNumber();

// Задание 6

function generateRandomArray(n) {
    const arrayLength = Math.floor(n / 2);
    const randomNumbers = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (n + 1));
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

// Задание 7

function getRandomNumberInRange(min, max) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Задание 8

const currentDateExEight = new Date();

const formattedDate = currentDateExEight.toLocaleDateString();

console.log(`Текущая дата: ${formattedDate}`);

// Задание 9 

function calculateFutureDate(daysToAdd) {
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();

    const futureDate = new Date(currentDate);

    futureDate.setDate(futureDate.getDate() + daysToAdd);

    const formattedFutureDate = formatDate(futureDate);

    console.log("Через 73 дня:", formattedFutureDate);
}

calculateFutureDate(73);

// Задание 10 

function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const weekDays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const formattedDate = `Дата: ${('0' + date.getDate()).slice(-2)} ${months[date.getMonth()]} ${date.getFullYear()} — это ${weekDays[date.getDay()]}`;

    const formattedTime = `Время: ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;

    return `${formattedDate}\n${formattedTime}`;
}

// Задание 11

const wordsToRemember = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startMemoryGame() {
    const shuffledWords = shuffleArray([...wordsToRemember]);

    alert('Запомните слова: ' + shuffledWords.join(', '));

    const firstWord = prompt('Введите первое слово из списка');

    const lastWord = prompt('Введите последнее слово из списка');

    const isCorrectFirstWord = firstWord && firstWord.toLowerCase() === shuffledWords[0].toLowerCase();
    const isCorrectLastWord = lastWord && lastWord.toLowerCase() === shuffledWords[shuffledWords.length - 1].toLowerCase();

    if (isCorrectFirstWord && isCorrectLastWord) {
        alert('Поздравляем! Вы угадали оба слова!');
    } else if (isCorrectFirstWord || isCorrectLastWord) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы проиграли!');
    }
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', startMemoryGame);
