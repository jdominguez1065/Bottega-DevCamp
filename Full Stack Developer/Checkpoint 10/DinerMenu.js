/////////////////////////////////// Funciones y constantes ///////////////////////////////////

// Función para pasar de una cadena con la hora en formato HH:MM a un objeto Date.
const stringToDate = (cadena) => {
  const [horas, minutos] = cadena.split(":").map(Number);
  const hora = new Date();
  hora.setHours(horas);
  hora.setMinutes(minutos);
  hora.setSeconds(0);
  hora.setMilliseconds(0);
  return hora;
}

// Horario del restaurante
const horario = {
  desayunos: [stringToDate('9:00'), stringToDate('13:00')],
  comidas: [stringToDate('13:00'), stringToDate('16:00')],
  cenas: [stringToDate('20:00'), stringToDate('24:00')]
  }

// Carta del restaurante
const carta = {
  desayunar: {
    Primero: {
      platos: ['Zumo natural', 'Café', 'Té'],
      precios: [4,3,2]
    },
    Segundo: {
      platos: ['Huevos rancheros', 'Sandwich cubano', 'Gofre gratinado'],
      precios: [6,8,7]
    },
    Tercero: {
      platos: ['Tortitas', 'Churros', 'Mousse de yogurt'],
      precios: [4,5,6]
    }
  },
  comer: {
    Primero: {
      platos: ['Ensalada Caprese', 'Crema de calabaza', 'Tartar de salmón'],
      precios: [9, 7, 10]
    },
    Segundo: {
      platos: ['Solomillo de ternera al vino tinto', 'Risotto de setas y parmesano', 'Lasaña de berenjena'],
      precios: [15, 12, 13]
    },
    Tercero: {
      platos: ['Tiramisú clásico', 'Coulant de chocolate', 'Macedonia de frutas frescas'],
      precios: [4, 5, 3]
    },
  },
  cenar: {
    Primero: {
      platos: ['Gazpacho andaluz', 'Carpaccio de calabacín con parmesano', 'Brochetas de langostinos y piña'],
      precios: [11, 9, 12]
    },
    Segundo: {
      platos: ['Lubina al horno con verduras', 'Pollo al limón con quinoa y espinacas', 'Pasta integral con pesto de rúcula'],
      precios: [17, 14, 15]
    },
    Tercero: {
      platos: ['Yogur natural con miel y nueces', 'Sorbete de limón al cava', 'Compota de manzana con canela'],
      precios: [5, 6, 4]
    },
  }
}

// Caja de comentarios del camarero.
const comentariosCamarero = ["¡Tiene buen gusto! A mí también me encanta ese plato.", 
                           "Muy bien, veo que viene con hambre.",
                           "Una combinación ganadora, sin duda.",
                           "¡Perfecto! Va a salir muy satisfecho con esa elección.",
                           "Excelente elección, ese plato es uno de los favoritos de la casa.",
                           "Buena elección, es un plato muy sabroso y abundante.",
                           "Muy buena elección, ese plato nunca falla.",
                           "Uno de los más pedidos, sin duda.",
                           "¡Muy bien! Cocina, uno de los buenos por aquí.",
                           "Usted sabe lo que quiere, me gusta.",
                           "¡Ah, veo que tiene el gusto fino!",
                           "Va por lo seguro, ¡ese nunca decepciona!",
                           "¿Lo ha probado antes o se deja sorprender?"
                          ]

// Función que imprime el menú en pantalla.
const mostrarMenu = (carta, tipoComida) => {
  alert(`Usted está reservando una mesa para ${tipoComida}.`)
  let cadena = 'El menú de hoy es el siguiente:'
  for (const clave in carta) {
    cadena += `\n\n   ${clave}:`
    let platos = carta[clave]['platos'];
    let precios = carta[clave]['precios'];
    for (let i = 0; i < platos.length; i++) {
      cadena += `\n     ${platos[i]} -> ${precios[i]}€` 
    }
  }
  alert(cadena);
}

// Función que imprime una parte de la carta y permite seleccionar un plato.
const seleccionarPlato = (numeroPlato, platos, precios) => {
  let cadena = `Elija un ${numeroPlato.toLowerCase()} de la siguiente lista:\n\n`
  for (const [i, plato] of platos.entries()) {
    const precio = precios[i];
    cadena += `     ${plato} -> ${precio}€\n`;
  }
  let platoSeleccionado, precioSeleccionado;
  let boolean = true;
  do {
    platoSeleccionado = prompt(cadena, 'Escriba su eleccion');
    for (let i = 0; i < platos.length; i++) {
      if (platoSeleccionado.toLowerCase() === platos[i].toLowerCase()) {
        platoSeleccionado = platos[i];
        precioSeleccionado = precios[i];
        boolean = false;
      }
    }
  } while (boolean);
  return [platoSeleccionado, precioSeleccionado];
}

// Función que imprime en pantalla un resumen de la reserva.
const resumenReserva = (horaReserva, eleccionesCliente, total) => {
  let cadena = 'Los detalles de su reserva son los siguientes:'
  cadena += `\n\n   Hora de reserva: ${horaReserva} h`
  for (const eleccion in eleccionesCliente) {
    cadena += `\n\n   ${eleccion}:`
    cadena += `\n         ${eleccionesCliente[eleccion]['plato']} -> ${eleccionesCliente[eleccion]['precio']} €`
  };
  cadena += `\n\n   Total: ${total} €`
  alert(cadena);
}

///////////////////////////////////////////// El programa empieza aquí ////////////////////////////////////////////////////

// Se lee la hora de reserva.
let horaStr = prompt(`Bienvenido al restaurante de DevCamp.
Nuestro horario es el siguiente:
  Desayunos: 9:00 - 13:00 
  Comidas: 13:00 - 16:00 
  Cenas: 20:00 - 00:00 
¿A qué hora desea reservar mesa?`, 'HH:MM'); 
let reserva = stringToDate(horaStr);

let tipoComida;

if (reserva >= horario.desayunos[0] && reserva < horario.desayunos[1]) {
  tipoComida = 'desayunar';
} else if (reserva >= horario.comidas[0] && reserva < horario.comidas[1]) {
  tipoComida = 'comer';
} else if (reserva >= horario.cenas[0] && reserva < horario.cenas[1]) {
  tipoComida = 'cenar';
} else {
  alert('Lo sentimos pero el restaurante se encuentra cerrado a esta hora')
  throw new Error('Restaurante cerrado');
};

// Se muestra el menú en pantalla.
mostrarMenu(carta[tipoComida],tipoComida);


// El cliente selecciona los platos del menú.
let eleccionesCliente = {};
let suma = 0;
let max = comentariosCamarero.length;

for (const numeroPlato in carta[tipoComida]) {
  let platos = carta[tipoComida][numeroPlato]['platos'];
  let precios = carta[tipoComida][numeroPlato]['precios'];
  let eleccionPlato, eleccionPrecio;
  [eleccionPlato, eleccionPrecio] = seleccionarPlato(numeroPlato, platos, precios);
  let comentario = comentariosCamarero[Math.floor(Math.random() * max)];
  alert(comentario)
  suma += eleccionPrecio;
  eleccionesCliente[numeroPlato] = {
    plato: eleccionPlato,
    precio: eleccionPrecio
  };
};

// Se imprime en pantalla un resumen de la reserva.
resumenReserva(horaStr, eleccionesCliente, suma);
alert('Gracias por su reserva. Esperamos que todo esté a su gusto. Que tenga un buen día.')
