/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=parseInt(numeroIngresado);

	var contador;
	contador=0;

	var seguir;
	seguir="si";

	var sumaPositivos;
	sumaPositivos=0;

	var multiplicacionNegativos;

	
	while(seguir == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		if(numeroIngresado>0)
		{
			sumaPositivos += numeroIngresado;

			contador++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			}
		}


		seguir= prompt("Ingrese otro numero: ");
	}
	
	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN