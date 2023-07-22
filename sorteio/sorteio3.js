const btn = document.getElementById('gerar');

btn.addEventListener('click', function sortear(){
    let numeros = [];
    let min = 0; 
    let max = 25;

while(numeros.length < 15){
    let numerosSorteados = Math.floor(Math.random() * (max - min +1) + min);
    if(numeros.indexOf(numerosSorteados) === -1){
    numeros.push(numerosSorteados);
}}

numeros.sort(function(a, b){
    return a - b;
})
let numeroGerado = document.getElementById('num');
numeroGerado.innerHTML = numeros.join(',')
})