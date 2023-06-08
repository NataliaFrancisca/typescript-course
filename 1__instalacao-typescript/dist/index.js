"use strict";
const input__1 = document.getElementById('num__1');
const input__2 = document.getElementById('num__2');
const button__soma = document.getElementById('button__sum');
function sum(a, b) {
    return a + b;
}
button__soma.addEventListener("click", function () {
    console.log(sum(Number(input__1.value), Number(input__2.value)));
});
