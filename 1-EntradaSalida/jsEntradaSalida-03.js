//Valentin Maydana, DIV H 
//Ejercicio 3 
/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado = document.getElementById ("txtIdNombre").value;
	alert("Su nombre es: " + nombreIngresado);

}
 // txtIdNombre
/*

ENTRADA
   prompt
   id.value O document.getElementById("").value 

PROCESOS 

SALIDAS
 alert 
 console.log
 document.write
 id.value
 
 */
