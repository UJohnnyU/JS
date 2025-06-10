// Operadores

// Operadores aritméticos

let a = 10;
let b = 5;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponenciación (a elevado a la b)

a++; // Incremento
console.log(a); // 11
b--; // Decremento
console.log(b); // 4

// Operadores de asignación

let x = 20;
x += 5; // Suma y asigna
console.log(x); // 25
x -= 3; // Resta y asigna
console.log(x); // 22
x *= 2; // Multiplica y asigna
console.log(x); // 44
x /= 4; // Divide y asigna
console.log(x); // 11
x %= 3; // Módulo y asigna
console.log(x); // 2
x **= 3; // Exponenciación y asigna
console.log(x); // 8

// Operadores de comparación

console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == b); // Igualdad (valor)
console.log(a != b); // Desigualdad (valor)
console.log(a === b); // Igualdad estricta (valor y tipo)
console.log(a !== b); // Desigualdad estricta (valor y tipo)
console.log(0 == false); // Igualdad (0 es igual a false)
console.log(1 == false); // Igualdad (1 es igual a true)
console.log(0 == ""); // Igualdad (0 es igual a cadena vacía)
console.log(0 == " "); // Igualdad (0 es igual a cadena con espacio)
console.log(0 == "Hola"); // Igualdad (0 no es igual a cadena con texto)
console.log(0 === ""); // Desigualdad estricta (0 no es igual a cadena vacía)
console.log(undefined == null); // Igualdad (undefined es igual a null)
console.log(undefined === null); // Desigualdad estricta (undefined no es igual a null)

// truthy values (valores verdaderos)

// Todos los números positivos y negativos, excepto 0
// Cualquier cadena no vacía, incluyendo espacios
// Todos los boolean true

// falsy values (valores falsos)

// 0
//0n (BigInt cero)
// null
// undefined
// NaN (Not a Number)
// "" (cadena vacía)
// false (booleano falso)

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false
// or (||)
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true
// not (!)
console.log(!(5 > 10 && 15 > 20)); // true
console.log(!(5 > 10 || 15 > 20)); // true
console.log(!false); // true
console.log(!true); // false

// Operadores ternarios
const isRaining = false;
isRaining ? console.log("Lleva paraguas") : console.log("No hace falta paraguas");



