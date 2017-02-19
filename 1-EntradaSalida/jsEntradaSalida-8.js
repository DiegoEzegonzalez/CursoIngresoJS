/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerdividendo
	var numerodivisor
	var resto

	numerdividendo=document.getElementById('numeroDividendo').value;
	numerodivisor=document.getElementById('numeroDivisor').value;

	numerodividendo=parseInt(numerdividendo);
	numerodivisor=parseInt(numerodivisor);

	resto= numerdividendo % numerodivisor;

	alert(" El resto es: " 	+resto);



}
