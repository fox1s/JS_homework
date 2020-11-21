let timerDiv = document.getElementById('timer');

let minutes = 100;
let timer = setInterval(()=>{
    if (minutes >= 0) {
        console.log(minutes)
        timerDiv.innerText = minutes + ' хв.';
    } else {
        clearInterval(timer)
    }
    minutes--;
},1000)

let png = document.getElementById('pngDiv');

// png:hover {
//     -webkit-animation: spin 0.8s infinite linear;
// }
// @-webkit-keyframes spin {
//     0% {
//     -webkit-transform: rotate(0deg);
// }
//     100% {
//     -webkit-transform: rotate(360deg);
// }
// }

