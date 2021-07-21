/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var ingresoElPrimerNumero;
	ingresoElPrimerNumero = false;

	var maximo;
	var minimo;

	var seguir;
	seguir = true ;

	while(seguir==true)
	{
		numeroIngresado= prompt("Ingrese un numero: ");
		numeroIngresado= parseInt(numeroIngresado);

		if(ingresoElPrimerNumero> maximo || ingresoElPrimerNumero == false)
		{
			maximo=numeroIngresado;
			
		}
		else
		{
			if(numeroIngresado < minimo || ingresoElPrimerNumero== false)
			{
				maximo = numeroIngresado;
			}

	}

	document.write("Maximo; "+ maximo + "Minimo: " + minimo);
} //FIN DE LA FUNCION