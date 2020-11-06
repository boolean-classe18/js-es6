// Creare 10 oggetti che rappresentano una zucchina;
// ogni zucchina è caratterizzata da: varietà, lunghezza e peso.
// Dividere in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    },
    {
        varieta: 'pippo',
        lunghezza: getRndInteger(10, 20),
        peso: getRndFloat(1, 4)
    }
];
console.log(zucchine);

// estraggo solo le zucchine con lunghezza minore di 15 cm
const zucchine_corte = zucchine.filter((zucchina) => zucchina.lunghezza < 15);
console.log(zucchine_corte);

// estraggo solo le zucchine con lunghezza maggiore (o uguale) di 15 cm
const zucchine_lunghe = zucchine.filter((zucchina) => zucchina.lunghezza >= 15);
console.log(zucchine_lunghe);

// sommo il peso totale delle zucchine corte
let somma_corte = sommaPesi(zucchine_corte);
console.log('totale peso zucchine corte = ' + somma_corte.toFixed(1));

// sommo il peso totale delle zucchine lunghe
let somma_lunghe = sommaPesi(zucchine_lunghe);
console.log('totale peso zucchine lunghe = ' + somma_lunghe.toFixed(1));

// funzione che calcola la somma dei pesi di un array di zucchine
function sommaPesi(zucchine_array) {
    let somma = 0;
    zucchine_array.forEach((zucchina) => {
        // destrutturo la zucchina corrente e recupero il suo peso
        const {peso} = zucchina;
        somma += peso;
    });
    return somma;
}

// funzione che restituisce un numero intero tra min e max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che restituisce un numero decimale tra min e max
function getRndFloat(min, max) {
  return Math.floor( (Math.random() * (max - min + 1) + min ) * 10) / 10;
}
