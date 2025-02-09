// Ex1


const ex1People = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function compareByAge(person1, person2) {
    return person1.age - person2.age;
}

console.log(ex1People.sort(compareByAge));


// Ex2


function isPositive(num) {
    return num > 0
}
function isMale(prop) {
    return prop.gender === "male"
}
function filter(array, callback) {
    const resultArray = [];
    array.forEach(element => {
        if (callback(element)) {
            resultArray.push(element)
        }
    });
    return resultArray
}

console.log(filter([3, -4, 1, 9], isPositive));

const ex2People = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(ex2People, isMale));


// Ex3


function printDate() {
    const currentDate = new Date();
    console.log(currentDate);
}

const intervalId = setInterval(printDate, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);


// Ex4


function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


// Ex5


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

///asdasgfsbfdasdcasdasdg 