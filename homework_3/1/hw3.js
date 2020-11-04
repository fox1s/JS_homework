// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let a = {
//     dog: 'wild',
//     man: 'tall',
//     car: 'tesla',
//     apartment: 'spacious',
//     book: 'the witcher'
// }
// ...................................................................................................

// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let man = ['Rostyslav', 'Sophie', 'Igor', 'Stepan', 'Oleg',];
// console.log(man);
// let dog = ['white', 'black', 'small', 'stupid', 'wild',];
// console.log(dog);
// let car = ['model 3', 'model X', 'model Y', 'model S', 'Cybertrack',];
// console.log(car);
// ...................................................................................................

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let object = {
//     house: 'white',
//     driver: {name: 'Oleg', age: 53, car: 'tesla'},
//     toy: ['car', 'barbie', 'spider-man'],
//     table: 'small',
//     bag: 'black'
// }
// ...................................................................................................


// Даний массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status);
// console.log(users[users.length - 1].status);
// console.log(users[users.length - 2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age + users[4].name);
// console.log(users[5].age + " " + users[5].status);


// ...................................................................................................

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let byId_content = document.getElementById('content');
let byId_rules = document.getElementById('rules');
byId_content.innerText = 'hufhewoufhewjhfeghe';
byId_rules.innerText = 'fewbfhwebfjkewbejkfbwjo0';

byId_rules.style.backgroundColor = 'red';
byId_content.style.backgroundColor = 'red';
byId_rules.style.color = 'blue';
byId_content.style.color = 'blue';

let rules_classList = byId_rules.classList;
console.log(rules_classList);

let elementsByClassName = document.getElementsByClassName('fc_rules');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.color='red';
}
