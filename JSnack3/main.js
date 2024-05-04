'use strict';

// valore che somma tutti gli ingressi
let somma=0;
// numero che indica il totale degli input
let numeroInput=10;

for (let i = 0; i < numeroInput; i++){
    somma+=Number(prompt (`inserire numero ${i}`));
}

