'use strict';

const parola1 = prompt('Inserire parola 1');
const parola2 = prompt('Inserire parola 2');

if(parola1.length>parola2.length){
    console.log(parola2);
    console.log(parola1);
}
else {
    console.log(parola1);
    console.log(parola2);
}