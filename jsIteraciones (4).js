function Mostrar()
{

	var numero=  prompt("Ingrese el numero entre 0 y 10");

	while (!(numero <10 && numero >0)) //Entre numeros

	{
		numero=prompt("Reingrese");
	}

	alert("El numero ingresado es correcto");


}//FIN DE LA FUNCIÓN