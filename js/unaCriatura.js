/**
* Funcionalidad para cada ventana de cada criatura.
*/

let nombre, tipo, fecha, peso, btnAlimentar, btnEntrenar, btnAtaque, errPeso;

let alimentar = (event)=>{
	event.preventDefault();
	errPeso.innerHTML='';
	if(criatura.comprobarVida()){
		try{
			criatura.comer();
		}catch(e){
			errPeso.innerHTML=e;
		}	
		actualizar();
		comprobarVida();	
	}
	
}

let entrenar = (event)=>{
	event.preventDefault();
	errPeso.innerHTML='';
	if(criatura.comprobarVida()){
		try{
			criatura.entrenar();
		}catch(e){
			errPeso.innerHTML=e;
		}	
		actualizar();
		comprobarVida();		
	}
}

let actualizar = ()=>{
	tipo.value = criatura.tipo;
	nombre.value = criatura.nombre;
	fecha.value = criatura.fecha;
	peso.value = criatura.peso;
}

let comprobarVida = function(){
	if(!criatura.comprobarVida()){
		inhabilitarBotones();
	}
}

let inhabilitarBotones = () =>{
	btnEntrenar.setAttribute("disabled", "true");
	btnAlimentar.setAttribute("disabled", "true");
	btnAtaque.setAttribute("disabled", "true");
}

let init = function(){
	nombre = document.getElementById('nombre');
	tipo = document.getElementById('tipo');
	fecha = document.getElementById('fecha');
	peso = document.getElementById('peso');
	btnAlimentar = document.getElementById('btnAlimentar');
	btnEntrenar = document.getElementById('btnEntrenar');
	btnAtaque = document.getElementById('btnAtaque');
	errPeso = document.getElementById('errPeso');

	actualizar();

	btnAlimentar.addEventListener('click', alimentar);
	btnEntrenar.addEventListener('click', entrenar)
}


window.onload = init;