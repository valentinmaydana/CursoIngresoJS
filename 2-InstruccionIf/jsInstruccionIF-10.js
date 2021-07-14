function mostrar()
{
	var notaRandom;
	notaRandom = Math.floor(Math.random() * 11);
	notaRandom = parseInt(notaRandom);

	alert("Tu nota es "+notaRandom);

	if(notaRandom>8)
	 {
	 	alert("EXCELENTE");
	 }
	else
	{
		if(notaRandom>3)
		{
			alert("APROBO");
		}
        else
        {
        	alert("Vamos, la proxima se puede. ");
        }
	}

}





//FIN DE LA FUNCIÓN