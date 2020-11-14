// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let textId = document.createElement('div');
// document.body.appendChild(textId);
// textId.setAttribute('id','text');
//
// textId.style.width = '50px';
// textId.style.height = '50px';
// textId.style.backgroundColor = 'red';
//
// textId.onclick = (ev) => {
//     textId.style.display = 'none';
// }


// =======================================================================================================================
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// document.body.appendChild(button);
//
// button.style.width = '100px';
// button.style.height = '25px';
// button.innerText = 'button';
//
//
// button.addEventListener("click", ev => button.style.display = 'none')




// =======================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// let button = document.createElement('button');
// document.body.appendChild(input);
// document.body.appendChild(button);
//
//
// button.style.width = '100px';
// button.style.height = '25px';
// button.innerText = 'OK';
//
// button.onclick = () => {
//     if(input.value < 18) alert('Go away to your mommy)')
// }




// =======================================================================================================================
// - Создайте меню, которое раскрывается/сворачивается при клике
// let arrMENU = ['forum', 'blog', 'contacts']
//
//
// let div = document.createElement('div');
// let btnMENU = document.createElement("button");
//
//
// btnMENU.style.width = '100px';
// btnMENU.style.height = '25px';
// btnMENU.innerText = 'MENU';
// btnMENU.style.backgroundColor = 'white'
//
// div.style.border = '3px solid black'
// div.style.width = '200px'
// div.style.height = '200px'
// arrMENU.forEach(value => {
//     let p = document.createElement('p');
//     p.innerText = value;
//     p.style.fontSize = '24px'
//     p.style.fontWeight = 'bold'
//     div.appendChild(p);
// })
//
// document.body.appendChild(btnMENU);
// document.body.appendChild(div);
//
// btnMENU.onclick = () => {
//     if (div.style.display === 'none'){
//         return div.style.display = 'block'
//     }
//     return div.style.display = 'none'
// }






// =======================================================================================================================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// function btnStyle (btn){
//     btn.style.width = '100px';
//     btn.style.height = '25px';
//     btn.innerText = 'collapse';
//     btn.style.backgroundColor = 'white'
//     btn.setAttribute('class', 'collapseBTN')
// }
//
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'nastya', body:'lorem dvsv'},
//     {title : 'ira', body:'sit ameti'},
//     {title : 'katia', body:'dddddddddddddddddddddddddddddd'}
// ];
//
//
//
// for (const comment of comments) {
//     let btn = document.createElement('button');
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//
//     h2.innerText = comment.title
//     p.innerText = comment.body
//     btnStyle(btn)
//
//     btn.onclick = (ev)=>{
//         if (p.style.display === 'none') return p.style.display = 'block'
//         return p.style.display = 'none'
//     }
//
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);
//
//
//     document.body.appendChild(div)
// }



// =======================================================================================================================
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.getElementById('buttonId');
// let forms1 = document.forms.form1;
// let forms2 = document.forms.form2;
// let input1 = forms1.input1;
// let input2 = forms1.input2;
// let input3 = forms2.input3;
// let input4 = forms2.input4;
//
//
// button.onclick = (ev) => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }



// =======================================================================================================================
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//

// function createTable (line, cell, tag) {
//     let table = document.createElement('table');
//     let tagTable = document.createElement(`${tag}`)
//
//     for (let i = 0; i < line; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cell; j++) {
//             let td = document.createElement('td');
//             td.style.width = '80px'
//             td.style.height = '20px'
//             td.style.border = '2px solid black'
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     tagTable.appendChild(table)
//     document.body.appendChild(tagTable)
//
// }
// createTable(20,5,'div')


// =======================================================================================================================
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let button = document.getElementById('button')
// button.onclick = ()=>{
//     let inputLineOfTable = document.forms.form.input1.value;
//     let inputCellOfTable = document.forms.form.input2.value;
//     let textOfCell = document.forms.form.input3.value;
//     createTable(inputLineOfTable,inputCellOfTable,textOfCell)
// }
//
// function createTable (line, cell, text) {
//     let table = document.createElement('table');
//     let div = document.createElement('div')
//     for (let i = 0; i < line; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cell; j++) {
//             let td = document.createElement('td');
//             td.style.width = '80px'
//             td.style.height = '20px'
//             td.style.border = '2px solid black'
//             td.innerText = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     div.appendChild(table)
//     document.body.appendChild(div)
//
// }



