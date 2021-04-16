//assigning buttons

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btnAC = document.getElementById('btnAC');
const btnPeriod = document.getElementById('btnPeriod');
const btnEqual = document.getElementById('btnEqual');
const btnLPara = document.getElementById('btnLPara');
const btnRPara = document.getElementById('btnRPara');
const btnPercent = document.getElementById('btnPercent');

const btnMinus = document.getElementById('btnMinus');
const btnAdd = document.getElementById('btnAdd');
const btnDivide = document.getElementById('btnDivide');
const btnX = document.getElementById('btnX');

const interface = document.getElementById('interface');



//assigning function
const changeNumBtn0 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(0);
  interface.value = (arr.join(''));
};

const changeNumBtn1 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(1);
  interface.value = (arr.join(''));
};

const changeNumBtn2 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(2);
  interface.value = (arr.join(''));
};

const changeNumBtn3 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(3);
  interface.value = (arr.join(''));
};

const changeNumBtn4 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(4);
  interface.value = (arr.join(''));
};

const changeNumBtn5 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(5);
  interface.value = (arr.join(''));
};

const changeNumBtn6 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(6);
  interface.value = (arr.join(''));
};

const changeNumBtn7 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(7);
  interface.value = (arr.join(''));
};

const changeNumBtn8 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(8);
  interface.value = (arr.join(''));
};

const changeNumBtn9 = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(9);
  interface.value = (arr.join(''));
};

//need to create something that blocks multiple operations
// prevent multiple operators
const preventOpDup = () => {

  if (!Number(interface.value.slice(-1))) {
    return;
  }
};


//operation functions

const opBtnAdd = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('+');
  interface.value = (arr.join(''));
};

const opBtnMinus = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('-');
  interface.value = (arr.join(''));
};

const opBtnMuliply = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('*');
  interface.value = (arr.join(''));
};

const opBtnDivide = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('/');
  interface.value = (arr.join(''));
};

const opBtnPeriod = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('.');
  interface.value = (arr.join(''));
};

const opBtnPercent = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('%');
  interface.value = (arr.join(''));
};

const opBtnLPara = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push('(');
  interface.value = (arr.join(''));
};

const opBtnRPara = () => {
  let arr = [];
  arr[0] = interface.value;
  arr.push(')');
  interface.value = (arr.join(''));
};

const opBtnEqual = () => {
  interface.value = eval(interface.value)
};


const resetAC = () => {
  interface.value = 0;
}






// this function doesn't work. don't know why
// whenever the page refreshed any element with
// the event listener already activates but when
// clicked, it doesn't work.
// const changeNumBtn = (numm) => {
//   let arr = [];
//   arr[0] = interface.value;
//   arr.push(numm);
//   interface.value = (arr.join(''));
//   console.log('clicked');
// }



//assigning eventlisteners
btn0.addEventListener('click', changeNumBtn0)
btn1.addEventListener('click', changeNumBtn1)
btn2.addEventListener('click', changeNumBtn2)
btn3.addEventListener('click', changeNumBtn3)
btn4.addEventListener('click', changeNumBtn4)
btn5.addEventListener('click', changeNumBtn5)
btn6.addEventListener('click', changeNumBtn6)
btn7.addEventListener('click', changeNumBtn7)
btn8.addEventListener('click', changeNumBtn8)
btn9.addEventListener('click', changeNumBtn9)
btnAC.addEventListener('click', resetAC)
btnPeriod.addEventListener('click', opBtnPeriod)
btnLPara.addEventListener('click', opBtnLPara)
btnRPara.addEventListener('click', opBtnRPara)
btnPercent.addEventListener('click', opBtnPercent)
btnMinus.addEventListener('click',opBtnMinus)
btnAdd.addEventListener('click', opBtnAdd)
btnDivide.addEventListener('click', opBtnDivide)
btnX.addEventListener('click', opBtnMuliply)
btnEqual.addEventListener('click', opBtnEqual)