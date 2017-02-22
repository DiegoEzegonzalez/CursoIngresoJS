function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

if (edad >17 && edad <25)
	{
		alert("Uste es mayor de edad");
	}
	else 
		if (edad <18)
		{
			alert("Usted es menor de edad");

		}
		else
			if (edad >24)
					{
						alert("sos un hijo de puta");
					}





}//FIN DE LA FUNCIÓN