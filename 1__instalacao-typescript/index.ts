const input__1 = document.getElementById('num__1') as HTMLInputElement;
const input__2 = document.getElementById('num__2') as HTMLInputElement;
const button__soma = document.getElementById('button__sum') as HTMLElement;

function sum(a: number, b: number){
    return a + b;
}

button__soma.addEventListener("click", function(){
    console.log(sum(Number(input__1.value), Number(input__2.value)));
});
