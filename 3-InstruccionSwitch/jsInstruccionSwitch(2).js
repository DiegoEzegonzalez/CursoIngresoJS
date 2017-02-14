function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)

{
case "Enero":

case "Febrero":

case "Marzo":

case "Abril":

case "Mayo":
alert("Falta para el frio");
break;

case "Junio":

case "Julio":

case "Agosto":
alert("Abrigate si hace frio");
break;

case "Septiembre":

case "Octubre":

case "Noviembre":

case "Diciembre":
alert("Ya pasamos el frio, ahora calor");
break;

}



}//FIN DE LA FUNCIÓN