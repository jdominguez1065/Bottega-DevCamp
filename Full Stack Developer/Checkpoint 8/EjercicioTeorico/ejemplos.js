const coche = {
	marca: 'Honda',
	modelo: 'Accord',
	potencia: 240,
	propietarios: {prop1: `Jorge Domínguez Becerril`,
				   prop2: 'Carlos Domínguez Becerril'
	}
  };
  
  const copia = { ...coche };
  console.log(copia);
  
  copia.propietarios.prop1 = 'Ángel Domínguez Vera';
  
  console.log(coche);
