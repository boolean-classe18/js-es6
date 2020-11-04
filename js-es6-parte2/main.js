/*

destrutturazione di un oggetto

*/
let studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30,
    email: 'mario.rossi@gmail.com'
};
// destrutturo l'oggetto recuperando solo le chiavi che mi servono, senza un ordine particolare
let {nome, email, cognome} = studente;
console.log(nome); // Mario
console.log(cognome); // Rossi
console.log(email); // mario.rossi@gmail.com

const studenti = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 30,
        email: 'mario.rossi@gmail.com'
    },
    {
        nome: 'Luigi',
        cognome: 'Verdi',
        eta: 25,
        email: 'luigi.verdi@gmail.com'
    }
];
// ciclo tutti gli elementi dell'array
for (let i = 0; i < studenti.length; i++) {
    // recupero l'elemento corrente, che è un oggetto studente
    let studente_corrente = studenti[i];
    // destrutturo lo studente corrente e ne recupero solo il nome e il cognome
    let {nome, cognome} = studente_corrente;
    console.log(nome, cognome); // Mario Rossi (1a iteraz.) - Luigi Verdi (2a iteraz.)
}


/*

destrutturazione di un array

*/
//             0        1          2           3           4          5       6      7      8
const personaggi = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone', 'minnie', 'qui', 'quo', 'qua'];
let [personaggio1, personaggio2] = personaggi;
console.log(personaggio1); // pippo
console.log(personaggio2); // pluto


const cognomi = ['Rossi', 'Verdi', 'Neri', 'Bianchi', 'Gialli'];
let [cognome1, , cognome2] = cognomi; // per saltare un elemento, lascio un "buco"
console.log(cognome1); // Rossi
console.log(cognome2); // Neri


/*

forEach

*/
const nomi = ['pippo', 'pluto', 'paperino'];
nomi.forEach((element, index, array) => { // arrow function
    console.log(element); // elemento corrente
    console.log(index); // indice corrente
    console.log(array); // array completo
});

const cats = [
    {
        name: 'Jerry',
        color: 'Gray'
    },
    {
        name: 'Felix',
        color: 'Black and White'
    },
    {
        name: 'Garfield',
        color: 'Orange'
    },
];
cats.forEach((cat) => { // cat è l'elemento corrente
    console.log(`
        ${cat.name}'s color is ${cat.color}
    `);
});
// equivalente a:
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i].name + "'s color is " + cats[i].color);
}


/*

funzione map()

*/
const numeri = [1, 2, 3, 4, 5];
let numeri_quadrati = numeri.map((numero) => numero * numero); // arrow function con return implicito
console.log(numeri_quadrati);
// equivalente a:
let numeri_quadrati2 = [];
for (let i = 0; i < numeri.length; i++) {
    let numero = numeri[i];
    numeri_quadrati2.push(numero * numero);
}
console.log(numeri_quadrati2);


/*

funzione filter()

*/
const numeri2 = [1, 2, 3, 4, 5];
let numeri_pari = numeri2.filter((numero) => numero % 2 == 0); // arrow function con return implicito
console.log(numeri_pari);
// equivalente a:
let numeri_pari2 = [];
for (var i = 0; i < numeri2.length; i++) {
    let numero = numeri2[i];
    if(numero % 2 == 0) {
        numeri_pari2.push(numero);
    }
}
console.log(numeri_pari2);
