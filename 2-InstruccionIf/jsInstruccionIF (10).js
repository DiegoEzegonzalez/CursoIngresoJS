function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota

	nota=Math.floor((Math.random() * 10) + 1);

	if (nota ==9 || nota ==10 )
		{
			alert("Excelente");
		}
		else
			if (nota >3 && nota <8)
				{
					alert("Aprobado");
				}
				else
					if (nota <4)
						{
							alert("Vamos la proxima se puede");
						}
	

}//FIN DE LA FUNCIÓN