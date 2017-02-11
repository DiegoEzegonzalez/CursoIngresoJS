/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
    
    sueldo=parseInt(sueldo);

    aumento=sueldo*.1;

    resultado=sueldo + aumento;

    document.getElementById('resultado').value=resultado;

    //muestro en cuadro de texto el resultado mas el 10% de sueldo inicial
	







	
}
