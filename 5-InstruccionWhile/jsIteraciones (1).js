function Mostrar()
{
	alert('iteración while');

	var contador=0 //El contador comenzara contando desde el 0

	while (contador < 10) //Contador menor a 10, pasara por todos los numero del 0 al 9

	{
		document.write("  Numero:  " + contador + "<br>" ); //Imprime en pantalla
		contador++; //Es igual a decir contador +1
		console.log(contador); //Ver en consola la prueba de numeros
	}



}//FIN DE LA FUNCIÓN