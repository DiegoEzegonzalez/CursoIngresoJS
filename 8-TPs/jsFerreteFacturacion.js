/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaTotal;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt (precioUno);
	precioDos=parseInt (precioDos);
	precioTres=parseInt (precioTres);

	sumaTotal=precioUno + precioDos + precioTres;

	alert (" La suma total de los precios es: " +sumaTotal);

	
}

function Promedio () 

{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaTotal
	var promedioTotal;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt (precioUno);
	precioDos=parseInt (precioDos);
	precioTres=parseInt (precioTres);

	sumaTotal=precioUno + precioDos + precioTres;
	promedioTotal=sumaTotal /3;

	alert (" El promedio total de los precios es: " +promedioTotal);
	
}

function PrecioFinal () 

{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaTotal;
	var precioFinalUno;
	var precioFinalDos;
	var precioFinalTres;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt (precioUno);
	precioDos=parseInt (precioDos);
	precioTres=parseInt (precioTres);





	alert (" La precio total con iva: " +precioFinalUno);
	
}