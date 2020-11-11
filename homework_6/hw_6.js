// - создать массив с 20 числами.
// let arr = [,]*(Math.random()*(30-0)+0);
// console.log(arr);
// let arr = [];
// for (let i = 0; i < 30; i++) {
//     arr[i] = Math.round(Math.random()*(30-1)+1);
// }
//
// console.log(arr)

// let arr1 = [15, 25, 14, 21, 29, 8, 22, 13, 27, 11, 13, 10, 18, 25, 28, 2, 14, 2]


// ========================================================================================================================
// -- при помощи метода sort и колбека  отсортировать массив.

// let newArr = arr.sort((a, b) => {
//     return a-b;
// });
// console.log(newArr);


// ========================================================================================================================
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// ЗРОСТАЮЧИЙ////////////////////////////////////
// let newArr = arr.sort((a, b) => {
//     return a-b;
// });
// console.log(newArr)

// СПАДАЮЧИЙ /////////////////////////////////
// let newArr = arr.sort((a, b) => {
//     return b-a;
// });
// console.log(newArr)


// ========================================================================================================================
// -- при помощи filter получить числа кратные 3

// let filter = arr.filter(value => !(value % 3));
// console.log(filter);


// ========================================================================================================================
// -- при помощи filter получить числа кратные 10

// let filter2 = arr.filter(value => !(value % 10));
// console.log(filter2);

// ========================================================================================================================
// -- перебрать (проитерировать) массив при помощи foreach()

// arr1.forEach(value => {
//     console.log(value)
// })



// let forEach2 = arr1.forEach(value => console.log(value))
//
// console.log(forEach2);

// ========================================================================================================================
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let newArr = arr.map(value => value*3)
// console.log(newArr)


// ========================================================================================================================
// ========================================================================================================================
// - создать массив со словами на 15-20 элементов.
let arr = ['ira', 'hello', 'mom', 'dad', 'naruto', 'tesla', 'elon mask', 'spacex', 'lenovo', 'apple', 'xiaomi', 'js', 'python', 'typescript', 'world'];
// --------------------------------------------------------------
// -- отсортировать его по алфавиту в восходящем порядке.

// let newArr = arr.sort((a, b) => {
//     if (a > b) return 1;
//     return -1;
// });
// console.log(newArr)
// --------------------------------------------------------------
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let newArr = arr.sort((a, b) => {
//     if (a > b) return -1;
//     return 1;
// });
// console.log(newArr);
//--------------------------------------------------------------
// -- отфильтровать слова длиной менее 4х символов
// let newArr = arr.filter(value => value.length < 4)
// console.log(newArr);

//--------------------------------------------------------------
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newArr = arr.map(value => value + ' !')
// console.log(newArr);


// ========================================================================================================================
// ========================================================================================================================
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let NewUsers = users.sort((a, b) => a.age - b.age);
// console.log(NewUsers);

// let NewUsers = users.sort((a, b) => b.age - a.age);
// console.log(NewUsers);

// --------------------------------------------------------------
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let NewUsers = users.sort((a, b) => a.name.length > b.name.length ? 1 : -1);
// console.log(NewUsers);

// let NewUsers = users.sort((a, b) => a.name.length > b.name.length ? -1 : 1);
// console.log(NewUsers);

// --------------------------------------------------------------
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = JSON.parse(JSON.stringify(users));


// newUsers = newUsers.map((value, index) => {
//     value.id = index + 1;
//     return value;
// })
// console.log(users)
// console.log(newUsers)

// ==== OR ===== for next task

// newUsers = newUsers.map((value, index) => {
//     value.id = Math.round(Math.random()*1000);
//     return value;
// })
// console.log(users)
// console.log(newUsers)


// --------------------------------------------------------------
// - відсортувати його за індентифікатором

// let sortedId = newUsers.sort((a, b) => a.id > b.id ? 1 : -1)
// console.log(sortedId);

// ========================================================================================================================
// ========================================================================================================================
// -- наисать функцию калькулятора с 2мя числами и колбеком


// function calc(first, second, callback) {
//     return callback(first, second)
// }
//
// let a = calc(4, 2, function (f, s) {
//     return f * s
// })
//
// console.log('result = ', a)

// --------------------------------------------------------------
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc2(first, second, third, callback) {
//     return callback(first, second, third)
// }
//
// let res = calc2(1, 2, 4, function (f, s, t) {
//     return f + s + t;
// })
// console.log(res)




// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
//  але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//


// class Car {
//     constructor(producer, power, owner, price, year) {
//         this.producer = producer;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
//     }
//
//     machineRepair(arrCars, arrDriver) {
//         let j = 0
//         for (let i = 0; i < arrCars.length; i++) {
//             if (!(i % 2)) {
//                 arrCars[i].power = +(arrCars[i].power * 1.1).toFixed(1);
//                 arrCars[i].price = +(arrCars[i].price * 1.05).toFixed(1);
//                 arrCars[i].owner = arrDriver[j++].name
//                 // console.log(arrCars[i])
//             }
//             // console.log(arrCars[i].power)
//             // console.log(arrCars[i].price)
//             // console.log(arrCars[i].owner);
//         }
//     }
//     sum(arrCars) {
//         let res = 0;
//         for (const arrCar of arrCars) {
//             res += arrCar.price;
//         }
//         console.log(`Sum on buy of car - ${res} uah`);
//     }
// }
//
// class Owner {
//     constructor(name, age, exp) {
//         this.name = name;
//         this.age = age;
//         this.exp = exp;
//     }
//
//     auditeExpirience(arrDriver) {
//         for (let i = 0; i < driver.length; i++) {
//             if (driver[i].age > 25 && driver[i].exp < 5) {
//                 driver[i].exp = driver[i].exp + 1;
//             }
//             // console.log(driver[i].exp)
//         }
//     }
//
// }
//
// let tesla = new Car('tesla', 215, 'Rostyslav', 60000, 2020);
// let bmw = new Car('bmw', 75, 'vova', 2000, 2000);
// let mers = new Car('mers', 145, 'igor', 9000, 2005);
// let renault = new Car('renault', 22, 'vlad', 4000, 2012);
// let peugeot = new Car('peugeot', 145, 'gritsko', 500, 2006);
// let nissan = new Car('nissan', 180, 'julia', 30000, 2007);
// let bugatti = new Car('bugatti', 115, 'oleg', 20000, 2008);
// let mazda = new Car('mazda', 100, 'stepan', 6000, 2018);
//
// let cars = [tesla, bmw, mers, renault, peugeot, nissan, bugatti, mazda];
//
//
// let igor = new Owner('igor', 22,1)
// let ira = new Owner('ira', 26,4)
// let oleg = new Owner('oleg', 30,5)
// let nastya = new Owner('nastya', 18,3)
// let lilia = new Owner('lilia', 29,4)
// let misha = new Owner('misha', 32,10)
// let andriy = new Owner('andriy', 20,2)
// let orest = new Owner('orest', 30,9)
// let driver = [igor, ira, oleg, nastya, lilia, misha, andriy, orest];
//
// let owner = new Owner();
// owner.auditeExpirience(driver);
//
//
// let car = new Car();
// car.machineRepair(cars,driver);
// car.sum(cars);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс
// заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

function findIndex(arr, key) {
    let start = 0
    let final = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key && j !== key) {
            start = i;
            j = key;
            console.log(i)
        }
        if (arr[i] === key){
            final = i;
        }
    }
    console.log('MinIndex = '+start);
    console.log('MaxIndex = ' + final);
}
findIndex([1, 2, 2, 2, 2, 2, 4, 7, 7, 9, 14],2)

