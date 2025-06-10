// Strings

let name = "John";
let greeting = "Hello, " + name + "!"; // Concatenación de cadenas
console.log(greeting); // "Hello, John!"
console.log(typeof greeting); // "string"

// Longitud de una cadena
console.log(greeting.length); // 12

// Acceso a caracteres individuales
console.log(greeting[0]); // "H"

// Métodos de cadenas
console.log(greeting.toUpperCase()); // "HELLO, JOHN!"
console.log(greeting.toLowerCase()); // "hello, john!"
console.log(greeting.indexOf("John")); // 7 (posición de "John" en la cadena)
console.log(greeting.includes("John")); // true (verifica si "John" está en la cadena)
console.log(greeting.slice(0, 5)); // "Hello" (extrae una subcadena desde el índice 0 hasta el 5)
console.log(greeting.replace("John", "Jane")); // "Hello, Jane!" (reemplaza "John" por "Jane")
console.log(greeting.split(',')); // (divide la cadena en un array usando " * " como separador)
console.log(greeting.at(7)); // "J" (accede al carácter en la posición 7)
console.log(greeting.charAt(7)); // "J" (accede al carácter en la posición 7, similar a at)
console.log(greeting.charCodeAt(7)); // 74 (código ASCII del carácter en la posición 7, que es "J")
console.log(greeting.codePointAt(7)); // La diferencia entre charCodeAt y codePointAt es que codePointAt devuelve el valor Unicode completo del carácter en la posición especificada, mientras que charCodeAt devuelve el valor ASCII o el valor de punto de código del carácter en esa posición.
console.log(greeting.concat(" How are you?")); // "Hello, John! How are you?" (concatena otra cadena al final)
console.log(greeting.endsWith("!")); // true (verifica si la cadena termina con "!")
console.log(greeting.lastIndexOf("o")); // 8 (última posición de "o" en la cadena)
console.log(greeting.localeCompare("Hello, John!")); // 0 (compara dos cadenas y devuelve 0 si son iguales)
console.log(greeting.match("John")); // ["John"] (busca "John" en la cadena y devuelve un array con el resultado)
let iterator = greeting.matchAll(/o/gi); // (Busca todas las ocurrencias de "o" en la cadena y devuelve un iterable con los resultados)
for (const match of iterator) {
    console.log(match); // Imprimirá cada coincidencia (o sea, "o")
}
console.log(greeting.normalize()); // "Hello, John!" (normaliza la cadena, útil para caracteres acentuados)
console.log(greeting.padEnd(15, '*')); // "Hello, John!****" (rellena la cadena hasta una longitud de 5 con "*")
console.log(greeting.padStart(15, '*')); // "****Hello, John!" (rellena la cadena hasta una longitud de 5 con "*")
console.log(greeting.repeat(2)); // "Hello, John!Hello, John!" (repite la cadena 2 veces)
console.log(greeting.replaceAll("o", "a")); // "Hella, Jahn!" (reemplaza todas las ocurrencias de "o" por "a")
console.log(greeting.search("John")); // 7 (busca "John" en la cadena y devuelve su posición)
console.log(greeting.startsWith("Hello")); // true (verifica si la cadena comienza con "Hello")
console.log(greeting.substring(0, 5)); // "Hello" (extrae una subcadena desde el índice 0 hasta el 5)
console.log(greeting.toLocaleLowerCase()); // "hello, john!" (convierte la cadena a minúsculas según la configuración regional)
console.log(greeting.toLocaleUpperCase()); // "HELLO, JOHN!" (convierte la cadena a mayúsculas según la configuración regional)
console.log(greeting.toString()); // "Hello, John!" (convierte la cadena a una cadena, aunque ya es una cadena)
console.log(greeting.trim()); // "Hello, John!" (elimina los espacios en blanco al inicio y al final de la cadena)
console.log(greeting.trimEnd()); // "Hello, John!" (elimina los espacios en blanco al final de la cadena)
console.log(greeting.trimStart()); // "Hello, John!" (elimina los espacios en blanco al inicio de la cadena)
console.log(greeting.valueOf()); // "Hello, John!" (devuelve el valor primitivo de la cadena, que es la propia cadena) 

// Plantillas literales (template literals)

let message = `Esta es mi
practica de JavaScript
con plantillas literales.`;

console.log(message); // Imprime el mensaje con saltos de línea
console.log(`Hola, ${name}! ¿Cómo estás?`); // Interpolación de variables
