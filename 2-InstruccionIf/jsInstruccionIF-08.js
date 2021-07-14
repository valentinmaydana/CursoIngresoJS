/*
Valentin Maydana, DIV H. Ejercicio 8.
Enunciado:
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
NO HACER NADA,pero si no es asi, y es soltero
 y no es menor, mostrar el siguiente mensaje:
 'Es soltero y no es menor.'*/

function mostrar()
{
	 var edad;
	 edad = txtIdEdad.value;
	 edad = parseInt(edad);

	 var estado ;
	 estado = estadoCivil.value;

	 if(edad>18 && estado == "Soltero")
	 {
	 	alert("Es soltero y no es menor");
	 }


}//FIN DE LA FUNCIÓN