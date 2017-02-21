function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var contador;
	var max;
	var min;


	while(respuesta!='no')
	{
		numero=prompt("Ingrese el numero");
		numero=parseInt(numero); 

		if(contador >0)
		{
			max=numero;
		    min=numero;
		}
		else
		{
			if(numero>max)
			{
				max=numero;
			}
			if(numero<min)
			{
				min=numero;
			}
		}
	
	}




}//FIN DE LA FUNCIÓN