const hi=document.querySelector('h1');
const form = document.querySelector('#form');
const input1= document.querySelector('#calcular1');
const input2= document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#pResult');

form.addEventListener('submit', btnOnclick);

function btnOnclick(event){    
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML= "Resultado:" + sumaInputs;
}