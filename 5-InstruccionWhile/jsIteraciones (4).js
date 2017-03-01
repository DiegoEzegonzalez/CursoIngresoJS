function Mostrar()
{

	var numero=  prompt("Ingrese un numero entre 0 y 10");

	


	while (!(numero >0 && numero <10	))

	{
		numero=prompt("Reingrese un numero entre 0 y 10");
		document.getElementById('Numero').value=numero;	

	}

	alert("El numero ingresado es correcto");


}//FIN DE LA FUNCIÓN