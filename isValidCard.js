function isValidCard(cardNumber){ //funcion
	var cardNumber = prompt("Ingrese el número de tarjeta a verificar") //usuario ingresa su número de tarjeta mediante un prompt(), se almacena en var cardNumber
	var arrCardNumber = Array.from(cardNumber); //números separados
	var arrNumbersInEvenIndexes = [] //arr donde se almacenan los números en posiciones impares
	var arrNumbersInOddIndexes = [] //arr donde se almacenan los números en posiciones pares

	arrCardNumber.reverse() // para ordenar los números de atrás hacia adelante
	for (var i = 1 ; i <= arrCardNumber.length ; i+2); // para encontrar los números en posiciones pares
		if(i % 2 !== 0) //se valida que la posición es impar porque el módulo de 2 es distinto a 0
		arrNumbersInOddIndexes.push(i) //para agregar los números en posiciones impares a su array
	for (var i = 0 ; i <= arrCardNumber.length ; i+2) // para encontrar los números en posiciones impares
		if(i % 2 === 0) //se valida que la posición es par porque el módulo de 2 = 0
		arrNumbersInEvenIndexes.push(i) //para agregar los números en posiciones pares a su array
		var evenIndexes = (arrNumbersInEvenIndexes *2) // multiplicar los números en posiciones pares *2???


}