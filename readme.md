## Algoritmo de Luhn

##### Objetivo: Crea una web que pida, por medio de un ```prompt()```, el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. El código debe estar compuesto de una función llamada ```isValidCard```, y el usuario no debe poder ingresar un campo vacío.

* Crear función que en la que el usuario ingrese su número de tarjeta de crédito mediante un ```prompt()```. 
* El mensaje se validará para verificar que no es un campo vacío, de serlo se le indicará al usuario que indique un valor válido.
* Una vez validado el mensaje, se comenzará la comprobación mediante el algoritmo de Luhn

```function isValidCard```

 1. El número de tarjeta de crédito se almacena en la ```var cardNumber```, a través de un ```prompt()```
 
 2. Se crea una nueva ```var```, llamada ```arrCardNumber```, en donde se almacenarán cada nuevo número de la tarjeta, de manera separada en un array.
 
 3. Se creará una nueva ```var```, llamada ```arrNumbersInOddPositions```, donde se almacenarán los números en posiciones impares
 
 4. Se creará una nueva ```var```, llamada ```arrNumbersInEvenPositions```, donde se almacenarán los números en posiciones pares

 5. A ```arrCardNumber``` se le aplicará ```.reverse``` para invertir el orden de los números

 6. Mediante un ```for``` se recorrerá cada número, comenzando desde ```i = 1``` y realizando incrementos de 2 hasta que el número sea menor a ```arrCardNumber.length```

 7. Se validará si los números son pares mediante el uso de módulo ```% 2```, esperando que el resultado sea cero

 8. Si el resultado es igual a cero, se agregará ese índice a ```arrNumbersInEvenPositions``` usando ```.push()```

 9. Mediante el uso de un nuevo ```for```, se recorrerá cada número, comenzando desde ```i = 0``` y realizando incrementos de 2 hasta que el número sea menor a ```arrCardNumber.length```

 10. Se validará si los números son impares mediante el uso del módulo ```% 2```, esperando que el resultado sea distinto a cero

 11. Si el resultado es distinto a cero, se agregará ese índice a ```arrNumbersInOddPositions``` usando ```.push()```

 12. Los números en posiciones pares serán multiplicados por 2

 13. Si el resultado de la multiplicación por dos es un número de 2 dígitos, cada dígito se sumará (Ej. 21 = 2 + 1)

 14. La suma de los números en ```arrNumbersInEvenPositions``` se sumará a la suma de los números en ```arrNumbersInOddPositions```

 15. Al resultado de la suma se le aplicará ```% 10```

 16. Si el resultado de ```% 10``` es cero, se le indicará al usuario mediante un ```alert()``` que el número de tarjeta ingresado es válido

 17. Si el resultado de ```% 10``` es distinto a cero, se le indicará al usuario mediante un ```alert()``` que el número de tarjeta ingresado es inválido