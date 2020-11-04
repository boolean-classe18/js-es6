const cats = [
    {
        name: 'Adam',
        age: 0.3,
        color: '#00ffff',
        gender: 'male'
    },
    {
        name: 'Emily',
        age: 0.8,
        color: '#f700ff',
        gender: 'female'
    },
    {
        name: 'Willoby',
        age: 1.3,
        color: '#ff6600',
        gender: 'male'
    },
    {
        name: 'Poppy',
        age : 0.2,
        color: '#00ff00',
        gender: 'female'
    }
];

cats.forEach((cat) => {
    // cat è un oggetto e rappresenta l'elemento corrente

    // destrutturo l'oggetto cat per estrarre le chiavi
    let {name, color, gender, age} = cat;

    // scelgo il colore del fiocco in base al sesso
    // dichiaro la variabile fuori dalla if perché let ha il block scope!
    let ribbon_color;
    if(gender == 'female') {
        // se il gender é female => il colore del ribbon è pink
        ribbon_color = 'pink';
    } else {
        // altrimenti (se il gender é male) => il colore del ribbon è blue
        ribbon_color = 'blue';
    }

    // calcolo l'opacity del ribbon in base all'età
    let ribbon_opacity = age * 100;

    // aggiungo all'elemento corrente una chiave "ribbon" che rappresenta il fiocco
    // ogni fiocco deve avere un colore (pink o blue) e un'opacità
    cat.ribbon = {
        color: ribbon_color,
        opacity: ribbon_opacity
    };

    console.log(cat);

    // stampo tutti i gatti in pagina
    $('#cats-container').append(`
        <div style="color: ${color}">
            <i class="fas fa-2x fa-cat"></i>
            ${name}
        </div>
    `);
});


// estraggo da tutti i gatti solo quelli femmina
const female_cats = cats.filter((cat) => {
    // cat è un oggetto e rappresenta l'elemento corrente
    console.log(cat);
    // devo restituire true per copiare l'elemento nel nuovo array
    // false per scartarlo
    /*
    if(cat.gender == 'female') {
        return true;
    } else {
        return false;
    }
    */
    return cat.gender == 'female';
});
// equivalente a:
// const female_cats = cats.filter((cat) => cat.gender == 'female');
console.log(female_cats);

// stampo tutti i gatti femmina nel contenitore apposito
female_cats.forEach((cat) => {
    // recupero il contenitore dei gatti femmina
    let female_container = $('#female-cats-container');
    // stampo il gatto corrente nel contenitore
    print_cat(cat, female_container);
});


// estraggo da tutti i gatti solo quelli maschio
const male_cats = cats.filter((cat) => {
    // cat è un oggetto e rappresenta l'elemento corrente
    return cat.gender == 'male';
});
console.log(male_cats);

// stampo tutti i gatti maschio nel contenitore apposito
male_cats.forEach((cat) => {
    // recupero il contenitore dei gatti maschio
    let male_container = $('#male-cats-container');
    // stampo il gatto corrente nel contenitore
    print_cat(cat, male_container);
});

// funzione che stampa un gatto in un contenitore
function print_cat(cat_object, container) {
    // destrutturo l'oggetto cat per estrarre le chiavi name, color e ribbon
    let {name, color, ribbon} = cat_object;
    
    container.append(`
        <div style="color: ${color}">
            <i class="fas fa-2x fa-cat"></i>
            <i style="color: ${ribbon.color}; opacity: ${ribbon.opacity}%" class="fas fa-2x fa-ribbon"></i>
            ${name}
        </div>
    `);
}
