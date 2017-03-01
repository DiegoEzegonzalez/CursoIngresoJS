function Mostrar()
{
	var numeroAnterior;
	var numeroIngresado;
	var tieneDivisor="no";
	var numRecorrido;
	

	numeroIngresado=prompt("Ingrese el numero");
	numeroIngresado=parseInt (numeroIngresado);

	for (numRecorrido=numeroIngresado-1;numRecorrido>2;numRecorrido--)
	{
		tieneDivisor="no";
		for (numeroAnterior=2;numeroAnterior<(numRecorrido/2);numeroAnterior++)
		{
			if (numRecorrido % numeroAnterior==0)
			{
				tieneDivisor="si";
				break;
			}
		}


		if (tieneDivisor=="no")
		{
			console.log("Es primo" + numRecorrido);
		}




	}






/*
	var numeroAnterior;
	var numeroIngresado;
	var tieneDivisor="no";
	

	numeroIngresado=prompt("Ingrese el numero");
	numeroIngresado=parseInt (numeroIngresado);


	for (numeroAnterior=2; numeroAnterior<(numeroIngresado/2); numeroAnterior++)
	{		

		if (numeroIngresado % numeroAnterior==0)
		{
		    
			tieneDivisor="Si";
			break;

		}

	}

	if (tieneDivisor=="no");

	{
		console.log(" El numero " +numeroIngresado+ " es primo ");
	}

	else 
	{
		console.log ("No es numero primo");
	}

*/


}//FIN DE LA FUNCIÓN