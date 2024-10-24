// Ejercicio 1 Crear un objeto vacío

let user = {};

// Agregar la propiedad 'name' con el valor 'John'
user.name = "John";

// Agregar la propiedad 'surname' con el valor 'Smith'
user.surname = "Smith";

// Cambiar el valor de 'name' a 'Pete'
user.name = "Pete";

// Remover la propiedad 'name' del objeto
delete user.name;

console.log(user); // Salida: {surname: "Smith"}



// Ejercicio 2 Verificar los vacios

function isEmpty(obj) {
    // Verificamos si el objeto tiene alguna propiedad propia
    for (let key in obj) {
        return false; // Si encontramos una propiedad, el objeto no está vacío
    }
    return true; // Si no encontramos ninguna propiedad, está vacío
}



//  Ejercicio 2 Ejemplo de uso:

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "Hora de levantarse";

console.log(isEmpty(schedule)); // false



//Ejercicio 3 Usando el "this" en un objeto literal

function makeUser() {
    return {
        name: "John",
        ref: this // 'this' aquí hace referencia al contexto global, no al objeto
    };
}

let user = makeUser();

// Este código arrojará un error o 'undefined' dependiendo del contexto de ejecución
// ya que 'this' en una función simple se refiere al contexto global (en el navegador sería el objeto 'window')
console.log(user.ref.name); // undefined




// Ejercicio 4 Crea una calculadora

let calculator = {
    // Método para leer valores y asignarlos a 'a' y 'b'
    read() {
        this.a = +prompt("Ingrese el primer número:", 0);
        this.b = +prompt("Ingrese el segundo número:", 0);
    },
    
    // Método para sumar 'a' y 'b'
    sum() {
        return this.a + this.b;
    },
    
    // Método para multiplicar 'a' y 'b'
    mul() {
        return this.a * this.b;
    }
};

// Ejemplo de uso:
calculator.read();
alert("Suma: " + calculator.sum()); // Muestra la suma de a y b
alert("Multiplicación: " + calculator.mul()); // Muestra la multiplicación de a y b



// Ejercicio 5 Encadenamiento

let ladder = {
    step: 0,
    
    // Incrementar el paso
    up() {
        this.step++;
        return this; // Retornamos 'this' para permitir el encadenamiento
    },
    
    // Decrementar el paso
    down() {
        this.step--;
        return this; // Retornamos 'this' para permitir el encadenamiento
    },
    
    // Mostrar el paso actual
    showStep() {
        alert(this.step);
        return this; // Retornamos 'this' para permitir el encadenamiento
    }
};

// Ejemplo de uso con encadenamiento:
ladder.up().up().down().showStep(); // Muestra 1




// Ejercicio 6 Crear nueva Calculadora (con constructor)

function Calculator() {
    // Método para leer los valores de a y b
    this.read = function() {
        this.a = +prompt("Ingrese el primer número:", 0);
        this.b = +prompt("Ingrese el segundo número:", 0);
    };
    
    // Método para sumar 'a' y 'b'
    this.sum = function() {
        return this.a + this.b;
    };
    
    // Método para multiplicar 'a' y 'b'
    this.mul = function() {
        return this.a * this.b;
    };
}

// Ejemplo de uso:
let calculator = new Calculator();
calculator.read();
alert("Suma: " + calculator.sum()); // Muestra la suma de a y b
alert("Multiplicación: " + calculator.mul()); // Muestra la multiplicación de a y b




// Ejercicio 7 Crear nuevo Acumulador

function Accumulator(startingValue) {
    this.value = startingValue; // Inicializamos el valor con el valor inicial
    
    // Método para leer un valor y sumarlo al valor actual
    this.read = function() {
        this.value += +prompt("Ingrese un número para agregar:", 0);
    };
}

// Ejemplo de uso:
let accumulator = new Accumulator(1); // Valor inicial 1

accumulator.read(); // Agrega el valor introducido al actual
accumulator.read(); // Agrega el valor introducido al actual

alert(accumulator.value); // Muestra la suma de todos los valores ingresados
