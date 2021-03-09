function calcular(tipo, valor) {
	/*tipo = numero ou funcao. valor=nome*/
if (tipo === "funcao") {
	if (valor === "c"){document.getElementById("resultado").value = ""}

	if (valor === "/" || valor === "*" || valor === "-" ||
	 valor === "+" || valor === ".") 
		{document.getElementById("resultado").value += valor}}

	if (valor === "=") {
		var valor_campo = eval(document.getElementById("resultado").value)
		document.getElementById("resultado").value = valor_campo}

else if (tipo === "numero") {document.getElementById("resultado").value += valor}


	
}