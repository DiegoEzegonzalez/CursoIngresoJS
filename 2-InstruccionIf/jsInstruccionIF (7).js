function Mostrar()
{
//tomo la edad  

    var edad
	var estadocivil

	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;


	if(edad<18 && estado!="Soltero")  //!= (no es igual)
		
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	


}//FIN DE LA FUNCIÓN