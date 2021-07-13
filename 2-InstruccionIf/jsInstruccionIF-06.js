//Valentin Maydana, DIV H 
//Ejercicio 6
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}

	else
	{	
		   if(edad>12)
		  {
		  	alert("Usted es adolescente ");
		  }
		  else
		  {
		  	alert("Es un niño ");
		  }

	}

}//FIN DE LA FUNCIÓN