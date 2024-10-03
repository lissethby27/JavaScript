function ejercicio1() {
    let frase = '';

    while (true) {
        // Solicitar al usuario que introduzca una frase
        frase = prompt('Introduce una frase de al menos cinco palabras:').trim();

        // Dividir la frase en palabras, ignorando espacios extra
        let palabras = frase.split(/\s+/);

        // Verificar si tiene al menos 5 palabras
        if (palabras.length >= 5) {
            break; // Salir del bucle si la frase es válida
        } else {
            console.log('%cLa frase debe tener al menos cinco palabras. Inténtalo de nuevo.', 'color: red;');
            alert('La frase debe tener al menos cinco palabras. Inténtalo de nuevo.');
        }
    }

    // 1. Contar los caracteres que no sean espacios
    let sinEspacios = frase.replace(/\s+/g, ''); // Eliminar todos los espacios
    console.log(`%cNúmero de caracteres (sin espacios): ${sinEspacios.length}`, 'color: blue;');

    // 2. Reemplazar todas las vocales por asteriscos
    let fraseConAsteriscos = frase.replace(/[aeiouáéíóú]/gi, '*');
    console.log(`%cFrase con vocales reemplazadas por asteriscos: ${fraseConAsteriscos}`, 'color: green;');

    // 3. Sustituir cada carácter en posición par (ignorando espacios) por guion bajo "_"
    let fraseModificada = '';
    let contador = 0;

    for (let char of frase) {
        if (char !== ' ') { // Ignorar los espacios
            contador++;
            if (contador % 2 === 0) {
                fraseModificada += '_'; // Sustituir los caracteres en posición par por "_"
            } else {
                fraseModificada += char; // Mantener los caracteres en posición impar
            }
        } else {
            fraseModificada += ' '; // Mantener los espacios
        }
    }


    console.log(`%cFrase con caracteres en posición par reemplazados: ${fraseModificada}`, 'color: purple;');
}


function ejercicio2() {
    let palabras = [];

    for (let i = 0; i < 7; i++) {
        let palabra = prompt(`Introduce la palabra ${i + 1} de 7:`);
        palabras.push(palabra);
    }

    // Eliminar palabras de 4 letras o menos, y ordenar ignorando mayúsculas/minúsculas
    let palabrasFiltradas = palabras.filter(palabra => palabra.length > 4).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    // Mostrar palabras ordenadas
    console.log(`%cPalabras ordenadas: ${palabrasFiltradas.join(', ')}`, 'color: blue;');

    // Pedir una palabra para buscarla en el listado
    let palabraBuscar = prompt('Introduce una palabra para buscar en el listado:');

    let palabraEncontrada = palabrasFiltradas.some(palabra => palabra.toLowerCase() === palabraBuscar.toLowerCase());

    if (palabraEncontrada) {
        console.log(`%cLa palabra "${palabraBuscar}" está en el listado.`, 'color: green;');
    } else {
        // Si no está, la añadimos y volvemos a ordenar
        palabrasFiltradas.push(palabraBuscar);
        palabrasFiltradas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        console.log(`%cLa palabra "${palabraBuscar}" no estaba en el listado, se ha añadido. Nuevo listado: ${palabrasFiltradas.join(', ')}`, 'color: purple;');
    }
}

function ejercicio3() {
    let alumnos = {
        "Juan": 8.5,
        "Ana": 9.0,
        "Carlos": 7.75,
        "Maria": 9.5
    };

    // Mostrar la lista de alumnos y sus notas
    console.log('%cLista de alumnos y notas:', 'color: blue;');
    for (let alumno in alumnos) {
        console.log(`${alumno}: ${alumnos[alumno]}`);
    }

    // Pedir el nombre del estudiante
    let nombre = prompt('Introduce el nombre de un estudiante:').trim();

    if (alumnos[nombre] !== undefined) {
        // Si el estudiante existe, mostrar su nota
        console.log(`%cNota de ${nombre}: ${alumnos[nombre]}`, 'color: green;');
    } else {
        // Si no existe, agregar al estudiante
        let nota;
        do {
            nota = parseFloat(prompt('El estudiante no está registrado. Introduce su nota (0-10):'));
        } while (isNaN(nota) || nota < 0 || nota > 10);

        alumnos[nombre] = nota;
        console.log(`%c${nombre} ha sido añadido con una nota de ${nota}`, 'color: purple;');
    }

    // Calcular la nota media
    let totalNotas = 0;
    let numeroAlumnos = 0;

    for (let alumno in alumnos) {
        totalNotas += alumnos[alumno];
        numeroAlumnos++;
    }

    let media = totalNotas / numeroAlumnos;
    console.log(`%cNota media de la clase: ${media.toFixed(2)}`, 'color: orange;');

    // Mostrar los alumnos ordenados alfabéticamente
    let alumnosOrdenados = Object.keys(alumnos).sort();
    console.log(`%cAlumnos ordenados alfabéticamente: ${alumnosOrdenados.join(', ')}`, 'color: blue;');
}


