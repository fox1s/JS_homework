// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let arr1 = [1, 6, 5, 7, 55, 59];
// let arr2 = ['1', '6', '4', '55', '59'];
// let arr3 = [1, 6, 'dewdwd', true, 'efefe'];
//
// console.log(arr1, arr2, arr3)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'a';
// arr[1] = 56;
// arr[2] = true;
// arr[3] = 'a';
// console.log(arr)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i=0;i<10;i++){
//     k=i+1;
//     document.write(`<div>hello</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0;i<10;i++){
//     k=i+1;
//     document.write(`<div>hello ${k}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while (i<20) {
//     document.write(`<h1>hello</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     k = i+1;
//     document.write(`<h1>hello ${k}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]+' ');
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['d', 'fdf', 'fd', 'fd', '5g', '6hth', 'hth7', 'hth8', 'j9yj', '10ee'];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ' ');
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 'fdf', 2, 'fd', true, '6hth', 45, 'hth8', 98, '10ee'];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ' ');
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 'fdf', 2, 'fd', true, '6hth', 45, 'hth8', 98, '10ee'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean"){
//         document.write(arr[i] + ' ');
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 'fdf', 2, 'fd', true, '6hth', 45, 'hth8', 98, '10ee'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number"){
//         document.write(arr[i] + ' ');
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 'fdf', 2, 'fd', true, '6hth', 45, 'hth8', 98, '10ee'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string"){
//         document.write(arr[i] + ' ');
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'a';
// arr[1] = 56;
// arr[2] = true;
// arr[3] = 'a';
// arr[4] = false;
// arr[5] = 5;
// arr[6] = 9;
// arr[7] = 'aere';
// arr[8] = 9;
// arr[9] = true;
//
// let i=0;
// while (i<arr.length){
//     document.write(arr[i]+' ');
//     i++;
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let k;
// for (let i = 0; i < 10; i++) {
//     k = i + 1;
//     document.write(k + ' ');
//     console.log(k);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// let k;
// for (let i = 0; i < 100; i++) {
//     k = i + 1;
//     document.write(k + ' ');
//     console.log(k);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let k;
// for (let i = 0; i < 100; i = i + 2) {
//     k = i + 1;
//     document.write(k + ' ');
//     console.log(k);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i = i + 2) {
//     k = i + 2
//     document.write(k + ' ');
//
// }

// for (let i = 0; i < 100; i = i + 1) {
//     if (i % 2 === 0){
//         document.write(i + ' ');
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let k;
// for (let i = 0; i < 100; i = i + 2) {
//     k = i + 1
//     document.write(k + ' ');
//     console.log(k);
//
// }

// for (let i = 0; i < 100; i = i + 1) {
//     if (i % 2 !== 0){
//         document.write(i + ' ');
//         console.log(i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         console.log(`${i} хв ${j} сек `)
//
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 20; j++) {
//         for (let k = 0; k < 60; k++) {
//             console.log(`${i} год ${j} хв ${k} сек `);
//         }
//     }
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let word ='';
// for (let i = 0; i < arr.length; i++) {
//     word = word + arr[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let i=0;
// let word ='';
// while (i < arr.length) {
//     word = word + arr[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let word = '';
let arr = ['a', 'b', 'c'];
for ( let i of arr) {
    word = word + arr;
}
console.log(word);