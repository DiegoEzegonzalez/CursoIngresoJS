function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var notaramdom;

notaramdom=Math.floor(Math.random() * 10)	+1;

if (notaramdom > 8 )

{
	alert("Excelente");
}

if (notaramdom > 3 && notaramdom < 9)

{
	alert("Aprobo");
}

if(notaramdom < 4)

{
	alert("Vamos la proxima se puede");
}



}//FIN DE LA FUNCIÓN