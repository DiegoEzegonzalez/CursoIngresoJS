function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var negatico=1;

	while ( contador < 5)
	{
		contador=contador +1;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		while ( numero <-10 || numero >10)
		{
			numero=prompt("Error, reingrese");
			numero=parseInt(numero);

		}
//Fin while entre <-10 y >10

if (numero > 0)

{
	negativo=negativo*numero;
}

else

{
	acumulador=acumulador+numero;

}

		 
	}

	//Fin acumulador while >5

promedio=acumulador/5;

alert(" El promedio es: " +promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN