/**
* Criatura
*/

function Criatura(tipo, nombre, fecha, peso){
	this.id = Criatura.prototype.id++;
	this.tipo = tipo;
	this.setNombre(nombre);
	this.setFecha(fecha);
	this.setPeso(peso);
	this.ataque = this.definirAtaque(tipo);
	this.estado = 'durmiendo';
}

Criatura.prototype.getTipo = function(){
	return this.tipo;
}

Criatura.prototype.id = 1;
Criatura.prototype.max_peso=10;
Criatura.prototype.demasiadoGordo=8;
Criatura.prototype.min_peso=2;
Criatura.prototype.demasiadoCanijo=4;

Criatura.prototype.setNombre = function (nombre){
	this.nombre = nombre;
}

Criatura.prototype.setFecha = function(fecha){
	this.fecha = fecha;
}

Criatura.prototype.setPeso= function(peso){
	this.peso = peso;
	if(!this.comprobarVida()){
		throw 'Tu criatura ha muerto';
	}
	if(this.estado==='comiendo'&&this.peso >= this.demasiadoGordo){		
		throw 'Tu criatura está demasiado gord@, debería entrenar';
	}
	else if(this.estado==='entrenando'&&this.peso <= this.demasiadoCanijo){
		throw 'Tu criatura está demasiado canij@, debería comer';
	}
	
}

Criatura.prototype.definirAtaque = function(tipo){
	switch (tipo) {
		case 'Hechicer@':
			return 'Bola de fuego';
		case 'Guerrer@':
			return 'espadazo';
		default:
			return 'bocado mortal';
	}
}

Criatura.prototype.comer = function(){
	if(this.comprobarVida()){
		this.estado='comiendo';
		this.setPeso(parseFloat(this.peso)+1);
	}
	this.comprobarVida();
}

Criatura.prototype.entrenar = function(){
	if(this.comprobarVida()){
		this.estado='entrenando';
		this.setPeso(parseFloat(this.peso)-1);
	}
	this.comprobarVida();
}

/**
* Comprueba si está vivo (true->vivo, false->muerto)
*/
Criatura.prototype.comprobarVida = function(){	
	if(this.peso >= this.max_peso||this.peso <= this.min_peso){
		return false;
	}
	else 
		return true;
}

