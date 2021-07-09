function mostrar()
{
  var persona1;
  var persona2;
  var peso1 ;
  var peso2 ;
  var sumapeso;
  var promedio;

  persona1 = prompt("Ingrese su nombre ");
  persona2 = prompt("Ingrese el nombre de su pareja ");

  peso1 = prompt("Ingrese su peso ");
  peso2 = prompt("Ingrese el peso de su pareja ");
  peso1=parseInt(peso1);
  peso2=parseInt(peso2);
  
  sumapeso= (peso1 + peso2);
  promedio= (sumapeso/2);
  
  alert("ustedes se llaman "+persona1+" y "+persona2+" pesan "+peso1+" y "+peso2+" kilos, que sumados son "+sumapeso+" kilos y el promedio de peso es de "+promedio+".");
  


}
