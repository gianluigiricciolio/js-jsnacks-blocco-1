'use strict';

const digitsNumber = 4;
let number = "";
let digitsSum = 0;

while(number.length!=4){
    number=prompt(`Inserisci un numero di ${digitsNumber} cifre`);
    if (number.length == digitsNumber){
        for(let i=0; i < digitsNumber; i++){
            digitsSum+=Number(number[i]);
        }
    } else console.log(`Non sono ${digitsNumber} cifre`);
}
console.log(digitsSum);