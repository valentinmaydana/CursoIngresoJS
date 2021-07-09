/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 var primerPrecio;
 primerPrecio = txtIdPrecioUno.value;
 primerPrecio = parseFloat(primerPrecio);	

 var segundoPrecio;
 segundoPrecio = txtIdPrecioDos.value;
 segundoPrecio = parseFloat(segundoPrecio)

 var tercerPrecio;
 tercerPrecio = txtIdPrecioTres.value;
 tercerPrecio = parseFloat(tercerPrecio);

 var total;
 total = (primerPrecio+segundoPrecio+tercerPrecio);
 total = parseFloat(total);

 alert("La suma es "+total);
}

function Promedio () 
{
 var primerPrecio;
 primerPrecio = txtIdPrecioUno.value;
 primerPrecio = parseFloat(primerPrecio);	

 var segundoPrecio;
 segundoPrecio = txtIdPrecioDos.value;
 segundoPrecio = parseFloat(segundoPrecio);

 var tercerPrecio;
 tercerPrecio = txtIdPrecioTres.value;
 tercerPrecio = parseFloat(tercerPrecio);

 var promedio;
 promedio = (primerPrecio+segundoPrecio+tercerPrecio)/3;
 promedio = parseFloat(promedio);

 alert("El promedio de los tres precios es de "+promedio);	
}
function PrecioFinal () 
{
 var primerPrecio;
 primerPrecio = txtIdPrecioUno.value;
 primerPrecio = parseFloat(primerPrecio);	

 var segundoPrecio;
 segundoPrecio = txtIdPrecioDos.value;
 segundoPrecio = parseFloat(segundoPrecio)

 var tercerPrecio;
 tercerPrecio = txtIdPrecioTres.value;
 tercerPrecio = parseFloat(tercerPrecio);

 var total;
 total = (primerPrecio+segundoPrecio+tercerPrecio);
 total = parseFloat(total);

 var precioFinal;
 precioFinal = total+(total*0.21);
 precioFinal = parseFloat(precioFinal);

 alert("El precio final es de "+precioFinal);
}
/*txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres*/

