'use strict';

// Crea un array vuoto atto a contenere numeri dispari
const listaDispari = [];
// Creo un array vuoto buffer per contenere gli inserimenti
const listaInserimenti = [];
// definisco numero massimo di inserimenti
const numInserimenti=6;

// Chiedi per 6 volte all’utente di inserire un numero

for (let i=0; i < numInserimenti; i++ ){
    let buffer = prompt(`Inserisci il numero ${i+1} di ${numInserimenti} `);
    if( !isNaN (Number(buffer) )){
        listaInserimenti[i] = buffer;
        console.log(listaInserimenti[i]);
    }
    else{
        console.log('This is not a number')
        i--;
    }
}

// Se è dispari inseriscilo nell’array

for (let i=0; i < 6; i++ ){
    if(listaInserimenti[i]%2!=0){
        listaDispari.push(listaInserimenti[i]);
    }
}

// Stampa in console l'array risultante

console.log(listaDispari);