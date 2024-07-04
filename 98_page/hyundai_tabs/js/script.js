// 요소 찾기
const btn1 = document.querySelector('#tabs>ul li:nth-child(1) a');
const btn2 = document.querySelector('#tabs>ul li:nth-child(2) a');
const btn3 = document.querySelector('#tabs>ul li:nth-child(3) a');
const btn4 = document.querySelector('#tabs>ul li:nth-child(4) a');

const cont1 = document.querySelectorAll('#tabs>div')[0];
const cont2 = document.querySelectorAll('#tabs>div')[1];
const cont3 = document.querySelectorAll('#tabs>div')[2];
const cont4 = document.querySelectorAll('#tabs>div')[3];
// console.log(cont1);
// console.log(cont2);

// 이벤트 처리
btn1.onclick = function () {
    removeF();
    cont1.classList.add('on');
}
btn2.onclick = function () {
    removeF();
    cont2.classList.add('on');
}
btn3.onclick = function () {
    removeF();
    cont3.classList.add('on');
}
btn4.onclick = function () {
    removeF();
    cont4.classList.add('on');
}

function removeF(){
    cont1.classList.remove('on');
    cont2.classList.remove('on');
    cont3.classList.remove('on');
    cont4.classList.remove('on');
}