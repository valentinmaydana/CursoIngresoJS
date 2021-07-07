/* Valentin Maydana, DIV H
Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var unNumero ;
	var otroNumero ;
	var resultado ;

	unNumero = txtIdNumeroUno.value;	
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero) ;
	otroNumero = parseInt(otroNumero) ;
    
    resultado = unNumero + otroNumero ;

	alert("La suma es " + resultado );	
}

function restar()
{
 var unNumero ;
 var otroNumero ;
 var resultado ;

 	unNumero = txtIdNumeroUno.value;	
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero) ;
	otroNumero = parseInt(otroNumero) ;

	resultado = unNumero - otroNumero ;

	alert("La resta es " + resultado );
}

function multiplicar()
{

 var unNumero ;
 var otroNumero ;
 var resultado ;

 	unNumero = txtIdNumeroUno.value;	
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero) ;
	otroNumero = parseInt(otroNumero) ;

	resultado = unNumero * otroNumero ;

    alert("La multiplicacion es " + resultado);
}

function dividir()
{
	var unNumero ;
 var otroNumero ;
 var resultado ;

 	unNumero = txtIdNumeroUno.value;	
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero) ;
	otroNumero = parseInt(otroNumero) ;

	resultado = unNumero / otroNumero ;

	alert("La division es " + resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos