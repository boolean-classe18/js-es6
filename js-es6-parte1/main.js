/*

variabili const

*/
const a = 5;
console.log(a);
// a = 6; // errore! => Assignment to constant variable.


/*

array const

*/
const array = [1, 2, 3];
// array = [4, 5, 6]; // errore! => Assignment to constant variable.
// posso aggiungere un nuovo elemento in un array const
array.push(4);
// posso modificare un elemento di un array const
array[0] = 5;
console.log(array);


/*

oggetto const

*/
const studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30
};
// studente = {nome: 'Luigi', cognome: 'Verdi', eta: 28}; // errore! => Assignment to constant variable.
// posso aggiungere una nuova proprietà ad un oggetto const
studente.email = 'mario.rossi@gmail.com';
// posso modificare una proprietà di un oggetto const
studente.eta = 20;
console.log(studente);


/*

block scoping e variabili

*/
console.log(miaFunzione());

function miaFunzione() {
    var numero = Math.floor(Math.random() * 10);
    if(numero % 2 == 0) {
        let pari = true;
    } else {
        let pari = false;
    }
    // return pari; // errore! => pari is not defined
    return numero;
}


/*

varibili let vs. variabili var

*/
for (var i = 0; i < 10; i++) {
    console.log(i); // stampa i numeri da 0 a 9
}
console.log('i alla fine del ciclo vale: ' + i); // alla fine del ciclo i vale 10

for (let j = 0; j < 10; j++) {
    console.log(j); // stampa i numeri da 0 a 9
}
// console.log('j alla fine del ciclo vale: ' + j); // errore! => j is not defined

let k = 'pippo';
for (let k = 0; k < 10; k++) {
    console.log(k); // stampa i numeri da 0 a 9
}
console.log('k alla fine del ciclo vale: ' + k); // alla fine del ciclo k vale "pippo"!

console.log(nome1); // undefined
var nome1 = 'pippo'; // variabile soggetta a "hoisting"

// console.log(nome2); // errore! => Cannot access 'nome2' before initialization
let nome2 = 'pluto'; // variaible non soggetta a "hoisting"


/*

template literal

*/
let stringa1 = 'Qui';
let stringa2 = 'Qua';
console.log(
    `
    ${stringa1} Quo ${stringa2}
    andarono al mercato
    `
);
// senza backtick posso scrivere così:
console.log('\n\t' + stringa1 + ' Quo ' + stringa2 + '\n\tandarono al mercato\n\n');


/*

arrow functions

*/
// funzione con sintassi es5.1
function somma1() {
    return 10 + 5;
}
// arrow function con più istruzioni
const somma2 = () => {
    console.log('dentro somma2');
    return 10 + 5;
}
// arrow function con un'unica istruzione => il return è implicito!
const somma3 = () => 10 + 5;

var risultato1 = somma1();
console.log(risultato1); // 15

var risultato2 = somma2();
console.log(risultato2); // 15

var risultato3 = somma3();
console.log(risultato3); // 15

document.getElementById('bottone').addEventListener('click', function() {
    console.log('cliccato 1');
    console.log(this); // <button id="bottone">cliccami</button>
});

document.getElementById('bottone').addEventListener('click', () => {
    console.log('cliccato 2');
    console.log(this); // oggetto window
});

const miaFunzione2 = () => 'pippo';
console.log(miaFunzione2()); // pippo


/*

parametro rest

*/
function miaFunzione3(...parametri) {
    console.log(parametri);
}
miaFunzione3('uno', 3, {name: 'pippo'}); // provoca la stampa di: ['uno', 3, {name: 'pippo'}]


/*

operatore spread con array

*/
const array1 = [3, 5, 1];
const array2 = [8, 9, 15];
let array3 = [...array1,...array2];
console.log(array3); // [3, 5, 1, 8, 9, 15]


/*

operatore spread con oggetti

*/
const oggetto1 = {nome: 'palla', peso: 50};
const oggetto2 = {...oggetto1, colore: 'blu'};
console.log(oggetto2); // {nome: "palla", peso: 50, colore: "blu"}
const oggetto3 = {...oggetto2, prezzo: 2}
console.log(oggetto3); // {nome: "palla", peso: 50, colore: "blu", prezzo: 2}


/*

creazione oggetti con chiavi = nome variabili

*/
let nome = 'Mario';
let cognome = 'Rossi';
let eta = 30;

let studente1 = {
    nome,
    cognome,
    eta
};
console.log(studente1); // {nome: "Mario", cognome: "Rossi", eta: 30}


/*

creazione oggetti con chiavi dinamiche

*/
let nome_proprieta = 'email';

let studente2 = {
    nome: 'Luigi',
    cognome: 'Verdi',
    eta: 29,
    [nome_proprieta]: 'luigi.verdi@gmail.com'
};
console.log(studente2); // {nome: "Luigi", cognome: "Verdi", eta: 29, email: "luigi.verdi@gmail.com"}
