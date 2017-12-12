/**
* Abre una nueva ventana en la que se vuelca la nueva criatura.
*/
let abrirVentanaCriatura = function(){
	ventana = window.open('./unaCriatura.html', '','top=0, height = 400, width = 500');
	volcarCriatura(ventana);
}

/**
* Vuelca una criatura en la ventana dada
*/
let volcarCriatura = function(ventana){
	criaturilla = dameCriatura();
	ventana.criatura = criaturilla;
}

/**
* Devuelve una nueva criatura con los valores recogidos del formulario
*/
let dameCriatura = function(){
	return new Criatura(tipo.value, nombre.value, fecha.value, peso.value);
}