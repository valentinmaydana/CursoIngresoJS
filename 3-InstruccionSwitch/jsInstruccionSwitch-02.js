/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

/*JULIO Y AGOSTO -> Invierno "Abrigate que hace frio"
SEPTIEMBRE - OCTUBRE - NOVIEMBRE -> Primavera "Ya pasamos el frio, ahora hace calor"
DICIEMBRE - ENERO - FEBRERO -> Verano "Ya pasamos el frio, ahora hace calor "
MARZO - ABRIL - MAYO - JUNIO -> Otoño "Falta para el invierno"*/

function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Marzo"
		case "Abril"
		case "Mayo"
		case "Junio"
			mensaje = "Falta para el invierno. "
		break;
		case "Julio"
		case "Agosto"
			mensaje = "Abrigate que hace frio" 
		break;
		default; "Septiempre" "Octubre" " Noviembre" "Diciembre" 
	}





}//FIN DE LA FUNCIÓN