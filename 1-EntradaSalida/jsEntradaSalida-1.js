//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
/*
Parcial 

	
	1-

	var base;
	var perimetro;

	base=document.getElementById('...').value;
	

	perimetro=base * base;

	alert("El perimetro es:" + perimetro);

	2-

	var importe;
	var importeRecargo;
	var importeFinal;

	importe=prompt("Ingrese el importe del producto");
	importe=parseInt(importe);

	importeRecargo=importe *0.21;

	importeFinal=importe + importeRecargo;

	alert(" El importe total es: " + importeFinal);

	3-

	var largo;
	var ancho;
	var perimetro;
	var metrosDeAlambre;
	

	document.getElementById('').value=largo;
	document.getElementById('').value=ancho;

	perimetro=largo * ancho;

	metrosDeAlambre=perimetro *3;


	alert(" Se necesitan: " + metrosDeAlambre + " metros de alambre ");




	4-

	var numeroUno;
	var numeroDos;
	var resultadoMulti;
	var resultadoRes;
	var resultadoSuma;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	if (numeroUno == numeroDos)
	{
		resultadoMulti=numeroUno*numeroDos;
		document.write(" La multiplicacion es: " + resultadoMulti);
	}

	else if (numeroUno < numeroDos)
	{
		resultadoRes=numeroUno - numeroDos;
		document.write(" La resta es: " + resultadoRes);

	} 

	else 
	{
		resultadoSuma=numeroUno + numeroDos;
		document.write(" La suma es: " + resultadoSuma);
	}





	5-

	var diaDeLaSemana;

	diaDeLaSemana=prompt(" Ingrese un dia: ");

	switch (diaDeLaSemana)

	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		alert("A trabajar");
		break;

		case "sabado":
		case "domingo":
		alert("Es finde semana");
		break;      

		default:
		alert(" El dia ingresa es incorrecto ");

	}











	Parcial recuperatorio

	1-

	var base;
	var superficie;

	base=document.getElementById('elNombre').value;

	superficie=base * base;

	alert(" La superficie es: " + superficie);

	2-

	var importe;
	var descuento;
	var importeFinal;

	importe=prompt ("Ingreses el importe");
	importe=parseInt(importe);

	descuento= importe * 0.25;

	importeFinal= importe - descuento;

	alert (" Su importe total con descuento: " +importeFinal );

	3-

	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var sumaTotal;

	precioUno=document.getElementById('').value;
	precioDos=document.getElementById('').value;
	precioTres=document.getElementById('').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	sumaTotal=precioUno + precioDos + precioTres;

	promedio=sumaTotal / 3;

	alert(" La suma total es: " +sumaTotal);
	alert(" El promedio total es: " +promedio);

	4-

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno + numeroDos;

	if (resultado =="positivo")

	{
		document.white(resultado);
	}



	8-

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


}//FIN DE LA FUNCIÓN





}





