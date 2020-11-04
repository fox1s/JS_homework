// - створити функцію яка виводить масив

// function printArr (array) {
//     console.log(array)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function arrRandom(max,min) {
//     let arr1 = [];
//     for (let i = 0; i < 10; i++) {
//     arr1.push(Math.floor(Math.random()*(max-min)+min))
//     }
//     printArr(arr1)
// }
// arrRandom(1,20);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function lowerNumber(first, second, third){
//     return Math.min.apply( Math, arguments );
// }
// let min = lowerNumber(5, 2, 3)
// console.log(min)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function upperNumber(first, second, third){
//     return Math.max.apply( Math, arguments );
// }
// let max = upperNumber(5, 2, 3)
// console.log(max)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function number() {
//     console.log('max = ' + Math.max.apply(Math, arguments));
//     return Math.min.apply(Math, arguments);
// }
// let min = number(2, 3, 4, 5, 6);
// console.log('min = ' + min)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка виводить масив

// function printArr (array) {
//     console.log(array)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найбільше число з масиву

// function maxArr(arr) {
//     return Math.max.apply(Math, arr)
// }
// console.log(maxArr([1, 2, 3, 5, 7]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка повертає найменьше число з масиву

// function minArr(arr) {
//     return Math.min.apply(Math, arr)
// }
// console.log(minArr([1, 2, 3, 5, 7]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sum (arr) {
//     let sum = 0;
//     for (const elem of arr) {
//         sum = sum + elem;
//     }
//     return sum;
// }
//
// console.log(sum([1, 2, 3, 4]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(arr) {
//     let sum = 0;
//     for (const elem of arr) {
//         sum = sum + elem;
//     }
//     return sum/arr.length;
// }
// let aver = average([1,2,3,4])
// console.log(aver);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function numberOdObject() {
//     let i = 0;
//     for (const argument of arguments) {
//         i = i+1;
//     }
//     return i;
// }
//
// console.log(numberOdObject(1,2,3,4,false));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let teslaCars=[
//     {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey'},
//     {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red'},
//
// ]

// function field(arr) {
//     let i = 0;
//     for (const field of arr) {
//         for (const elem in field) {
//             i = i + 1;
//         }
//     }
//     return i;
// }
// console.log(field(teslaCars));


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// function sumOfElem(arr1, arr2){
//     let sum = 0;
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i===j){
//                 sum = arr1[i] + arr2[j];
//                 newArr.push(sum);
//             }
//         }
//     }
//     return newArr;
// }
//
// let sum1 = sumOfElem([1,2,3,4],[2,3,4,5]);
// console.log(sum1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function replace(arr, i) {
//     let a = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i+1] = a
//     return arr;
// }
//
// let s = replace(arr, 5)
// console.log(arr);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [1, 0, 6, 0, 3]
//
//
// function zeroInEnd(arr) {
//     let arrZero = [];
//     let arrOther = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             arrZero.push(arr[i])
//         } else {
//             arrOther.push(arr[i])
//         }
//     }
//     // console.log(arrZero)
//     // console.log(arrOther)
//     return arrOther.concat(arrZero);
// }
//
// let result = zeroInEnd(array);
// console.log(result)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function div() {
//     let div = document.createElement('div');
//     div.innerText = "Hello owu";
//     document.body.appendChild(div);
// }
//
// div()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// let addsText = function (text, tag = 'div') {
//     let tagElem = document.createElement(tag);
//     tagElem.innerText = text;
//     document.body.appendChild(tagElem);
// }

// addsText('hello', 'p')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let teslaCars=[
    {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey', driver: {name:'wfwf', age: '56', gen:'male', practice: 19}},
    {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red', driver: {name:'ybby', age: '12', gen:'female', practice: 25}},
    {model: "Y", manufactureOfCar: 2021, power: '240 kwt', color:'black', driver: {name:'untnt', age: '65', gen:'male', practice: 60}},
    {model: "S", manufactureOfCar: 2019, power: '180 kwt', color:'pink', driver: {name:'wvvtrewbrt', age: '78', gen:'female', practice: 50}},
    {model: "Cybertrack", manufactureOfCar: 2022, power: '220 kwt', color:'grey', driver: {name:'dzfbdzbd', age: '56', gen:'female', practice: 30}},
    {model: "roadster", manufactureOfCar: 2023, power: '500 kwt', color:'red', driver: {name:'mol', age: '25', gen:'male', practice: 15}},
]
// cars
// let carsFunc = function (cars,idOfTag) {
//     let tag = document.getElementById(idOfTag);
//     let ul = document.createElement('ul');
//     for (const car of cars) {
//         let li = document.createElement('li');
//         li.innerText = 'Tesla model' + ' ' + car.model;
//         ul.appendChild(li);
//     }
//     tag.appendChild(ul);
// }
// carsFunc(teslaCars,'cars')













//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


let carsFunc = function (cars,idOfTag) {
    let tag = document.getElementById(idOfTag);
    let ul = document.createElement('ul');
    for (const car of cars) {
        let li = document.createElement('li');
        li.innerText = 'Tesla model' + ' ' + car.model;
        ul.appendChild(li);

        for (const carsKey in car) {
            
        }
    }
    tag.appendChild(ul);
}
carsFunc(teslaCars,'cars')









// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
//
//
//
//
