/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un numero ")

	while((!numeroIngresado >=0 && numeroIngresado <=9))
	{
		numeroIngresado= prompt("Error... Reingrese un numero: ");

	}
	txtIdNumero.value = numeroIngresado;
}

//FIN DE LA FUNCIÓN