//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function lowerNumber(first, second, third) {
//     if (first < second && first < third) return first;
//     if (second < first && second < third) return second;
//     if (third < second && third < first) return third;
// }
//
// let min = lowerNumber(5, 8, 9)
// console.log(min)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function upperNumber(first, second, third){
//     if (first > second && first > third) return first;
//     if (second > first && second > third) return second;
//     if (third > second && third > first) return third;
// }
// let max = upperNumber(5, 25, 3)
// console.log(max)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function number() {
//     let max = 0;
//     let min = arguments[0]
//     for (const i of arguments) {if (i > max) max = i;}
//     console.log(`max = ${max}`)
//     for (const j of arguments) { if(min > j) min = j; }
//     return min
// }
//
// let min = number(75, 7, 80, 8, 24);
// console.log(`min = ${min}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка виводить масив

// function printArr (array) {
//     console.log(array)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найбільше число з масиву

// function maxArr(arr) {
//     let upperNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (upperNumber < arr[i]) upperNumber = arr[i];
//     }
// return upperNumber;
//
// }
//
// console.log(maxArr([11, -2, 10, 25, 7]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка повертає найменьше число з масиву

// function minArr(arr) {
//         let minNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (minNumber > arr[i]) minNumber = arr[i];
//     }
// return minNumber;
// }
// console.log(minArr([5, 2, 3, 5, 7]));