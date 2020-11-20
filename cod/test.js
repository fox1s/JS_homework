// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
//
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
// filtredArr = JSON.parse(JSON.stringify(usersWithAddress));
// // button.onclick = () => {
// //     if (chk1.checked) filtredArr = filtredArr.filter(value =>  value.status === true);
// //     if (chk2.checked) filtredArr = filtredArr.filter(value =>  value.age > 29);
// //     if (chk3.checked) filtredArr = filtredArr.filter(value =>  value.address.city === 'Kyiv');
// //     console.log(filtredArr)
// // }
//
//
//
//
//
// chk1.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.status === true
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
//     return filter
// }
//
// chk2.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.age > 29
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
// }
//
// chk3.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.address.city === 'Kyiv'
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
// }
//
//
//
//
//
//
// chk1.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.status === true
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
//     return filter
// }
//
// chk2.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.age > 29
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
// }
//
// chk3.onclick = () => {
//     let filter = usersWithAddress.filter(value => {
//         return value.address.city === 'Kyiv'
//     })
//     filter.forEach(value => {
//         let p = document.createElement('p');
//         p.innerText = value.name + ' ' + value.age + ' ' + value.address.city;
//         div.appendChild(p);
//     });
// }
//
//
// document.body.appendChild(div)



// =======================================================================================
// використовуєтсья чілдрегн в ост строчках коду
// let form = document.forms.form;
// let input = form.inputText;
// let checkbox = form.checkbox;
// let radio1 = form.radio1;
// let radio2 = form.radio2;
// let textarea = form.textarea;
//
// revers(form)
// // input.oninput = (ev) => {
// //     localStorage.setItem('inputText', ev.target.value)
// // }
// function saveForm (tag) {
//     for (let i = 0; i < tag.length; i++) {
//         if (tag[i].type === 'checkbox' || tag[i].type === 'radio') {
//             tag[i].checked
//                 ? tag[i].value = true
//                 : tag[i].value = false
//         }
//         localStorage.setItem(tag[i].id, tag[i].value);
//     }
// }
//
// // function revers (tag) {
// //     for (let i = 0; i < localStorage.length; i++) {
// //         console.log(tag[i].id)
// //         if (localStorage.hasOwnProperty(tag.children[i].id)) {
// //             tag.children[i].value = localStorage.getItem(tag.children[i].id)
// //         }
// //         // console.log(tag[i].id)
// //     }
// // }