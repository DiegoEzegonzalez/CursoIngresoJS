/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{

	var importe
	var descuento
	var total

	importe=document.getElementById('importe').value; //Tomar datos por ID
	

	importe=parseInt(importe);
	descuento=parseInt(descuento);

	descuento=(importe *0.25);

	total=importe - descuento;


	document.getElementById('resultado').value=total; //Mostrar datos por ID


	
}
