'use strict';

function saludossss() {
	console.log(this)
}

saludossss()

function DatosPersonales(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
}
const persona1 = new DatosPersonales('Jorge', 28);
console.log(persona1.nombre);