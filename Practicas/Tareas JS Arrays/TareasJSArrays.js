//1. Barajar un array (shuffle)

function shuffle(array) {
    // Recorremos el array desde el último elemento hasta el primero
    for (let i = array.length - 1; i > 0; i--) {
      // Seleccionamos un índice aleatorio entre 0 y i
      let j = Math.floor(Math.random() * (i + 1));
      // Intercambiamos los elementos en las posiciones i y j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Ejemplo de uso
  let arr = [1, 2, 3];
  console.log(shuffle(arr)); // [3, 1, 2] (orden aleatorio)

  
//2. Operaciones en arrays

// Crear un array styles con los ítems “Jazz” y “Blues”.
let styles = ["Jazz", "Blues"];
console.log(styles); // ["Jazz", "Blues"]

// Agregar “Rock-n-Roll” al final.
styles.push("Rock-n-Roll");
console.log(styles); // ["Jazz", "Blues", "Rock-n-Roll"]

// Reemplazar el valor en el medio por “Classics”.
let middleIndex = Math.floor(styles.length / 2); // Encontrar índice medio
styles[middleIndex] = "Classics";
console.log(styles); // ["Jazz", "Classics", "Rock-n-Roll"]

// Quitar el primer valor del array y mostrarlo.
let removedElement = styles.shift();
console.log(removedElement); // "Jazz"
console.log(styles); // ["Classics", "Rock-n-Roll"]

// Anteponer “Rap” y “Reggae” al array.
styles.unshift("Rap", "Reggae");
console.log(styles); // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]


//3. Suma de números ingresados

function sumInput() {
    let numbers = [];
    let input;
    
    // Pedimos al usuario valores hasta que ingrese un valor no numérico o vacío
    while (true) {
      input = prompt("Ingresa un número:", "");
      
      // Si el input está vacío, no es un número o se presiona "Esc", salimos
      if (input === null || input === "" || isNaN(input)) break;
      
      numbers.push(+input); // Convertimos la entrada a número y la guardamos
    }
    
    // Calculamos la suma de los números
    let sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum;
  }
  
  console.log(sumInput()); // Ejemplo: si se ingresan [5, 10, 3], devuelve 18

  
//4. Ordenar usuarios por edad
function sortByAge(users) {
    // Ordenamos el array de usuarios basado en la propiedad "age"
    return users.sort((a, b) => a.age - b.age);
  }
  
  // Ejemplo de uso
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [pete, john, mary];
  sortByAge(arr);
  
  console.log(arr); // [{ name: "John", age: 25 }, { name: "Mary", age: 28 }, { name: "Pete", age: 30 }]
  

//5. Obtener edad promedio  


function getAverageAge(users) {
    // Calculamos el promedio sumando todas las edades y dividiendo por la cantidad de usuarios
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
  }
  
  // Ejemplo de uso
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [john, pete, mary];
  console.log(getAverageAge(arr)); // 28

  
//6. Crear un objeto a partir de un array  

function groupById(users) {
    // Usamos reduce para construir el objeto
    return users.reduce((obj, user) => {
      obj[user.id] = user;
      return obj;
    }, {});
  }
  
  // Ejemplo de uso
  let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
  ];
  
  let usersById = groupById(users);
  console.log(usersById);
  /* Resultado:
  {
    john: { id: 'john', name: "John Smith", age: 20 },
    ann: { id: 'ann', name: "Ann Smith", age: 24 },
    pete: { id: 'pete', name: "Pete Peterson", age: 31 }
  }
  */

  
//7. Mapa a objetos

let users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 },
  ];
  
  // Mapeamos el array a un nuevo array con fullName y id
  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
  
  console.log(usersMapped);
  /* Resultado:
  [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */

  
  // 8. Copiar y ordenar un array


  function copySorted(arr) {
    // Creamos una copia del array original y la ordenamos
    return arr.slice().sort();
  }
  
  // Ejemplo de uso
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  
  console.log(sorted); // ["CSS", "HTML", "JavaScript"]
  console.log(arr);    // ["HTML", "JavaScript", "CSS"] (sin modificar)

  
// 9. Mapa a nombres


let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

// Mapeamos el array a un array de nombres
let names = users.map(user => user.name);

console.log(names); // ["John", "Pete", "Mary"]


//  10. Subarray máximo



function getMaxSubSum(arr) {
  let maxSum = 0; // Almacena la máxima suma
  let partialSum = 0; // Almacena la suma parcial

  for (let item of arr) {
    partialSum += item;  // Añadimos el ítem actual a la suma parcial
    if (partialSum < 0) partialSum = 0; // Si la suma parcial es negativa, la reiniciamos
    maxSum = Math.max(maxSum, partialSum); // Actualizamos la máxima suma si es necesario
  }

  return maxSum;
}

// Ejemplo de uso
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5



// 11. Filtrar elementos únicos de un array


function unique(arr) {
  // Creamos un conjunto (Set) para eliminar duplicados
  return Array.from(new Set(arr));
}

// Ejemplo de uso
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Hare", ":-O"];
console.log(unique(strings)); // ["Hare", "Krishna", ":-O"]



// 12. Crear una calculadora extensible



function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  // Método para calcular una expresión
  this.calculate = function(str) {
    let [a, operator, b] = str.split(" ");
    a = +a;
    b = +b;
    
    return this.methods[operator](a, b);
  };

  // Método para añadir nuevas operaciones
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// Ejemplo de uso
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3")); // 8



// DESESTRUCTURACION 

// 1. El salario máximo


function topSalary(salaries) {
  // Si el objeto está vacío, retornamos null
  if (Object.keys(salaries).length === 0) return null;

  let maxSalary = 0;
  let topPerson = null;

  // Usamos Object.entries para iterar sobre pares [nombre, salario]
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;  // Actualizamos el salario máximo
      topPerson = name;    // Actualizamos la persona con el salario máximo
    }
  }

  return topPerson;
}

// Ejemplo de uso
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries)); // Pete


/* Explicación:
Utilizamos Object.entries para obtener un array de pares [clave, valor] y luego desestructuramos cada par en el bucle for.
Si el objeto salaries está vacío, devolvemos null.
Si varias personas tienen el mismo salario máximo, se devuelve cualquiera de ellas (en este caso será la primera que se encuentre). */


// 2. Asignación desestructurante


// El objeto user
let user = { 
  name: "John", 
  years: 30 
};

// Desestructuración del objeto
let { name, years: age, isAdmin = false } = user;

// Mostramos los valores desestructurados
console.log(name);    // John
console.log(age);     // 30
console.log(isAdmin); // false



/* Explicación:
Estamos desestructurando el objeto user. La propiedad name se asigna directamente a la variable name.
Usamos years: age para asignar la propiedad years a una nueva variable llamada age.
La propiedad isAdmin no existe en el objeto, por lo que le asignamos un valor predeterminado de false.*/