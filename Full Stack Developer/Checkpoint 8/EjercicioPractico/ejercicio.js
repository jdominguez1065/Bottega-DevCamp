/*
Ejercicio 1
    Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”.
*/

var miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

/*
Ejercicio 2
    Cree un bucle while que recorra la misma lista y también imprima los nombres.
*/

let i = 0;
while (i < miLista.length) {
    console.log(miLista[i]);
    i++;
}

/* 
Ejercicio 3
    Cree una función de flecha que devuelva "Hola mundo".
*/

const saludo = () => {
    console.log('Hola mundo')
};

saludo();