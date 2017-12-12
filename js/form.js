/**
*
*/

// Declaración de variables

let nombre, tipo, fecha, peso;

// Declaración de variables de error

let errNombre, errTipo, errFecha, errPeso;
/**
* Funcionalidad del formulario
*/

let comprobarTipo = function (tipo){
	errTipo.innerHTML=tester.testTipo(tipo.value);
}

let comprobarNombre= function(nombre){
	errNombre.innerHTML=tester.testNombre(nombre.value);
}

let comprobarFecha = function(fecha){
	errFecha.innerHTML=tester.testFecha(fecha.value);
}

let comprobarPeso = function(peso){
	errPeso.innerHTML=tester.testPeso(peso.value);
}

let comprobarTodo = function(event){
	event.preventDefault();

	let primerError = null;
	let msjTipo = tester.testTipo(tipo.value);
	let msjNombre = tester.testNombre(nombre.value);
	let msjFecha = tester.testFecha(fecha.value);
	let msjPeso = tester.testPeso(peso.value);

	if(msjPeso!==''){
		errPeso.innerHTML = msjPeso;
		primerError = peso;
	}
	if(msjFecha!==''){
		errFecha.innerHTML = msjFecha;
		primerError = fecha;
	}
	if(msjNombre!==''){
		errNombre.innerHTML = msjNombre;
		primerError = nombre;
	}
	if(msjTipo!==''){
		errTipo.innerHTML = msjTipo;
		primerError = tipo;
	}

	if(primerError==null){
		abrirVentanaCriatura();
	}else{
		primerError.focus();
	}
}


let init = () => {

	// Inicialización elementos formulario
	nombre = document.getElementById('nombre');
	tipo = document.getElementById('tipo');
	fecha = document.getElementById('fecha');
	peso = document.getElementById('peso');
	btn = document.getElementById('btn');

	// Inicialización elementos de error
	errTipo = document.getElementById('errTipo');
	errNombre = document.getElementById('errNombre');
	errFecha = document.getElementById('errFecha');
	errPeso = document.getElementById('errPeso');

	//Eventos

	tipo.addEventListener('blur', comprobarTipo.bind(null,tipo));
	nombre.addEventListener('blur', comprobarNombre.bind(null, nombre));
	fecha.addEventListener('blur', comprobarFecha.bind(null,fecha));
	peso.addEventListener('blur', comprobarPeso.bind(null,peso));
	btn.addEventListener('click', comprobarTodo);

}


window.onload = init;
