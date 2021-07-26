/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR
 en ese destino*/
function mostrar()
{
	var destinoIngresado; 
	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del Plata":
			alert("Hace CALOR.");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("Hace FRIO.");
			break;
	}

}//FIN DE LA FUNCIÓN