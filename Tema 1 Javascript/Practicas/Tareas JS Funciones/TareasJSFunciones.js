// Ejercicio 1 Ultimo valor del bucle

let i = 3;

while (i) {
    alert(i--); // Disminuye i después de mostrar su valor
}

// Explicación: El último valor mostrado será 1. 
// El bucle while se ejecuta mientras i sea verdadero (es decir, mientras no sea 0). 
// El ciclo se detendrá cuando i sea 0, pero antes de eso, mostrará 1 en la alerta.


// Ejercicio 2 Valores mostrados por el bucle while (forma de prefijo y sufijo)

let i = 0;
while (++i < 5) {
    alert(i); // Se mostrará 1, 2, 3, 4
}

// Explicación: En esta forma, `++i` incrementa i antes de la comparación, 
// por lo que el primer valor que se alerta es 1.


//Ejercicio 3 Valores mostrados por el bucle for

// Forma de sufijo i++:

for (let i = 0; i < 5; i++) {
    alert(i); // Se mostrará 0, 1, 2, 3, 4
}

// Explicación: El ciclo `for` comienza en 0 y se ejecuta hasta que i es 5. 
// Por lo tanto, los valores mostrados son 0 a 4.

// Forma de prefijo ++i

for (let i = 0; i < 5; ++i) {
    alert(i); // Se mostrará 0, 1, 2, 3, 4
}

// Explicación: El resultado es el mismo que con `i++` 
// ya que la expresión de incremento en `for` ocurre después de cada iteración.



// Ejercicio 4 Muestra números pares en el bucle

for (let i = 2; i <= 10; i += 2) {
    alert(i); // Se mostrarán los números 2, 4, 6, 8, 10
}

// Explicación: El bucle comienza en 2 y aumenta en 2 en cada iteración, 
// lo que hace que solo se muestren números pares hasta 10.


// Ejercicio 5 Reemplaza for por while

let i = 0;
while (i < 3) {
    alert(`Número ${i}!`); // Se mostrará "Número 0!", "Número 1!" y "Número 2!"
    i++;
}

// Explicación: El bucle `while` hace lo mismo que el `for`, 
// pero la inicialización y el incremento de `i` se gestionan manualmente dentro del ciclo.


// Ejercicio 6 Repite hasta que la entrada sea la correcta

let num;

do {
    num = prompt("Ingrese un número mayor a 100", 0);
} while (num <= 100 && num !== null);

// Explicación: El bucle `do...while` se ejecuta hasta que el usuario ingresa un número mayor a 100 
// o cancela la entrada (es decir, cuando `num` es `null`).


// Ejercicio 7 Muestra números primos

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Itera desde 2 hasta n
    for (let j = 2; j < i; j++) { // Comprueba si el número es divisible por algún número anterior
        if (i % j == 0) continue nextPrime; // Si es divisible, no es primo
    }
    alert(i); // Si no es divisible, se muestra como primo
}

// Explicación: El bucle externo itera desde 2 hasta n. 
// El bucle interno verifica si el número actual tiene divisores además de 1 y él mismo.
// Si se encuentra un divisor, el número no es primo y se pasa al siguiente.


// Ejercicio 8 Reescribe con funciones de flecha

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

// Ejemplo de uso:
ask(
    "Do you agree?",
    () => alert("You agreed."),   // Función flecha en lugar de función anónima
    () => alert("You canceled the execution.") // Función flecha
);

// Explicación: Se reescribió la función `ask` con una función de flecha. 
// Las funciones `yes` y `no` también se pasan como funciones de flecha.


// Ejercicio 9 Reescribe if en switch

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// Explicación: El código usa `switch` para manejar diferentes valores de `a`. 
// Los casos 2 y 3 comparten la misma salida, mostrando "2,3".


// Ejercicio 10 Reescribe switch en un if...else

let navegador = 'Chrome';

if (navegador === 'Edge') {
    alert("Tienes Edge!");
} else if (navegador === 'Chrome' || navegador === 'Firefox' || navegador === 'Safari' || navegador === 'Opera') {
    alert("Está bien, soportamos estos navegadores también");
} else {
    alert("¡Esperamos que esta página se vea bien!");
}

// Explicación: Se reescribió el `switch` utilizando condiciones `if...else if` 
// para manejar diferentes valores de `navegador`.


// Ejercicio 11 ¿Es "else" requerido?

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('¿Tus padres te permitieron?');
}

// Explicación: La versión sin `else` funciona igual que la original. 
// Si la primera condición es verdadera, la función retorna inmediatamente, 
// por lo que no se necesita el `else`.


// Ejercicio 12 Reescribe la función utilizando ? o ||

// Usando el operador ternario ?:

function checkAge(age) {
    return age > 18 ? true : confirm('¿Tienes permiso de tus padres?');
}

// Explicación: El operador ternario hace lo mismo que la estructura `if...else` 
// pero en una sola línea.

// Usando el operador ||:

function checkAge(age) {
    return age > 18 || confirm('¿Tienes permiso de tus padres?');
}

// Explicación: El operador `||` devuelve `true` si la primera condición es verdadera, 
// de lo contrario, evalúa la segunda expresión.


// Ejercicio 13 Función min(a, b)

function min(a, b) {
    return a < b ? a : b;
}

// Ejemplo de uso:
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

// Explicación: La función devuelve el menor de los dos números utilizando el operador ternario.


// Ejercicio 14 Función pow(x, n)

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x; // Multiplicamos x por sí mismo n veces
    }
    return result;
}

// Ejemplo de uso:
let x = prompt("Ingrese el valor de x:", '');
let n = prompt("Ingrese el valor de n:", '');

if (n < 1) {
    alert('n debe ser un número natural');
} else {
    alert(pow(x, n));
}

// Explicación: La función calcula la potencia de un número `x` elevado a `n` 
// multiplicando x por sí mismo n veces.

