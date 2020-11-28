// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea = document.getElementById('text');
// textarea.value = localStorage.getItem('inputText');
// textarea.oninput = ev => {
//     localStorage.setItem('inputText', ev.target.value);
// }


//======================================================================================================================
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let form = document.forms.form;
// let input = form.inputText;
// let checkbox = form.checkbox;
// let radio1 = form.radio1;
// let radio2 = form.radio2;
// let textarea = form.textarea;
//
// revers(form)
//
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
//
//
// function revers (tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag[i].id)) {
//             console.log(i, tag[i].value,localStorage.getItem(tag[i].id))
//             tag[i].value = localStorage.getItem(tag[i].id)
//             if (tag[i].value === 'true'){
//                 tag[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }


//======================================================================================================================
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textarea = document.getElementById('textarea');
// let btnSave = document.getElementById('btnSave')
// let div = document.getElementById('div')
// let btnLeft = document.createElement('button');
// let btnRight = document.createElement('button');
//
// btnLeft.style.height = '30px';
// btnLeft.style.width = '30px';
// btnLeft.style.backgroundColor = 'yellow';
// btnLeft.innerHTML = '<b>  <-  </b>';
//
//
// btnRight.style.height = '30px';
// btnRight.style.width = '30px';
// btnRight.style.backgroundColor = 'yellow';
// btnRight.innerHTML = '<b>  ->  </b>';
//
//
// btnSave.onclick = ev => {
//     localStorage.setItem(localStorage.length+1, textarea.value)
//     div.appendChild(btnLeft)
//     div.appendChild(btnRight)
// }
// btnLeft.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         console.log(key)
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === textarea.value){
//                 index = key;
//             }
//         }
//     }
//     textarea.value = localStorage.getItem(index - 1)
// }
//
//
// btnRight.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === textarea.value){
//                 index = key;
//             }
//         }
//     }
//     textarea.value = localStorage.getItem(+index+1)
//
// }


//======================================================================================================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта

const ARRAY_USERS = 'ARRAY_USERS';
let tempUser = {};
const content = document.getElementById('content');
const form1 = document.forms.form1;
form1.submit1.onclick = ev => {
    // ev.preventDefault();
    let person = {...tempUser};
    tempUser = {};
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            person[form1Element.name] = form1Element.value;
        }
    }
    if (!person.id) {
        person.id = new Date().getTime();
    }
    saveUser(person)
}
getDataFromLst();

function saveUser(user) {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        const find = arrayUsers.find(value => value.id === user.id);
        if (find) {
            const filter = arrayUsers.filter(value => value.id !== user.id)
            filter.push(user)
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))


        } else {
            arrayUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers))
        }
    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]))

    }
}


function getDataFromLst() {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for (const user of arrUser) {
            content.appendChild(createDivPerson(user))
        }
    }
}

function createDivPerson(user) {
    const div = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = key + ' : ' + user[key];
            div.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement('p');
            p.innerText = key + ' : ' + user[key];
            div.appendChild(p);
        }
    }

    div.style = "width : 300px; border : red 1px solid; float : left"
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');
    b1.innerText = 'Edit';
    b2.innerText = 'Delete';
    b1.onclick = () => {
        editUser(user.id)
    }
    b2.onclick = () => {
        deleteUser(user.id)
    }


    div.appendChild(b1)
    div.appendChild(b2)

    return div
}


function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const filter = parse.filter(user => user.id !== id);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))
    location.reload()
}

function editUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const user = parse.find(user => user.id === id);
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            for (const key in user) {
                if (form1Element.name === key) {
                    form1Element.value = user[key];
                }
            }
        }

    }
    tempUser = user;
}














