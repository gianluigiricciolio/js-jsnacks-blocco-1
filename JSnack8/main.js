'use strict';

const digitsNumber = 4;
let number = "";
let digitsSum = 0;
let buffer;

while(number.length!=4){
    buffer=prompt(`Inserisci un numero di ${digitsNumber} cifre`);
    if (!isNaN(buffer)){
        if (buffer.length == digitsNumber){
            number=buffer;
            for(let i=0; i < digitsNumber; i++){
                digitsSum+=Number(number[i]);
            }
        } else console.log(`Non sono ${digitsNumber} cifre`);
    } else console.log('Non sono numeri');
    
}
console.log(`La loro somma vale ${digitsSum}`);