// =======================================================================================================================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let photoDiv = document.getElementById('photo');
// let leftBtn = document.getElementById('leftBtn');
// let rightBtn = document.getElementById('rightBtn');
// let img = document.createElement('img');
//
//
// let imgArr = document.getElementsByClassName('scale');
//
// let index = 0;
// img.src = imgArr[index].src
// img.width = 400;
// photoDiv.appendChild(img)
//
// rightBtn.onclick = () => {
//     index >= imgArr.length-1 ? index = 0 : index++
//     img.src = imgArr[index].src
// };
//
//
// leftBtn.onclick = () => {
//     index <= 0 ? index = imgArr.length-1 : index--;
//     img.src = imgArr[index].src
// };


// =======================================================================================================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['Бодай тебе чорти вхопили!', 'бовдур', 'вайло', 'знайдибiда'];
//
// let button = document.createElement('button');
// let input = document.createElement('input');
// document.body.appendChild(input);
// document.body.appendChild(button);
//
// input.style.width = '200px'
// button.style.width = '145px';
// button.style.height = '20px';
// button.style.display = 'block';
// button.innerText = 'check';
// button.style.backgroundColor = 'pink';
//
//
// button.onclick = () => {
//     for (const badWord of badWords) {
//         //////// if (input.value === badWord) alert('Трясця твоїй матері. НЕ МАТЮКАЙСЯ!!!')
//         if (input.value.includes(badWord)) alert('Трясця твоїй матері. НЕ МАТЮКАЙСЯ!!!')
//     }
// }


// =======================================================================================================================

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let badWords = ['Бодай тебе чорти вхопили!', 'бовдур', 'вайло', 'знайдибiда'];
//
// let button = document.createElement('button');
// let input = document.createElement('input');
// document.body.appendChild(input);
// document.body.appendChild(button);
//
// input.style.width = '200px'
// button.style.width = '145px';
// button.style.height = '20px';
// button.style.display = 'block';
// button.innerText = 'check';
// button.style.backgroundColor = 'pink';
//
//
// // console.log(arrInput);
// // let arrInput = input.value.split(', ')
// button.onclick = () => {
//     let arrInput =  input.value.split(' ');
//     console.log(arrInput)
//     for (const badWord of badWords) {
//         for (const word of arrInput) {
//             if (badWord === word) alert('Трясця твоїй матері. НЕ ЛАЙСЯ!!!')
//         }
//
//     }
// }

// =======================================================================================================================

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


// let h2Text = document.getElementsByTagName('h2');
// let div = document.createElement('div');
// let ol = document.createElement('ol');
//
// for (let i = 0; i < h2Text.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//
//     h2Text[i].setAttribute('id', `top${i}`);
//     a.innerText = h2Text[i].textContent;
//     a.href = `#top${i}`;
//
//     li.appendChild(a);
//     ol.appendChild(li);
//
// }
// div.appendChild(ol);
// document.body.appendChild(div);



// =======================================================================================================================
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let div = document.createElement('div')
// let button = document.createElement('button');
// let chk1 = document.createElement("input");
// let chk2 = document.createElement("input");
// let chk3 = document.createElement("input");
// chk1.setAttribute('type', 'checkbox');
// chk2.setAttribute('type', 'checkbox');
// chk3.setAttribute('type', 'checkbox');
// document.body.appendChild(chk1);
// document.body.appendChild(chk2);
// document.body.appendChild(chk3);
// document.body.appendChild(button);
//
// button.style.width = '50px';
// button.style.height = '20px';
// button.style.display = 'block'
//
// let filteredArr = JSON.parse(JSON.stringify(usersWithAddress));
// button.onclick = () => {
//     if (chk1.checked) filteredArr = filteredArr.filter(value =>  value.status === true);
//     if (chk2.checked) filteredArr = filteredArr.filter(value =>  value.age > 29);
//     if (chk3.checked) filteredArr = filteredArr.filter(value =>  value.address.city === 'Kyiv');
//     console.log(filteredArr)
// }
//
// document.body.appendChild(div)



// =======================================================================================================================
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
