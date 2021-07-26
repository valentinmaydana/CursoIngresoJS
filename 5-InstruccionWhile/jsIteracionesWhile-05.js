/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese su sexo, f para femenino y m para masculino;  ");

	while(!(sexoIngresado=="f" || sexoIngresado=="m"))
	{

		sexoIngresado = prompt("Error... f para femenino y m para masculino:");
	}

	txtIdSexo.value = sexoIngresado;

	
}//FIN DE LA FUNCIÓN