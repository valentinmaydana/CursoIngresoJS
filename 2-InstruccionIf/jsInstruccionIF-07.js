function mostrar()
{
	 var edad;
	 edad = txtIdEdad.value;
	 edad = parseInt(edad);

	 var estado ;
	 estado = estadoCivil.value;

	 if(edad<18 && estado != "Soltero")
     {
	    alert("Es muy pequeño para NO ser soltero");
     }
}
  
// estadoCivil.value;



  //FIN DE LA FUNCIÓN