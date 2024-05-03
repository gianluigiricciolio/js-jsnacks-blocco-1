'use strict';


const listaNumeri = [];
let somma=0;



for (let i = 0; i < 10; i++){
    listaNumeri[i]=parseInt(prompt (`inserire numero ${i}`));
}

for (let i = 0; i < 10; i++){
    somma=somma+listaNumeri[i];
}

