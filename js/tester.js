/**
* Comprueba los inputs
*/

let tester = {

	testNombre: function(nombre){
			if(/^[A-Z][A-Za-z]+$/.test(nombre))
				return '';
			return 'Debe comenzar por mayúscula y tener más de dos letras';
	},

	testFecha: function(fecha){
			fecha = fecha.replace(/-/g, '/');
			if (new Date(fecha) == 'Invalid Date')
				return 'fecha inválida';
			return '';
	},

	testPeso: function(peso){
			if(peso>Criatura.prototype.demasiadoGordo)
				return 'No puedes crear una criatura tan gorda';
			else if(peso<Criatura.prototype.demasiadoCanijo)
				return'No puedes crear una criatura tan canija';
			return '';
	},

	testTipo: function(tipo){
		if(tipo ==='')
			return('Esta criatura no tiene tipo');
		return '';
	}

};