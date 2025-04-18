listaCompra = [`peras`, `manzanas`,`platanos`, `limones`, `melones`, `sandías`]
for (let i = 0; i < listaCompra.length; i++) {
	console.log(listaCompra[i]);
}

const datosPersonales = { 
	nombre: `Jorge`,
	apellido: `Domínguez`,
	edad: 28,
	estudios: `Universitarios`
};
for (let clave in datosPersonales) {
	console.log(`${clave}: ${datosPersonales[clave]}`);
}

const frutas = [`peras`, `manzanas`,`plátanos`, `limones`, `melones`, `sandías`];
for (let fruta of frutas) {
	console.log(fruta);
}



var nombre = "Jorge";
console.log(nombre);
var nombre = "Ángel";
console.log(nombre);

const fruta = "Manzana";
console.log(fruta);
fruta = "Plátano";
console.log(fruta);