// ==============================================================================
//
// let button1 = document.getElementById('btnBook')
// let form = document.forms.form;
// let fio = form.fio;
// let number = form.number;
// let email = form.Email;
// let firm = form.firm;
// let depart = form.depart;
// let birthday = form.birthday;
//
// let table = document.createElement('table');
// table.style.border = '2px solid pink'
//
//
// let index = 0;
// button1.onclick = (ev) => {
//     ev.preventDefault()
//     let value = `${fio.value}-&-${number.value}-&-${email.value}-&-${firm.value}-&-${depart.value}-&-${birthday.value}`
//     localStorage.setItem(fio.value, value);
//     let user1 = localStorage.getItem(fio.value).split('-&-');
//
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 6; i++) {
//         let td = document.createElement('td');
//         td.innerText = user1[i];
//         td.style.border = '2px solid pink';
//         td.style.padding = '0 30px 0 30px '
//         td.style.margin = '10px 50px 0 50px '
//         tr.appendChild(td)
//         if (i === 5) {
//             index++;
//             createBtnDel(tr)
//             createBtnEdit(tr)
//         }
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)
//
//
// function createBtnDel(tr) {
//     let button = document.createElement('button')
//     button.setAttribute('class', `deleteBtn`)
//     button.innerText = 'Видалити';
//     button.style.backgroundColor = '#ffcfd0';
//     button.style.border = '2px solid pink';
//     button.style.paddingBottom = '5px';
//     button.style.marginLeft = '20px';
//     button.onclick = () => {
//         tr.style.display = 'none'
//     }
//     tr.appendChild(button);
//     return tr
// }
//
// function createBtnEdit(tr) {
//     let buttonEd = document.createElement('button')
//     buttonEd.setAttribute('class', `EditBtn`)
//     buttonEd.innerText = 'Редагувати';
//     buttonEd.style.backgroundColor = '#ffcfd0';
//     buttonEd.style.border = '2px solid pink';
//     buttonEd.style.paddingBottom = '5px';
//     buttonEd.style.marginLeft = '2px';
//     tr.appendChild(buttonEd);
//     buttonEd.onclick = (ev) => {
//         // console.log(ev.target);
//         editForm(tr, ev)
//     }
//     return tr
// }
//
// function editForm(tr, ev) {
//     // let div = document.createElement('div');
//     // div.innerText = 'kkkkkkkk'
//     // div.style.display = 'inine-block'
//     // // tr.style.display = 'none'
//     // tr.appendChild(div)
//     // let user1 = localStorage.getItem(fio.value).split('-&-');
//     console.log(localStorage.getItem(fio.value).split('-&-'))
//
//     let arr = [];
//     let arr2 = [];
//     arr2.push(localStorage.getItem(fio.value).split('-&-'))
//     for (let i = 0; i < 6; i++) {
//         arr.push(tr.children[i].textContent)
//     }
//     console.log(arr)
//     console.log(arr2)
//
//     for (let i = 0; i < 6; i++) {
//
//
//         let input = document.createElement('input');
//         input.value = 'lllssssssssssssss'
//         tr.children[i].textContent = '';
//         tr.children[i].appendChild(input);
//
//
//     }
//
//
//     return tr
// }
//
// // function editForm(tr) {
// //     let div = document.createElement('div');
// //     div.innerText = 'kkkkkkkk'
// //     div.style.display = 'inine-block'
// //     // tr.style.display = 'none'
// //     tr.appendChild(div)
// //     // let user1 = localStorage.getItem(fio.value).split('-&-');
// //
// //     // let arr = [];
// //     // let arr2 = [];
// //     // for (let i = 0; i < 6; i++) {
// //     //     arr.push(tr.children[i].textContent)
// //     //     arr2.push(localStorage.getItem(fio.value).split('-&-'))
// //     // }
// //     // console.log(arr2)
// //
// //     // for (let i = 0; i < 6; i++) {
// //     //     if (arr[i] = ) {
// //     //
// //     //     }
// //
// // }
// // for (let i = 0; i < 6; i++) {
// //     let input = document.createElement('input');
// //     input.value = 'lllssssssssssssss'
// //     tr.children[i].textContent = '';
// //     tr.children[i].appendChild(input);
// //
// //
// // }
// //
// //
// // return tr
// // }