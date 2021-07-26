function mostrar()
{
	
	var mesDelAño 
	mesDelAño = txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Abril":		
		case "Junio":
		case "Noviembre": 
		case "Septiempre": 
			alert("Tiene 30 dias");
			break;
		default:
			alert("Tiene 31 dias.");
			break;
	
	}
	



}//FIN DE LA FUNCIÓN