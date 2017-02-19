function Mostrar()
{
//tomo la edad  

var edad

edad=document.getElementById('edad').value;

if(edad >17)

{
	alert("Usted es mayor de edad");

}

if(edad>12 && edad<18)

{
	alert("Usted es un adolescente");
}

else 

{
	alert("Es un niño");
}




}//FIN DE LA FUNCIÓN