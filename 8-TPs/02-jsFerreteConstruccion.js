/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 var largoIngresado;
 largoIngresado = txtIdLargo.value ;
 largoIngresado = parseFloat(largoIngresado);

 var anchoIngresado;
 anchoIngresado = txtIdAncho.value;
 anchoIngresado = parseFloat(anchoIngresado);

 var rectanguloAlambre;
 rectanguloAlambre = (largoIngresado * anchoIngresado)*3;
 rectanguloAlambre =parseFloat(rectanguloAlambre);

 alert("Cantidad de alambre a comprar "+rectanguloAlambre+" Metros ");

}
function Circulo () 
{
 var radioIngresado;
 radioIngresado = txtIdRadio.value;
 radioIngresado = parseFloat(radioIngresado);

 var cantidadAlambre;
 cantidadAlambre = (radioIngresado *2)*3;
 cantidadAlambre = parseFloat(cantidadAlambre);

 alert("Cantidad de alambre a comprar "+cantidadAlambre+" Metros.");
}
function Materiales () 
{
 var largoIngresado;
 largoIngresado = txtIdLargo.value ;
 largoIngresado = parseFloat(largoIngresado);

 var anchoIngresado;
 anchoIngresado = txtIdAncho.value;
 anchoIngresado = parseFloat(anchoIngresado);

 var perimetro; 
 perimetro = largoIngresado * anchoIngresado;
 perimetro =parseFloat(perimetro);

 alert("Se necesitan "+perimetro*2+" de cemento y "+perimetro*3+" de cal ")
 //2 bolsas de cemento.
 //3 bolsas de cal.
}

/*txtIdLargo
txtIdAncho
txtIdRadio*/