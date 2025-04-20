// Clase padre
class Vehiculo {
    tipo() {
       return('Tengo un vehiculo');
    }
};
// Clases hija
class Coche extends Vehiculo {
    tipo() {
       return('Tengo un coche');
    }
};

class Moto extends Vehiculo {
    tipo() {
       return('Tengo una moto');
    }
};

class Autobus extends Vehiculo {
    tipo() {
       return('Tengo un autobús');
    }
};

let coche1 = new Coche();
let moto1 = new Moto();
let autobus1 = new Autobus();

console.log(coche1.tipo());
console.log(moto1.tipo());
console.log(autobus1.tipo());
