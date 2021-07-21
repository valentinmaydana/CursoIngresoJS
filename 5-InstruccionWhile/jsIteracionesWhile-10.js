/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=parseInt(numeroIngresado);

	var seguir;
	seguir = "si";

	var sumaNegativos;
	sumaNegativos= 0;

	var sumaPositivos;
	sumaPositivos= 0;

	var cantidadNegativos;
	cantidadNegativos=0;

	var cantidadPositivos;
	cantidadPositivos=0;

	var sumaCeros;
	sumaCeros = 0;

	var cantidadCeros;
	cantidadCeros=0;

	var cantidadPares;
	cantidadPares=0;

	var promedioPositivos;
	var promedioNegativos;



	while(seguir == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");

		if(numeroIngresado<0)
		{
			sumaNegativos= sumaNegativos + numeroIngresado;
			cantidadNegativos= cantidadNegativos + 1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if(numeroIngresado%2==0)
		{
			cantidadPares++;
		}




		seguir = prompt("Ingresar otro numero? ");
	}
if(cantidadNegativos!=0)
{
	promedioNegativos = sumaNegativos/cantidadNegativos;
	document.write("El promedio de los negativos es "+promedioNegativos+ "<br>");

}
else
{
	document.write("El promedio de los negativos no se pudo calcular" + "<br>");
}

if(cantidadPositivos!=0)
{
	promedioPositivos= sumaPositivos/cantidadPositivos;
	document.write("El promedio de los positivos es "+ promedioPositivos+ "<br>");
}
else
{
	document.write("El promedio de los positivos no se pudo calcular");
}
	
 document.write(""


}//FIN DE LA FUNCIÓN