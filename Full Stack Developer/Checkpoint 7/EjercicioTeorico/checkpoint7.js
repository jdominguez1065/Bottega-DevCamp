// Tipado dinámico

let fruta = 'melon';   // La variable fruta es una cadena.
console.log(fruta);
fruta = 27;   // Ahora es un número entero.
console.log(fruta);

// Basado en objetos y funciones

// Se define la función suma, que suma dos números.
function suma(num1, num2) {
    console.log(num1 + num2);
  }
  
suma(5,3);

// String

let frutas = "Tomate"
frutas = 'Tomate'
frutas = `Tomate`

let nombre = 'Jorge'
const saludo = `Hola ${nombre}`
console.log(saludo)


// Boolean

let num1 = 10
let num2 = 8
let boolean = num1 < num2
console.log(boolean)

// Undefined

let frutass;
console.log(frutass); 

// Symbol

console.log(Symbol('melon') === Symbol('melon'));
console.log(Symbol(37) === Symbol(37));
console.log(Symbol() === Symbol());

// Object

const Coche = {
  Marca: 'Honda',
  Modelo: 'Accord',
  Potencia: 240,
};
console.log(Coche.Marca);
console.log(Coche['Modelo']);
console.log(Coche.Potencia);

// Array 

const frutasss = ["melon", "pera", "sandia"];
console.log(frutasss[0]);

// 3. Funciones string

// length

let texto = "Me llamo Jorge, tengo 28 años y me gusta andar en bici";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.includes('bici'));
console.log(texto.includes('avion'));

let texto2 = "Mis aficiones son la bici, el tenis y el baloncesto";
console.log(texto2.indexOf('aficiones'));
console.log(texto2.slice(18,));
console.log(texto2.replace('tenis', 'futbol'));
console.log(texto2.split(','));
console.log(texto2.charAt(25));
console.log(texto2.startsWith('Mis aficiones son'));
console.log(texto2.endsWith('el tenis y el baloncesto'));
console.log(texto2.concat('asi como el futbol'));

let texto3 = "			Mi clave del banco es 1234						";
console.log(texto3);
console.log(texto3.trim());


const edad = 17;
if (edad > 18) {
console.log('Tiene edad para sacarse el carné de conducir.')}


if (edad >= 16 && edad < 18) {
	console.log('Tiene edad para sacarse el carné de conducir de motos pero no de coches.')
} else if (edad >=18) {
	console.log('Tiene edad para sacarse el carné de conducir de coches y motos.')
} else {
	console.log('No puede conducir ningún vehículo a motor.')
}





const edads = 17;
const valorSiVerdadero = 'Tiene edad para sacarse el carné de conducir de coches y motos.';
const valorSiFalso = 'Tiene edad para sacarse el carné de conducir de motos pero no de coches.';
const valorRestante = 'No puede conducir ningún vehículo a motor.';
edads > 18 ? console.log(valorSiVerdadero) : (edads >= 16 ? console.log(valorSiFalso) : console.log(valorRestante)) 