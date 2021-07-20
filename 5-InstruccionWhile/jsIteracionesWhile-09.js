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

		if(ingresoElPrimerNumero==false)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
			ingresoElPrimerNumero = true;
		}
		else
		{
			if(numeroIngresado > maximo)
			{
				maximo = numeroIngresado;
			}
			else
			{
			 	if (numeroIngresado < minimo) 
				{
					minimo = numeroIngresado;
				}
			}	
		}

	}

	document.write("Maximo; "+ maximo + "Minimo: " + minimo);

}

/*txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo; */