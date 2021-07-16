/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de 
ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
     var lamparasIngresadas;
     lamparasIngresadas = txtIdCantidad.value;
     lamparasIngresadas = parseInt(lamparasIngresadas);

     var precioFinal;
     precioFinal = lamparasIngresadas * 35;
     precioFinal = parseInt(precioFinal);

     var nombreMarca;
     nombreMarca = Marca.value;

        if(lamparasIngresadas>5) 
        {
         txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.50);
        }

        else 
        {
            if(lamparasIngresadas==5)
            {    
                if(nombreMarca=="ArgentinaLuz")
                {
                txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.40);
                }
                else
                {
                    if(nombreMarca !="ArgentinaLuz")
                    {
                    txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.30);
                    }
                }
            }
            else
            {
                if(lamparasIngresadas==4)
                {
                    if(nombreMarca=="ArgentinaLuz" || nombreMarca=="FelipeLamparas")
                    {
                        txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.25); 
                    }
                    else
                    {
                        if(nombreMarca!="ArgentinaLuz" && nombreMarca!="FelipeLamparas")
                        {
                            txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.20);
                        }
                    } 
                }
                else
                {
                    if(lamparasIngresadas==3)
                    {
                        if(nombreMarca="ArgentinaLuz")
                        {
                          txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.15);  
                        }
                        else
                        {
                            if(nombreMarca="FelipeLamparas")
                            {
                              txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.10);   
                            }
                        }
                    }
                    else
                    {
                        if (nombreMarca !="ArgentinaLuz" && nombreMarca!="FelipeLamparas")
                        {
                            txtIdprecioDescuento.value = precioFinal -(precioFinal * 0.5);
                        }
                    }
                }    
            }
        }

        
}

// txtIdCantidad
//Marca
//txtIdprecioDescuento