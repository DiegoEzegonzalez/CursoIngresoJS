/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe
	var aumento
	var importetotal

	importe=document.getElementById('sueldo').value;
	

	importe=parseInt(importe);

	aumento=(importe *0.1);

	importetotal=importe + aumento

	document.getElementById('resultado').value=importetotal;
	


	
}
