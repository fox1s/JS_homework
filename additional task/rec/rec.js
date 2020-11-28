// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает
// в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним
//     на одном уровне

let main = document.getElementById('main');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n31 = document.getElementById('n31');
let n32 = document.getElementById('n32');
let arr = [main, n1, n2, n31, n32];

let up = document.createElement('button');
let down = document.createElement('button');
up.innerText = 'Up';
down.innerText = 'Down';
document.body.appendChild(up);
document.body.appendChild(down);


function navig(arr, i) {

    arr[i].style.backgroundColor = 'red';
    arr[i - 1].style.backgroundColor = 'pink';
    up.onclick = () => {
        i++
        navig(arr, i)

    }


}

navig(arr, 1)