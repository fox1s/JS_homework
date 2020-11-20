// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

//===============================================         CALLBACK         =============================================
//
// function weakUp(day, cb) {
//     console.log('Проснувся')
//
//     setTimeout(() => {
//         if (day !== 'чудовий') {
//             cb('жахливий день, не збираюсь нічого робити!!!', null);
//             return;
//         }
//         cb(null, 'чудовий');
//
//     }, 500)
//
// }
//
//
// function goEat(eat, cb) {
//     console.log('я пішов істи');
//     setTimeout(() => {
//         if (!eat) {
//             cb('блін, нема шо їсти')
//             return
//         }
//         cb(null, 'поїв')
//     }, 1000)
//
// }
//
// function brushTeeth(teethPasta, cb) {
//     setTimeout(() => {
//         console.log('йду чистити зуби');
//         if (!teethPasta) {
//             cb('пасти нема!!!!')
//             return
//         }
//         cb(null, 'почистив')
//     }, 500)
// }
//
//
// function goStudyUniver(cb) {
//     console.log('пішов вчитись');
//     setTimeout(() => {
//         cb(null, 'який же брєд в тому універі вчать, нахєр мені на кібербезпеці сране обж????????')
//     }, 1000)
// }
//
//
// function DoOctenHomework(time, cb) {
//     setTimeout(() => {
//         console.log('йду робити дз на октен курси');
//         if (time < 3) {
//             cb('ніц не встигну, прийдеться робити дз вночі(((((((((');
//             return
//         }
//         cb(null, 'купа часу, все встигаю)')
//     }, 500)
// }
//
//
// function relaxation(extraTime, cb) {
//     console.log('дивлюсь чи є час віпочити....')
//     if (!extraTime) {
//         cb(true)
//         return
//     }
//     cb(null)
//
// }
//
// function whenPlayNavi(time, cb) {
//     console.log(`наві грають в ${time} год`)
//     setTimeout(() => {
//         if (time > 18 && time < 22) {
//             cb('знову не подивлюсь((((((')
//             return
//         }
//         cb(null, 'увііііі встигаю')
//     }, 300)
// }
//
// function goOnVitiaLecture(topic, cb) {
//     setTimeout(() => {
//         console.log('чи легка тема???????')
//         if (topic !== 'легка') {
//             cb('знов 3 години сиіти')
//             return
//         }
//         cb(null, 'юхуууууу швидка лекція, всього 2 годинеки')
//     }, 300)
// }
//
//
// function goSleep(cb) {
//     setTimeout(() => {
//         cb(null, 'sleep')
//     })
// }
//
//
// weakUp('чудовий', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`який ${data} день!!!`);
//
//     goEat(true, (err, data) => {
//         if (err) {
//             console.log(err)
//             console.log('треба шось намутити')
//             return
//         }
//         console.log(data);
//
//         brushTeeth(true, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(data)
//
//             goStudyUniver((err, data) => {
//                 if (err) {
//                     return
//                 }
//                 console.log(data)
//
//                 DoOctenHomework(3, (err, data) => {
//                     if (err) {
//                         console.log(err)
//                         return
//                     }
//                     console.log(data)
//
//                     relaxation(true, (err, data) => {
//                         if (err) {
//                             console.log('який відпочинок, ніц не встигаю')
//                             return
//                         }
//                         console.log('релаксую')
//
//                         whenPlayNavi(23, (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                                 return
//                             }
//                             console.log(data)
//
//                             goOnVitiaLecture('легка', (err, data) => {
//                                 if (err) {
//                                     console.log(err)
//                                     return
//                                 }
//                                 console.log('так')
//                                 console.log(data)
//
//                                 goSleep((err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                     }
//                                     console.log('go ' + data)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


//===============================================         PROMISE         ==============================================

function weakUp(day) {
    return new Promise((resolve, reject) => {
        console.log('Проснувся')
        setTimeout(() => {
            if (day !== 'чудовий') {
                reject('жахливий день, не збираюсь нічого робити!!!');
                return;
            }
            resolve('чудовий');

        }, 500)
    })
}

function goEat(eat) {
    return new Promise((resolve, reject) => {
        console.log('я пішов істи');
        setTimeout(() => {
            if (!eat) {
                reject('блін, нема шо їсти')
                return
            }
            resolve('поїв')
        }, 1000)
    })
}


function brushTeeth(teethPasta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('йду чистити зуби');
            if (!teethPasta) {
                reject('пасти нема!!!!')
                return
            }
            resolve('почистив')
        }, 500)
    })
}


function goStudyUniver() {
    return new Promise((resolve) => {

        console.log('пішов вчитись');
        setTimeout(() => {
            resolve('який же брєд в тому універі вчать, нахєр мені на кібербезпеці сране обж????????')
        }, 1000)
    })
}


function DoOctenHomework(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('йду робити дз на октен курси');
            if (time < 3) {
                reject('ніц не встигну, прийдеться робити дз вночі(((((((((');
                return
            }
            resolve('купа часу, все встигаю)')
        }, 500)
    })

}


function relaxation(extraTime) {
    return new Promise((resolve, reject) => {
        console.log('дивлюсь чи є час віпочити....')
        if (!extraTime) {
            reject('нема часцу байдикувати!')
            return
        }
        resolve('релаксую)))))))))')
    })
}

function whenPlayNavi(time) {
    return new Promise((resolve, reject) => {

        console.log(`наві грають в ${time} год`)
        setTimeout(() => {
            if (time > 18 && time < 22) {
                reject('знову не подивлюсь((((((')
                return
            }
            resolve('увііііі встигаю')
        }, 300)
    })


}

function goOnVitiaLecture(topic) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('чи легка тема???????')
            if (topic !== 'легка') {
                reject('блін, знов 3 години сиіти')
                return
            }
            resolve('юхуууууу швидка лекція, всього 2 годинки')
        }, 300)
    })
}


function goSleep() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve('sleep')
        })
    })
}


weakUp('чудовий')
    .then(day => {
        console.log(`який ${day} день!!!`)
        return goEat(true)
    })
    .then(eat => {
        console.log(eat)
        return brushTeeth(true)
    })
    .then(teethPasta => {
        console.log(teethPasta)
        return goStudyUniver()
    })
    .then(study => {
        console.log(study)
        return DoOctenHomework(3)
    })
    .then(homework => {
        console.log(homework)
        return relaxation(12)
    })
    .then(relax => {
        console.log(relax)
        return whenPlayNavi(14)
    }).then(time => {
    console.log(time)
    return goOnVitiaLecture('легка')
})
    .then(lecture => {
        console.log(lecture)
        return goSleep()
    })
    .then(sleep => {
        console.log(sleep)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        setTimeout(() => {
            console.log('Добраніч')
        }, 1000)

    })
//===============================================         асинк авейт         ==============================================
