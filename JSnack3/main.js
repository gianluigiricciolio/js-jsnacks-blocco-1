'use strict';


const listaNumeri = [];
let somma=0;



for (let i = 0; i < 10; i++){
    listaNumeri[i]=Number(prompt (`inserire numero ${i}`));
}

for (let i = 0; i < 10; i++){
    somma+=listaNumeri[i];
}

