'use strict';


const listaNumeri = [];
let somma;



for (let i = 0; i < 10; i++){
    listaNumeri[i]=parseInt(prompt('inserire numero ${i}'));
}

for (let i = 0; i < 10; i++){
    somma+=listaNumeri[i];
}