function ejercicio4() {
    // Conjuntos de múltiplos de 2 y 3 desde 0 hasta 30
    const multiplosDe2 = new Set();
    const multiplosDe3 = new Set();

    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) {
            multiplosDe2.add(i);
        }
        if (i % 3 === 0) {
            multiplosDe3.add(i);
        }
    }

    console.log('Mira el log para ver el resultado');

    // 1) Unión de ambos conjuntos
    const union = new Set([...multiplosDe2, ...multiplosDe3]);
    console.log(`%cUnión de múltiplos de 2 y 3: ${[...union]}`, 'color: blue;');

    // 2) Intersección de ambos conjuntos
    const interseccion = new Set([...multiplosDe2].filter(x => multiplosDe3.has(x)));
    console.log(`%cIntersección de múltiplos de 2 y 3: ${[...interseccion]}`, 'color: green;');

    // 3) Diferencia del primero menos el segundo
    const diferencia1 = new Set([...multiplosDe2].filter(x => !multiplosDe3.has(x)));
    console.log(`%cDiferencia de múltiplos de 2 menos múltiplos de 3: ${[...diferencia1]}`, 'color: orange;');

    // 4) Diferencia del segundo menos el primero
    const diferencia2 = new Set([...multiplosDe3].filter(x => !multiplosDe2.has(x)));
    console.log(`%cDiferencia de múltiplos de 3 menos múltiplos de 2: ${[...diferencia2]}`, 'color: purple;');

    // 5) Exclusión de los elementos que pertenecen a ambos conjuntos
    const exclusion = new Set([...multiplosDe2].filter(x => !interseccion.has(x)).concat([...multiplosDe3].filter(x => !interseccion.has(x))));
    console.log(`%cExclusión de elementos que pertenecen a ambos conjuntos: ${[...exclusion]}`, 'color: red;');
}

function ejercicio5() {
    let numeros;

    while (true) {
        numeros = prompt('Introduce una serie de números separados por comas:');
        // Convertimos la entrada en un array de números
        let arrayNumeros = numeros.split(',').map(num => num.trim());

        // Verificamos si todos los elementos son numéricos
        const sonNumericos = arrayNumeros.every(num => !isNaN(num) && num !== '');

        if (sonNumericos) {
            // Convertimos los elementos a números
            arrayNumeros = arrayNumeros.map(Number);
            break; // Salimos del bucle si todos son números
        }

        console.log('%cPor favor, introduce solo números válidos.', 'color: red;');
    }

    // Contamos la frecuencia de cada número
    const frecuencia = {};
    arrayNumeros.forEach(num => {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
    });

    // Filtramos los números que aparecen solo una vez
    const unicos = Object.keys(frecuencia).filter(num => frecuencia[num] === 1).map(Number);

    // Mostramos los números únicos
    console.log(`%cNúmeros que aparecen solo una vez: ${unicos.join(', ')}`, 'color: green;');

    // Calculamos la media de los números únicos
    const suma = unicos.reduce((acc, num) => acc + num, 0);
    const media = unicos.length > 0 ? (suma / unicos.length) : 0;

    // Mostramos la media
    console.log(`%cMedia de los números únicos: ${media.toFixed(2)}`, 'color: blue;');
}


function ejercicio6() {
    let frase = prompt('Introduce una frase o palabra para verificar si es un palíndromo:');

    // Función para normalizar la frase: eliminar caracteres no alfabéticos y convertir a minúsculas
    const normalizar = (str) => {
        return str
            .toLowerCase() // Convertir a minúsculas
            .normalize('NFD') // Normalizar para separar acentos
            .replace(/[^a-z]/g, ''); // Eliminar caracteres no alfabéticos
    };

    // Normalizamos la frase
    const fraseNormalizada = normalizar(frase);

    // Comprobamos si es un palíndromo
    const esPalindromo = fraseNormalizada === fraseNormalizada.split('').reverse().join('');

    // Mostramos el resultado en la consola
    if (esPalindromo) {
        console.log(`%cLa frase "${frase}" es un palíndromo.`, 'color: green;');
    } else {
        console.log(`%cLa frase "${frase}" no es un palíndromo.`, 'color: red;');
    }
}

// Lista para almacenar las tareas
let tareas = [];

// Función para agregar tarea
function agregarTarea() {
    const tarea = prompt('Introduce la tarea que deseas agregar:');

    if (tareas.includes(tarea)) {
        console.log('%cLa tarea ya existe. Por favor, ingresa una tarea diferente.', 'color: red;');
    } else if (tarea) {
        tareas.push({ nombre: tarea, completada: false });
        console.log(`%cTarea agregada: "${tarea}"`, 'color: green;');
    }
}

// Función para completar tarea
function completarTarea() {
    const tarea = prompt('Introduce la tarea que deseas marcar como completada:');
    const index = tareas.findIndex(t => t.nombre === tarea);

    if (index !== -1) {
        tareas[index].completada = true;
        console.log(`%cTarea completada: "${tarea}"`, 'color: green;');
    } else {
        console.log('%cLa tarea no se encuentra en la lista.', 'color: red;');
    }
}

// Función para eliminar tarea
function eliminarTarea() {
    const tarea = prompt('Introduce la tarea que deseas eliminar:');
    const index = tareas.findIndex(t => t.nombre === tarea);

    if (index !== -1) {
        tareas.splice(index, 1);
        console.log(`%cTarea eliminada: "${tarea}"`, 'color: green;');
    } else {
        console.log('%cLa tarea no se encuentra en la lista.', 'color: red;');
    }
}

// Función para mostrar todas las tareas
function mostrarLista() {
    if (tareas.length === 0) {
        console.log('%cNo hay tareas en la lista.', 'color: orange;');
        return;
    }

    console.log('%cLista de tareas:', 'color: blue;');
    tareas.forEach(t => {
        console.log(`%c${t.nombre} - ${t.completada ? 'Completada' : 'Pendiente'}`, 'color: black;');
    });
}

// Función para mostrar solo las tareas pendientes
function mostrarPendientes() {
    const pendientes = tareas.filter(t => !t.completada);

    if (pendientes.length === 0) {
        console.log('%cNo hay tareas pendientes.', 'color: orange;');
        return;
    }

    console.log('%cTareas pendientes:', 'color: blue;');
    pendientes.forEach(t => {
        console.log(`%c${t.nombre}`, 'color: black;');
    });
}

