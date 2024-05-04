'use strict';

let somma=0;
let media=0;
const totaleNum=10;

// sfrutto l'indice del for per scorrere e utilizzare i primi 10 numeri
for (let i=1; i <= totaleNum; i++){
    // somma+=i;
    somma = somma + i;
}

media=somma/totaleNum;

console.log(`La somma vale ${somma}`);
console.log(`La media vale ${media}`);