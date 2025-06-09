// 1. Escribe un comentario en una línea y otro en varias líneas.

// Este es un comentario en una línea

/*

Este es un comentario
en varias líneas

*/

// 2. Declara variables de tipo string, number, boolean, undefined, null, symbol y BigInt. Imprime sus valores y tipos en la consola.

let name = "John Doe"; // String
let age = 30; // Number
let life = true; // Boolean
let notAssigned; // Undefined
let emptyValue = null; // Null
let uniqueSymbol = Symbol('unique'); // Symbol
let bigIntValue = 12345678901234567890n; // BigInt

console.log("Nombre:", name, "Tipo:", typeof name);
console.log("Edad:", age, "Tipo:", typeof age);
console.log("Vida:", life, "Tipo:", typeof life);
console.log("No asignado:", notAssigned, "Tipo:", typeof notAssigned);
console.log("Valor vacío:", emptyValue, "Tipo:", typeof emptyValue);
console.log("Símbolo único:", uniqueSymbol, "Tipo:", typeof uniqueSymbol);
console.log("BigInt valor:", bigIntValue, "Tipo:", typeof bigIntValue);

// 3. Crea una variable con `var`, otra con `let` y otra con `const`. Imprime sus valores y tipos en la consola.

var variableVar = "Variable con var";
let variableLet = "Variable con let"; 
const variableConst = "Variable con const";
console.log("Variable var:", variableVar, "Tipo:", typeof variableVar);
console.log("Variable let:", variableLet, "Tipo:", typeof variableLet);
console.log("Variable const:", variableConst, "Tipo:", typeof variableConst);

// 4. Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y muestra los resultados en la consola.

let num1 = 10;
let num2 = 5;
let suma = num1 + num2; // Suma
let resta = num1 - num2; // Resta
let multiplicacion = num1 * num2; // Multiplicación
let division = num1 / num2; // División
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

// 5. A continuación, modifica los valores por otros del tipo y distinto tipo de dato, imprimiendo los resultados en la consola.

variableVar = 42; // Cambiando a Number
variableLet = false; // Cambiando a Boolean
// variableConst = "Nuevo valor"; // Esto no se puede hacer, ya que 'const' no permite reasignación
console.log("Variable var modificado:", variableVar, "Tipo:", typeof variableVar);
console.log("Variable let modificado:", variableLet, "Tipo:", typeof variableLet);
// console.log("Variable const modificado:", variableConst, "Tipo:", typeof variableConst); // Esto producirá un error porque 'const' no puede ser reasignado

// 6. Declara constantes con valores asociados a todos los tipos de datos primitivos y muestra sus valores y tipos en la consola.

const constString = "Constante de tipo string";
const constNumber = 100; // Constante de tipo number
const constBoolean = false; // Constante de tipo boolean
const constUndefined = undefined; // Constante de tipo undefined
const constNull = null; // Constante de tipo null
const constSymbol = Symbol('constante única'); // Constante de tipo symbol
const constBigInt = 12345678901234567890n; // Constante de tipo BigInt
console.log("Constante String:", constString, "Tipo:", typeof constString);
console.log("Constante Number:", constNumber, "Tipo:", typeof constNumber);
console.log("Constante Boolean:", constBoolean, "Tipo:", typeof constBoolean);
console.log("Constante Undefined:", constUndefined, "Tipo:", typeof constUndefined);
console.log("Constante Null:", constNull, "Tipo:", typeof constNull);
console.log("Constante Symbol:", constSymbol, "Tipo:", typeof constSymbol);
console.log("Constante BigInt:", constBigInt, "Tipo:", typeof constBigInt);

// 7. Modifica los valores de las constantes y muestra los resultados en la consola, observando que no se pueden modificar.

// constString = "Nuevo valor"; // Esto producirá un error porque 'const' no permite reasignación
// constNumber = 200; // Esto producirá un error porque 'const' no permite reasignación
// constBoolean = true; // Esto producirá un error porque 'const' no permite reasignación
// constUndefined = "Definido"; // Esto producirá un error porque 'const' no permite reasignación
// constNull = "No es nulo"; // Esto producirá un error porque 'const' no permite reasignación
// constSymbol = Symbol('nuevo símbolo'); // Esto producirá un error porque 'const' no permite reasignación
// console.log("Constante String modificado:", constString, "Tipo:", typeof constString); // Esto producirá un error
// console.log("Constante Number modificado:", constNumber, "Tipo:", typeof constNumber); // Esto producirá un error
// console.log("Constante Boolean modificado:", constBoolean, "Tipo:", typeof constBoolean); // Esto producirá un error
// console.log("Constante Undefined modificado:", constUndefined, "Tipo:", typeof constUndefined); // Esto producirá un error
// console.log("Constante Null modificado:", constNull, "Tipo:", typeof constNull); // Esto producirá un error
// console.log("Constante Symbol modificado:", constSymbol, "Tipo:", typeof constSymbol); // Esto producirá un error
// console.log("Constante BigInt modificado:", constBigInt, "Tipo:", typeof constBigInt); // Esto producirá un error porque 'const' no permite reasignación

// 8. Comenta las líneas que produzcan algún tipo de error al ejecutarse, explicando el motivo del error.

// Las constantes no pueden ser reasignadas, por lo que cualquier intento de modificar su valor producirá un error.
// Por ejemplo, intentar reasignar 'constString' producirá un error porque 'const' no permite reasignación.s

