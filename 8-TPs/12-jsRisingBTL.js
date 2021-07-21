/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
 //Valentin Maydana, DIV H, Ejercicio 12.
function ComenzarIngreso () 
{
 	var edadIngresada;
    edadIngresada = prompt("Ingrese su edad: ");
    edadIngresada = parseInt(edadIngresada);

    while(edadIngresada<18 && edadIngresada>90)
    {
        edadIngresada = prompt("Error.. Volve a ingresar tu edad: ");  
        edadIngresada = parseInt(edadIngresada);
    }

    txtIdEdad.value = edadIngresada ;

    var sexoIngresado;
    sexoIngresado = prompt("f para femenino y m para masculino.")

    while(isNaN(sexoIngresado!="f" || sexoIngresado!="m"))
    {
        sexoIngresado = prompt("Error.. Volve a ingresar tu sexo");
    }

    txtIdSexo.value = sexoIngresado;

    var estadoCivil;
    estadoCivil = prompt("Ingrese su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudos.");

    while(isNaN(estadoCivil<1 && estadoCivil>4))
    {
        estadoCivil = prompt("Error.. Volve a ingresar su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudos. ");
    }

    txtIdEstadoCivil.value = estadoCivil;

    var sueldoBruto;
    sueldoBruto = prompt("Ingrese su sueldo bruto: ");
    sueldoBruto=parseInt(sueldoBruto);

    while(sueldoBruto<8000)
    {
        sueldoBruto=prompt("Error... volve a ingresar su sueldo bruto:");
    }

    txtIdSueldo.value = sueldoBruto;

    var numeroLegajo;
    numeroLegajo = prompt("Ingrese su numero de legajo, 4 numeros:");
    numeroLegajo= parseInt(numeroLegajo);

    while(numeroLegajo < 1000 || numeroLegajo > 9999)
    {
        numeroLegajo = prompt("Error... Volve a ingresar el numero de legajo: ");
    }

    txtIdLegajo.value = numeroLegajo;

    var nacionalidad;
    nacionalidad = prompt("Ingrese su nacionalidad: a-para argentinos, e-para extranjeros y n-para nacionalizados. ");

    while(isNaN(nacionalidad != "a" || nacionalidad !="e" || nacionalidad !="n"))
    {
        nacionalidad = prompt("Error... volve a ingresar tu nacionalidad:A-para argentinos, E-para extranjeros y N-para nacionalizados. ")
    }  

    txtIdNacionalidad.value = nacionalidad;  


}
