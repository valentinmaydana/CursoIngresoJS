/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i; //variables de control (son contadores, cuentan cosas, sucesos)
	i = 0;
	while(i < 10)
	{
		document.write((i+1) + "<br>" );
		i = i + 1;
	}	


	
}
//FIN DE LA FUNCIÓN

/*
 i + 1 = no modifica la variable
 i = i + 1 o i++ -> Modifica la variable
 while(condicion) //true o false
 {
 	sentencias que se tienen q repetir

 	sentencias que hagan que la condicion
 	 en algun momento sea falsa
 }*/