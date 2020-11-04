// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let user = {
//     name: 'Rostyslav',
//     age: 20,
//     gen: 'male'
// };
// let cat = {
//     color: 'red',
//     eyes: 'green',
//     numbOflives: 9
// }
// let house = {
//     width: 300,
//     height: 20,
//     numbOfWindows: 5
// }
//
// let sister = {
//     school: true,
//     nickname: 'catty',
//     classOfSchool: 8
//
// }
//
// let elonMask = {
//     tesla: 'car',
//     spacex: 'rocket',
//     solarCity: 'roof'
// }


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и
// внутренний объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let user = {
//     name: 'Rostyslav',
//     age: 20,
//     gen: 'male',
//     skills: ['python', 'html', 'css','js'],
//     sister: {name:'Sophie', age: 14}
// };
// let cat = {
//     color: 'red',
//     eyes: 'green',
//     numbOfLives: 9,
//     owner: {first:'Olena', second:'Stepan'},
//     skills: ['do a Nuawwww', 'be a bad cat']
// };
// let house = {
//     width: 300,
//     height: 20,
//     numbOfWindows: 5,
//     location:{
//         city: 'Lviv',
//         country: 'Ukraine'
//     },
//     smartItems:['smartTv','smartTable']
// };
//
// let sister = {
//     school: true,
//     nickname: 'catty',
//     classOfSchool: 8,
//     favoriteSerials: ['the 100','sherlock'],
//     family: {
//         brother: 'Rostyslav',
//         mom: 'Julia',
//         dad: 'Andriy'
//     }
//
// };
//
// let elonMask = {
//     tesla: 'car',
//     spacex: 'rocket',
//     solarCity: 'roof',
//     starship: {
//         type: 'rocket',
//         oldName: 'big f*ckin rocket'
//     },
//     dreams:['fly to Mars','world on electricity']
// }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const userElement in user) {
//     console.log(userElement)
// }
//
// for (const catElement in cat) {
//     console.log(catElement)
// }
//
// for (const houseElement in house) {
//     console.log(houseElement)
// }
//
// for (const sisterrElement in sister) {
//     console.log(sisterrElement)
// }
// for (const elonMaskElement in elonMask) {
//     console.log(elonMaskElement)
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keys = Object.keys(user);
// console.log(keys);
// keys = Object.keys(sister);
// console.log(keys);
// keys = Object.keys(elonMask);
// console.log(keys);
// keys = Object.keys(house);
// console.log(keys);
// keys = Object.keys(cat);
// console.log(keys);
//


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let teslaCars=[
//     {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey'},
//     {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red'},
//     {model: "Y", manufactureOfCar: 2021, power: '240 kwt', color:'black'},
//     {model: "S", manufactureOfCar: 2019, power: '180 kwt', color:'pink'},
//     {model: "Cybertrack", manufactureOfCar: 2022, power: '220 kwt', color:'grey'},
//     {model: "roadster", manufactureOfCar: 2023, power: '500 kwt', color:'red'},
// ]

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities=[
//     {name: "Lviv", population: 7373730, country:'UKR', region: 'wgg'},
//     {name: "Ternopil", population: 7373737, country:'UKR', region: 'wgr'},
//     {name: "IF", population: 7373733, country:'UKR', region: 'gregre'},
//     {name: "NY", population: 7373737373, country:'USA', region: 'greg'},
//     {name: "Paris", population: 537353, country:'FR', region: 'geg'},
//     {name: "London", population: 3835838, country:'ENG', region: 'egegg'},
// ]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let teslaCars2=[
//     {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey', driver: {name:'wfwf', age: '56', gen:'male', practice: 19}},
//     {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red', driver: {name:'ybby', age: '12', gen:'female', practice: 25}},
//     {model: "Y", manufactureOfCar: 2021, power: '240 kwt', color:'black', driver: {name:'untnt', age: '65', gen:'male', practice: 60}},
//     {model: "S", manufactureOfCar: 2019, power: '180 kwt', color:'pink', driver: {name:'wvvtrewbrt', age: '78', gen:'female', practice: 50}},
//     {model: "Cybertrack", manufactureOfCar: 2022, power: '220 kwt', color:'grey', driver: {name:'dzfbdzbd', age: '56', gen:'female', practice: 30}},
//     {model: "roadster", manufactureOfCar: 2023, power: '500 kwt', color:'red', driver: {name:'mol', age: '25', gen:'male', practice: 15}},
// ]


// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i =0;
// while(i<teslaCars.length) {
//     console.log(teslaCars[i])
//     i++;
// }

// let i =0;
// while(i<teslaCars2.length) {
//     console.log(teslaCars2[i])
//     i++;
// }

// let i =0;
// while(i<cities.length) {
//     console.log(cities[i])
//     i++;
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < teslaCars.length; i++) {
//     const teslaCar = teslaCars[i];
//     console.log(teslaCar);
// }

// for (let i = 0; i < teslaCars2.length; i++) {
//     const teslaCars2Element = teslaCars2[i];
//     console.log(teslaCars2Element)
// }

// for (let i = 0; i < cities.length; i++) {
//     const city = cities[i];
//     console.log(city);
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const teslaCar of teslaCars) {
//     console.log(teslaCar);
// }

// for (const city of cities) {
//     console.log(city);
// }
// for (const teslaCars2Element of teslaCars2) {
//     console.log(teslaCars2Element);
// }

// - взять объекты из задания 1 и превратить каждый в json.  // - взять json из задания 11 и превратить их обратно в объекты.

// let user = {
//     name: 'Rostyslav',
//     age: 20,
//     gen: 'male'
// };
// let cat = {
//     color: 'red',
//     eyes: 'green',
//     numbOflives: 9
// }
// let house = {
//     width: 300,
//     height: 20,
//     numbOfWindows: 5
// }
//
// let sister = {
//     school: true,
//     nickname: 'catty',
//     classOfSchool: 8
//
// }
//
// let elonMask = {
//     tesla: 'car',
//     spacex: 'rocket',
//     solarCity: 'roof'
// }
//
// let userJSON = JSON.stringify(user);
// console.log(userJSON);
// let userCopy = JSON.parse(userJSON);
// console.log(userCopy);
//
// let catJSON = JSON.stringify(cat);
// let cloneCat = JSON.parse(catJSON);
//
// let houseJSON = JSON.stringify(house);
// let cloneHouse = JSON.parse(houseJSON);
//
// let sisterJSON = JSON.stringify(sister);
// let cloneSister = JSON.parse(sisterJSON);
//
// let elonMaskJSON = JSON.stringify(elonMask);
// let cloneElonMask = JSON.parse(elonMaskJSON);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let teslaCars=[
//     {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey'},
//     {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red'},
//     {model: "Y", manufactureOfCar: 2021, power: '240 kwt', color:'black'},
//     {model: "S", manufactureOfCar: 2019, power: '180 kwt', color:'pink'},
//     {model: "Cybertrack", manufactureOfCar: 2022, power: '220 kwt', color:'grey'},
//     {model: "roadster", manufactureOfCar: 2023, power: '500 kwt', color:'red'},
// ]
//
// for (const teslaCar of teslaCars) {
//     let json = JSON.stringify(teslaCar);
//     console.log(json);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities=[
//     {name: "Lviv", population: 7373730, country:'UKR', region: 'wgg'},
//     {name: "Ternopil", population: 7373737, country:'UKR', region: 'wgr'},
//     {name: "IF", population: 7373733, country:'UKR', region: 'gregre'},
//     {name: "NY", population: 7373737373, country:'USA', region: 'greg'},
//     {name: "Paris", population: 537353, country:'FR', region: 'geg'},
//     {name: "London", population: 3835838, country:'ENG', region: 'egegg'},
// ];
//
// let i=0;
// while(i<cities.length) {
//     console.log(JSON.stringify(cities[i]));
//     i++;
// }


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let teslaCars2=[
//     {model: "3", manufactureOfCar: 2018, power: '210 kwt', color:'grey', driver: {name:'wfwf', age: '56', gen:'male', practice: 19}},
//     {model: "X", manufactureOfCar: 2018, power: '200 kwt', color:'red', driver: {name:'ybby', age: '12', gen:'female', practice: 25}},
//     {model: "Y", manufactureOfCar: 2021, power: '240 kwt', color:'black', driver: {name:'untnt', age: '65', gen:'male', practice: 60}},
//     {model: "S", manufactureOfCar: 2019, power: '180 kwt', color:'pink', driver: {name:'wvvtrewbrt', age: '78', gen:'female', practice: 50}},
//     {model: "Cybertrack", manufactureOfCar: 2022, power: '220 kwt', color:'grey', driver: {name:'dzfbdzbd', age: '56', gen:'female', practice: 30}},
//     {model: "roadster", manufactureOfCar: 2023, power: '500 kwt', color:'red', driver: {name:'mol', age: '25', gen:'male', practice: 15}},
// ]


// let arr = [];
// for (let i = 0; i < teslaCars2.length; i++) {
//     arr.push(JSON.stringify(teslaCars2[i]));
//     // arr[i]= JSON.stringify(teslaCars2[i])
// }
// console.log(arr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// users= [
//     {name:'oleg', skills:['js','java','python']},
//     {name:'rostik', skills:['assembler','c++','c#']},
//     {name:'stephan', skills:['html','js','css']},
// ]
//
// for (const user of users) {
//     for (const skills of user.skills) {
//         console.log(skills);
//     }
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// users= [
//     {name:'oleg', skills:['js','java','python']},
//     {name:'rostik', skills:['assembler','c++','c#']},
//     {name:'stephan', skills:['html','js','css']},
// ]
// let arr=[];
// for (const user of users) {
//     for (const skills of user.skills) {
//         // console.log(skills);
//         arr.push(skills);
//     }
// }
// console.log(arr);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (const user of users) {
//     for (const userElement of user.skills) {
//         console.log(userElement);
//     }
// }


// ..................................................................
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let arr = [];
// for (const user of users) {
//     arr.push(user.address);
// }
// console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (const user of users) {
//     let newBlock = document.createElement('div');
//     let address = '';
//     for (const i in user.address) {
//         address = address +' '+ user.address[i];
//     }
//     newBlock.innerText =  user.name + ' ' + user.age + ' ' + address;
//     document.body.appendChild(newBlock);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
//
// for (const user of users) {
//     let firstDiv = document.createElement("div");
//     for (const userEl in user) {
//         let smallDiv = document.createElement('div');
//         smallDiv.innerText = userEl + ' ' +user[userEl]
//         firstDiv.appendChild(smallDiv);
//     }
//     document.body.appendChild(firstDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (const user of users) {
//     let firstDiv = document.createElement("div");
//     for (const userEl in user) {
//         if (userEl ==='address')
//         {
//             let addressBlock = document.createElement('div');
//             for (const userElKey in userEl) {
//             }
//
//             // addressBlock.innerText = userEl + ' ' + user[userEl];
//             // firstDiv.appendChild(addressBlock);
//
//
//
//         } else {
//             let smallDiv = document.createElement('div');
//             smallDiv.innerText = userEl + ' ' +user[userEl]
//             firstDiv.appendChild(smallDiv);
//         }
//     }
//     document.body.appendChild(firstDiv);
// }


// for (const user of users) {
//     let bigDiv = document.createElement('div');
//     let nameDiv = document.createElement('div');
//     let ageDiv= document.createElement('div');
//     let statusDiv = document.createElement('div');
//     let addressDiv = document.createElement('div');
//
//     for (const i in user.address) {
//         let address = document.createElement('div');
//         address.innerText = user.address[i];
//         addressDiv.appendChild(address);
//     }
//
//     nameDiv.innerText = user.name;
//     ageDiv.innerText = user.age;
//     statusDiv.innerText = user.status;
//
//     bigDiv.appendChild(nameDiv);
//     bigDiv.appendChild(ageDiv);
//     bigDiv.appendChild(statusDiv);
//     bigDiv.appendChild(addressDiv);
//     document.body.appendChild(bigDiv);
//
// }







// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
];

// let usersWithCities = JSON.parse(JSON.stringify(usersWithId));
// for (const elemUser of usersWithCities) {
//     for (const elemCity of citiesWithId) {
//         if (elemUser.id === elemCity.user_id) {
//             elemUser.address = elemCity;
//         }
//     }
// }
// console.log(usersWithCities);

// ..............................................
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// document.createElement('div')




// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
