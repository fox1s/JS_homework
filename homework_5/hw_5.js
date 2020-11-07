//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// =================================================

// let desscribeA = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`
// let attrA = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
// ]
//
// function DescribeTags (nameTag, describeActions, array){
//     this.nameTag = nameTag;
//     this.describeActions = describeActions;
//     this.array = array;
// }
//
// let a = new DescribeTags('a',desscribeA, attrA)
// console.log(a)
//
// let option = new DescribeTags('option','bfehiwbfbfbi',[{titleOfAttr: 'accesskey', actionOfAttr: 'Переход' },{titleOfAttr: 'coords', actionOfAttr: 'Устанавливает'},])
// console.log(option)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////       2         ////////////

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ================================================


// class DescribeTags {
//     constructor(nameTag, describeActions, array) {
//         this.nameTag = nameTag;
//         this.describeActions = describeActions;
//         this.array = array;
//     }
// }
//
// let tagA = new DescribeTags('a', desscribeA, attrA)
// console.log(tagA);
//
// let tagForm = new DescribeTags('form',`Тег <form> устанавливает форму на веб-странице`,
//     [{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}
//     ])


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      3         ////////////

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: "3",
//     producer: 'Tesla',
//     manufactureOfCar: 2018,
//     maxSpeed: 260,
//     power: '400 kwt',
//     driver: function drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     },
//     infoOfCar: function (){
//         console.log(`model = ${this.model},\nproducer = ${this.producer},\nmanufactureOfCar = ${this.manufactureOfCar},\nmax Speed = ${this.maxSpeed} km/hour`)
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.newSpeed = newSpeed;
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed)
//     },
//     changeYear: function (newValue){
//         this.newValue = newValue;
//         this.manufactureOfCar = newValue;
//         console.log(newValue)
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//         car.newDriver = driver;
//         console.log(`I am new driver, ${this.newDriver.name}! My experience is ${this.newDriver.exp} `);
//     }
// }
//
// let driverIvan = {name: 'Ivan', exp: '25 years'};
// car.driver();
// car.infoOfCar();
// car.increaseMaxSpeed(15);
// car.changeYear(2020);
// car.addDriver(driverIvan);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      4         ////////////

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, producer, yearManufacture, maxSpeed, power) {
//     this.model = model;
//     this.producer = producer;
//     this.yearManufacture = yearManufacture;
//     this.maxSpeed = maxSpeed;
//     this.power = power;
//
//     this.driver = function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
//     }
//     this.infoOfCar = function () {
//         console.log(`model = ${model},\nproducer = ${producer},\nmanufactureOfCar = ${yearManufacture},\nmax Speed = ${maxSpeed} km/hour`)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.newSpeed = newSpeed;
//         maxSpeed += newSpeed;
//         console.log(maxSpeed)
//     }
//
//     this.changeYear = function (newValue) {
//         this.newValue = newValue;
//         yearManufacture = newValue;
//         console.log(newValue)
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         car.newDriver = driver;
//         console.log(`I am new driver, ${this.newDriver.name}! My experience is ${this.newDriver.exp} `);
//     }
// }
//
// let car = new Car('S', 'Tesla', 2018, 250, '500 kwt')
// let driverIvan = {name: 'Ivan', exp: '25 years'};
// car.infoOfCar()
// car.driver()
// car.increaseMaxSpeed(25)
// car.changeYear(5050)
// car.addDriver(driverIvan)
// console.log(car);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      5         ////////////

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, producer, yearManufacture, maxSpeed, power) {
//         this.model = model;
//         this.producer = producer;
//         this.yearManufacture = yearManufacture;
//         this.maxSpeed = maxSpeed;
//         this.power = power;
//     }
//
//     driver () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     infoOfCar () {
//         console.log(`model = ${this.model},\nproducer = ${this.producer},\nmanufactureOfCar = ${this.yearManufacture},\nmax Speed = ${this.maxSpeed} km/hour`)
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += +newSpeed;
//         console.log(this.maxSpeed)
//     }
//
//     changeYear (newValue) {
//         this.yearManufacture = newValue;
//         console.log(newValue)
//     }
//
//     addDriver (newDriver) {
//         this.newDriver = newDriver;
//         Car.newDriver = newDriver;
//         console.log(`I am new driver, ${this.newDriver.name}! My experience is ${this.newDriver.exp} `);
//     }
// }
//
//
// let driverIvan = {name: 'Ivan', exp: '25 years'};
//
// let modelS = new Car('X', 'Tesla', 2020, 350, '600 kwt');
// console.log(modelS)
// modelS.driver()
// modelS.infoOfCar()
// modelS.increaseMaxSpeed('60')
// modelS.changeYear(2021)
// modelS.addDriver(driverIvan)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      6         ////////////

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


// class Cinderella {
//     constructor(name, age, sizeLeg) {
//         this.name = name;
//         this.age = age;
//         this.sizeLeg = sizeLeg;
//     }
//
// }
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
//
//     findPrinceLove(array) {
//         for (const cinderella of CinderellasArr) {
//             if (cinderella.sizeLeg === this.shoeSize) {
//                 console.log(`Happy life together ${cinderella.name}`);
//                 break;
//             }
//         }
//     }
// }
//
// let nastya = new Cinderella('nastya', 16, 35);
// let katya = new Cinderella('katya', 17, 31);
// let ira = new Cinderella('ira', 18, 32);
// let natalia = new Cinderella('natalia', 35, 36);
// let sophia = new Cinderella('sophia', 74, 30);
// let khrystia = new Cinderella('khrystia', 15, 37);
// let paraska = new Cinderella('paraska', 19, 32);
// let zosia = new Cinderella('zosia', 16, 34);
// let tyania = new Cinderella('tyania', 21, 31);
// let julia = new Cinderella('julia', 24, 33);
//
// let CinderellasArr = [nastya, katya, ira, natalia, sophia, khrystia, paraska, zosia, tyania, julia];
//
// let prince = new Prince('Rostyslav',20, 31)
// prince.findPrinceLove(CinderellasArr)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//
//     }
//
// }
//
// class Prince extends Human{
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize;
//
//     }
//
//     findPrinceLove(array) {
//         for (const cinderella of CinderellasArr) {
//             if (cinderella.footSize === this.shoeSize) {
//                 console.log(`Happy life together ${cinderella.name}`);
//                 break;
//             }
//         }
//     }
// }
//
// let nastya = new Cinderella('nastya', 16, 35);
// let katya = new Cinderella('katya', 17, 31);
// let ira = new Cinderella('ira', 18, 32);
// let natalia = new Cinderella('natalia', 35, 36);
// let sophia = new Cinderella('sophia', 74, 30);
// let khrystia = new Cinderella('khrystia', 15, 37);
// let paraska = new Cinderella('paraska', 19, 32);
// let zosia = new Cinderella('zosia', 16, 34);
// let tyania = new Cinderella('tyania', 21, 31);
// let julia = new Cinderella('julia', 24, 33);
//
// let CinderellasArr = [nastya, katya, ira, natalia, sophia, khrystia, paraska, zosia, tyania, julia];
//
// let prince = new Prince('Rostyslav',20, 31)
// prince.findPrinceLove(CinderellasArr)
//











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////      7         ////////////

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince (name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//
//     this.findPrinceLove = function (array) {
//         for (const cinderella of CinderellasArr) {
//             if (cinderella.footSize === this.shoeSize) {
//                 console.log(`Happy life together ${cinderella.name}`);
//                 break;
//             }
//         }
//     }
//
// }
//
//
// let nastya = new Cinderella('nastya', 16, 35);
// let katya = new Cinderella('katya', 17, 31);
// let ira = new Cinderella('ira', 18, 32);
// let natalia = new Cinderella('natalia', 35, 36);
// let sophia = new Cinderella('sophia', 74, 30);
// let khrystia = new Cinderella('khrystia', 15, 37);
// let paraska = new Cinderella('paraska', 19, 32);
// let zosia = new Cinderella('zosia', 16, 34);
// let tyania = new Cinderella('tyania', 21, 31);
// let julia = new Cinderella('julia', 24, 33);
//
// let prince = new Prince('Rostyslav',20,35)
// let CinderellasArr = [nastya, katya, ira, natalia, sophia, khrystia, paraska, zosia, tyania, julia];
// prince.findPrinceLove(CinderellasArr);
//
//
