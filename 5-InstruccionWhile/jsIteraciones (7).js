function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;


	while (respuesta == "si" )
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero?");
		contador ++;

		acumulador=acumulador + numero;
	}	

	promedio=acumulador/promedio;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN