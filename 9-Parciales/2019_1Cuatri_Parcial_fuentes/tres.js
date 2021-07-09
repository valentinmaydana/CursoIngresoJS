function mostrar()
{

 var precio; 
 precio=prompt("Ingrese el precio ");
 precio=parseFloat(precio);

 var porcentaje ;
 porcentaje=prompt("Ingrese el porcentaje de descuento ");
 porcentaje=parseInt(porcentaje);

 var descuento;
 descuento=parseInt(descuento);
 descuento= (precio * porcentaje /100) ;
 
 var preciofinal;
 preciofinal=parseFloat(preciofinal);
 preciofinal= precio - descuento;
 
 document.getElementById("elPrecioFinal").value = preciofinal;


}
