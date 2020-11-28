// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let text = "Hello World";
// function print (text) {
//     for (let i = 0; i < text.length; i++) {
//         const textElement = text[i];
//
//         setTimeout(()=>{
//             document.write(textElement)
//         }, Math.random()*(1-0.1) + 0.1)
//     }
// }
// print(text)

async function print(text) {
    for await (const textElement of text) {
        setTimeout(()=>{
            document.write(textElement)
        }, Math.random()*(1.5-0.6) + 0.6)
    }
}
print(text)

// function time(textElement) {
//     setTimeout(()=>{
//             document.write(textElement)
//         }, Math.random()*(1.5-0.6) + 0.6)
// }
