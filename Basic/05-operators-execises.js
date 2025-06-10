// 1. Crea una variable para cada operación aritmética básica 

let a = 10;
let b = 5;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División
console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponenciación (a elevado a la b)
// a++; // Incremento
// console.log(a); // 11
// b--; // Decremento
// console.log(b); // 4

// 2. Crea una variable para cada tipo de operación de asignación que haga uso de las variables utilizadas para las operaciones aritméticas

let x = 20;
x += a; // Suma y asigna
console.log(x); // 30
x -= b; // Resta y asigna
console.log(x); // 25
x *= b; // Multiplica y asigna
console.log(x); // 125
x /= a; // Divide y asigna
console.log(x); // 12.5
x %= b; // Módulo y asigna
console.log(x); // 2.5
x **= a; // Exponenciación y asigna
console.log(x); // 9765625

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a > b); // Mayor que
console.log(a >= b); // Mayor o igual que
console.log(a < b + 10); // Menor que (5 + 10 = 15)
console.log(a != b); // Desigualdad (valor)
console.log(a === 10); // Igualdad estricta (valor y tipo)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a < b); // Menor que
console.log(a <= b); // Menor o igual que
console.log(a == b); // Igualdad (valor)
console.log(a !== 10); // Desigualdad estricta (valor y tipo)
console.log(a === b); // Igualdad estricta (valor y tipo)

// 5. Utiliza el operador lógico and

console.log(a == 10 && b == 5); // Verdadero (ambas condiciones son verdaderas)

// 6. Utiliza el operador lógico or

console.log(a == 10 || b == 10); // Verdadero (una de las condiciones es verdadera)

// 7. Combina ambos operadores lógicos

console.log(a != b && a < x || b > x); // La primera parte es verdadera (a no es igual a b y a es menor que x), la segunda parte es falsa (b no es mayor que x)

// 8. Añade alguna negación

console.log(!(a < b && a < x) || b > x); // Verdadero (Negación convierte la primera parte en verdadera y b es mayor que x es falsa)

// 9. Utiliza el operador ternario

const isHolyDay = true;
isHolyDay ? console.log("Es día festivo") : console.log("No es día festivo"); // Es día festivo (isHolyDay es verdadero)

// 10. Combina operadores aritméticos, de comparación y lógicos

console.log((b + x) < a || isHolyDay == true); // Verdadero (La primera parte es falsa (a no es mayor que la suma de b y x) y es verdadero que es día festivo)