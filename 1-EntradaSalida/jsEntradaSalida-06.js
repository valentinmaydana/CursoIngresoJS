/* Valentin Maydana, DIV H 
 Ejercicio 6.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var unNumero ;
  var otroNumero ;
  var resultado;
  
  unNumero =  txtIdNumeroUno.value ;
  otroNumero =  txtIdNumeroDos.value ;

  unNumero = parseInt(unNumero) ;
  otroNumero = parseInt(otroNumero) ;

  resultado = unNumero + otroNumero ;
 

	alert("La suma de los numeros es: "+ resultado);
}


// txtIdNumeroUno	
// txtIdNumeroDos
/*
Entradas : dos numeros
Procesos: Realizar la suma de los 2 numeros
Salida: Resultado de esa suma.

Entradas 
  prompt 
   document.getElementById(...).value o id.value
   x = id.value

Procesos
 +; -; *; /; %

Salidas

 alert 
 console.log
 document.write
  document.getElementById(...).value
  id.value = x
*/








