/* function isValidCard(cardNumber){ //funcion
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


} */

function validNumbers() {
  var cardNumber = '';
  do {
    cardNumber = prompt('Ingrese los números de su tarjeta de crédito a validar');
    if (cardNumber !== '') {
      isValidCard(cardNumber);
    } else {
      alert('Ingrese el número de su tarjeta de crédito');
    }  
  } while (cardNumber === '');
}

function isValidCard(cardNumber) {
  var cardNumberInv = [];
  var result = 0;
  for (var i = 0; i < cardNumber.length; i++) {
    cardNumberInv.unshift(parseInt(cardNumber[i]));
  }
  cardNumberInv.unshift('N');

  for (var j = 1; j < cardNumberInv.length; j++) {
    var resultOdd = 0;
    var resultPair10 = 0;
    var resultPair = 0;
    result = resultPair + resultOdd + resultPair10;
    if (j % 2 !== 0) {
      result += cardNumberInv[j];
    } else if (j % 2 === 0) {
      if (cardNumberInv[j] * 2 > 10) {
        (cardNumberInv[j] - 10) + 1;
        result += cardNumberInv[j];
      } else {
        result += (cardNumberInv[j] * 2);
      }
    }
  }
  if (result % 10 === 0) {
    ('Felicidades, su tarjeta es válida');
  } else {
    document.write('Lo sentimos, su tarjeta no es válida');
  }
}
validNumbers();