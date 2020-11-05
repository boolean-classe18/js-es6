const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

const colors = ['red', 'green', 'blue'];

// estraggo tutti i tipi di icona
const icon_types = [];
// scorro tutte le icone
icons.forEach((icon) => {
    // icon è l'icona corrente ed è un oggetto!
    // per ogni icona recupero il suo tipo
    // destrutturo icon e recupero il tipo
    const {type} = icon;
    // verifico se il tipo dell'icona corrente è già presente nell'array dei tipi
    if(!icon_types.includes(type)) {
        // se no, lo inserisco, altrimenti lo scarto e vado avanti con la prossima icona
        icon_types.push(type);
    }
});
console.log(icon_types);

// scorro tutti i tipi di icona
icon_types.forEach((type) => {
    // per ogni tipo di icona aggiungo una option alla select
    $('#icons-filter').append(`
        <option value="${type}">${type}</option>
    `);
});

// intercetto il cambio di selezione del tipo di icona
$('#icons-filter').change(() => {
    // recupero il tipo selezionato dall'utente
    const selected_type = $('#icons-filter').val();
    console.log(selected_type);

    // svuoto il contenitore delle icone
    $('#icons-container').empty();

    // verifico se l'utente ha effettivamente selezionato un tipo
    if(selected_type != '') {
        // visualizzo le icone del tipo corrispondente
        // recupero le icone corrispondeti al tipo scelto dall'utente
        const chosen_icons = icons.filter((icon) => {
            return selected_type == icon.type;
        });
        // stampo le icone corrispondenti al tipo scelto dall'utente
        chosen_icons.forEach((icon) => {
            print_icon(icon);
        });
    } else {
        // l'utente ha selezionato "all types"
        // visualizzo tutte le icone
        print_all_icons(icons);
    }

});

// scorro tutte le icone
print_all_icons(icons);

function print_all_icons(icons_array) {
    icons_array.forEach((icon) => {
        print_icon(icon);
    });
}

function print_icon(icon_object) {
    // console.log(icon);
    // destrutturo e recupero le chiavi name, prefix, family e type
    const {name, prefix, family, type} = icon_object;
    // recupero il colore corrispondere al tipo
    // recupero l'indice del tipo dell'icona all'interno dell'array dei tipi
    const type_index = icon_types.indexOf(type);
    // console.log(name, type_index);
    // recupero il colore corrispondente al tipo dell'icona corrente
    const icon_color = colors[type_index];
    // console.log(icon_color);

    // costruisco e appendo il tag <i> per l'icona corrente
    $('#icons-container').append(`
        <div class="icon">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color}"></i>
            <p>${name}</p>
        </div>
    `);
}
