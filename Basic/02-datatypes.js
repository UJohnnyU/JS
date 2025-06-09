// String (Cadena de Texto)

let name = "John Doe";
let alias = 'John Doe';
let email = `jhonkevinmurillo@gmail.com`;

// Number (Número)

let age = 30; // Puede ser entero o decimal
let height = 1.75;

// Boolean (Booleano)

let isStudent = true; // Verdadero o falso
let isEmployed = false; // Verdadero o falso

// Undefined (Indefinido)

let notAssigned; // Variable declarada pero no inicializada
let emptyValue = null; // Variable explícitamente vacía

// Symbol (Símbolo)

let uniqueSymbol = Symbol('unique'); // Un valor único e inmutable
let anotherSymbol = Symbol('unique'); // Otro símbolo, aunque tenga la misma descripción, es único
console.log(uniqueSymbol === anotherSymbol); // false, porque son símbolos únicos

// BigInt (Número entero grande)

let bigIntValue = 1234567890123456789012345678901234567890n; // Sufijo 'n' indica BigInt
let anotherBigInt = BigInt(12345678901234567890); // Convertir un número a BigInt
console.log(bigIntValue + anotherBigInt); // Operación con BigInt

// Mostrar los tipos de datos en la consola

console.log("Nombre:", name, "Tipo:", typeof name);
console.log("Alias:", alias, "Tipo:", typeof alias);
console.log("Email:", email, "Tipo:", typeof email);
console.log("Edad:", age, "Tipo:", typeof age);
console.log("Altura:", height, "Tipo:", typeof height);
console.log("Es estudiante:", isStudent, "Tipo:", typeof isStudent);
console.log("Está empleado:", isEmployed, "Tipo:", typeof isEmployed);
console.log("No asignado:", notAssigned, "Tipo:", typeof notAssigned);
console.log("Valor vacío:", emptyValue, "Tipo:", typeof emptyValue);
console.log("Símbolo único:", uniqueSymbol, "Tipo:", typeof uniqueSymbol);
console.log("Otro símbolo único:", anotherSymbol, "Tipo:", typeof anotherSymbol);
console.log("BigInt valor:", bigIntValue, "Tipo:", typeof bigIntValue);
console.log("Otro BigInt valor:", anotherBigInt, "Tipo:", typeof anotherBigInt);

