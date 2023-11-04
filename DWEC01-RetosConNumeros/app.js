// Numeros
// 1. Solicite dos números y muestre su suma
const form1 = document.getElementById('form1');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    res.value = parseInt(n1.value) + parseInt(n2.value);
});
// 2. Solicite dos números y muestre el mayor de ellos
const form2 = document.getElementById('form2');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    res1.value = Math.max(parseInt(n3.value), parseInt(n4.value));
});
// 3. Solicite un número y lo divida por 2, por 4 y por 8
const form3 = document.getElementById('form3');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    let respuesta = "";
    for (let i = 2; i <= 8; i *= 2) {
        let division = parseInt(n5.value) / i;
        respuesta += ` <li>${n5.value} / ${i} = ${division} </li>`;
    }
    res3.innerHTML = respuesta;
});
// 4. Solicite un número e indique si es par o impar
const form4 = document.getElementById('form4');
form4.addEventListener('submit', (e) => {
    e.preventDefault();
    esParRes.innerHTML = (parseInt(esPar.value) % 2 === 0) ? "Es par" : "Es impar";
});

// 5. Solicite un número y muestre una cuenta atrás
const form5 = document.getElementById('form5');
form5.addEventListener('submit', (e) => {
    e.preventDefault();
    var i = parseInt(numCuenta.value);
    console.log(i);
    for (i = parseInt(numCuenta.value); i >= 0; i--) {
        numCuentaRes.innerHTML += i + "<br/>";
    }
});

// 6. Solicite tres números y muestre el menor de ellos. Realizar el mismo ejercicio para n números y mostrar el mayor
const form6 = document.getElementById('form6');
form6.addEventListener('submit', (e) => {
    e.preventDefault();

    const arr = (f6_num.value).split(",");
    let min = parseInt(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if (min > parseInt(arr[i])) {
            min = parseInt(arr[i]);
        }
    }
    f6_res.innerHTML = min;
});

// 7. Solicite tres números y muestre el central, si no hay uno central, debe advertirlo
const form7 = document.getElementById('form7');
form7.addEventListener('submit', (e) => {
    e.preventDefault();
    const arr = (f7_num.value).split(",");
    const arrNum = arr.map(elemento => parseInt(elemento));
    if (arrNum.length !== 3 || (arrNum[0] === arrNum[1] || arrNum[2] === arrNum[1])) {
        f7_res.innerHTML = "Debes introducir tres números diferentes separados por coma";
    } else {
        arrNum.sort(function (a, b) {
            return a - b
        });
        f7_res.innerHTML = arrNum[1];
    }
});

// 8. Solicite cuatro números y los muestre en orden
const form8 = document.getElementById('form8');
form8.addEventListener('submit', (e) => {
    e.preventDefault();
    const arr = (f8_num.value).split(",");
    const arrNum = arr.map(elemento => parseInt(elemento)).sort(function (a, b) {
        return a - b
    });
    f8_res.innerHTML = arrNum;
});

// Ordenar un array - Como lo resuelve con una función
function ordenarNumArray(numArray) {
    for (let i = 0; i < numArray.length - 1; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[i] > numArray[j]) {

                let tmp = numArray[i];
                numArray[i] = numArray[j];

                numArray[j] = tmp;
            }
        }
    }

    return numArray;
}

//9 Solicite números al usuario y calcule la media aritmética de todos ellos. Para
//terminar de introducir números, el usuario introducirá un número negativo. Realizar
//el mismo ejercicio para las medias armónica, cuadrática y geométrica 
const form9 = document.getElementById('form9');
form9.addEventListener('submit', (e) => {
    e.preventDefault();
    let nota = parseFloat(prompt("Introduce la nota: "));
    let suma = 0;
    let contador = 0;
    while (nota >= 0) {
        contador++;
        suma += nota;
        nota = parseFloat(prompt("Introduce la nota: "));
    }

    f9_res.innerHTML = "La media es " + (suma / contador);

});

//10. Solicite números enteros al usuario. Para terminar de introducir números, el usuario
//introducirá el cero. A continuación se mostrará un sencillo histograma: El número de
//positivos y el número de negativos usando asteriscos (uno para cada ocurrencia)
const form10 = document.getElementById('form10');
form10.addEventListener('submit', (e) => {
    e.preventDefault();
    let num = parseFloat(prompt("Introduce número entero (0 para finalizar): "));
    let positivos = "";
    let negativos = "";
    while (num !== 0) {
        if (num > 0) {
            positivos += "*";
        } else {
            negativos += "*";
        }
        num = parseFloat(prompt("Introduce número entero (0 para finalizar): "));
    }

    f10_res1.innerHTML = 'Positivos: ' + positivos;
    f10_res2.innerHTML = 'Negativos: ' + negativos;

});

//11. Solicite la estatura y el peso del usuario y, basándose en el cálculo de su IMC le
//informe de su estado nutricional
const form11 = document.getElementById('form11');
form11.addEventListener('submit', (e) => {
    e.preventDefault();
    let pesoF = parseFloat(peso.value);
    let alturaF = parseFloat(altura.value);
    alturaF = alturaF / 100;
    const imc = pesoF / (alturaF * alturaF);
    let text = "";

    if (imc < 18.50) {
        text = "Peso bajo";
    } else if (imc < 25) {
        text = "Peso Normal";
    } else if (imc < 30) {
        text = "Sobre Peso";
    } else if (imc < 35) {
        text = "Obesidad I";
    } else if (imc < 40) {
        text = "Obesidad II";
    } else {
        text = "Obesidad mórbida";
    }

    f11_res.innerHTML = "IMC=" + imc + " -- " + text;

});

//12. Solicite un número al usuario y muestre la suma de todos los números naturales
//desde el 1 hasta el número introducido
const form12 = document.getElementById('form12');
form12.addEventListener('submit', (e) => {
    e.preventDefault();
    const max = parseInt((f12_num.value));
    if (max <= 0) {
        f12_res.innerHTML = "Introduce un número natural mayor que 0"
    } else {
        let suma = 0;

        for (var i = 1; i <= max; i++) {
            suma += i;
        }

        f12_res.innerHTML = suma;
    }

});

//13. Solicite dos números al usuario y muestre la suma de todos los números naturales
//entre ellos incluyendo ambos
const form13 = document.getElementById('form13');
form13.addEventListener('submit', (e) => {
    e.preventDefault();
    const n1 = parseInt(f13_num1.value);
    const n2 = parseInt(f13_num2.value);

    if (n1 <= 0 || n2 <= 0 || n1 === n2) {
        f13_res.innerHTML = "Introduce un número natural mayor que 0"
    } else {
        let suma = 0;
        let min = Math.min(n1, n2);
        console.log(min);
        let max = Math.max(n1, n2);
        console.log(max);
        for (var i = min; i <= max; i++) {
            suma += i;
        }
        f13_res.innerHTML = suma;
    }

});

//14. Solicite una hora del día al usuario entre las 0 y las 11 y un número de horas. Se
//mostrará que hora indicará el reloj pasadas ese número de horas
const form14 = document.getElementById('form14');
form14.addEventListener('submit', (e) => {
    e.preventDefault();
    const hora = parseInt(f14_num1.value);
    const contador = parseInt(f14_num2.value);
    let h_final = hora;

    for (var i = 0; i < contador; i++) {
        if (h_final < 11) {
            h_final++;
        } else {
            h_final = 0;
        }
    }
    f14_res.innerHTML = h_final;

});

// 15. Solicite un número al usuario y muestre todos sus múltiplos del 0 al 100
const form15 = document.getElementById('form15');
form15.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f15_num1.value);
    let text = "";
    for (var i = 0; i <= 100; i++) {
        (i !== 100) ? text += (num * i) + ", " : text += (num * i);
    }

    f15_res.textContent = text;

});

// 16. Solicite un número y muestre el número de dígitos que lo forman
const form16 = document.getElementById('form16');
form16.addEventListener('submit', (e) => {
    e.preventDefault();
    f16_res.textContent = f16_num1.value.length;
});

//17. Solicite un número y muestre sus dígitos invertidos
const form17 = document.getElementById('form17');
form17.addEventListener('submit', (e) => {
    e.preventDefault();
    const numRev = f17_num1.value.split('').reverse();
    let respuesta = "";
    numRev.forEach(num => respuesta += num.toString());
    f17_res.textContent = respuesta;
});

// 18. Solicite un importe e indique el importe con IVA
const form18 = document.getElementById('form18');
form18.addEventListener('submit', (e) => {
    e.preventDefault();
    const IVA = 0.21;
    const importe = parseFloat((f18_num1.value));
    const precio = importe + (importe * IVA);
    f18_res.textContent = `Precio = ${precio}`;
});

// 19. Solicite un importe con IVA y lo indique sin IVA
const form19 = document.getElementById('form19');
form19.addEventListener('submit', (e) => {
    e.preventDefault();
    const IVA = 1.21;
    const importeIVA = parseFloat((f19_num1.value));
    const importeSinIVA = importeIVA / IVA;
    f19_res.textContent = `Precio = ${importeSinIVA}`;
});

// 20. Solicite un año e indique si es bisiesto o no
const form20 = document.getElementById('form20');
form20.addEventListener('submit', (e) => {
    e.preventDefault();
    const year = parseInt(f20_num1.value);

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        f20_res.textContent = "Es bisiesto";
    } else {
        f20_res.textContent = "No bisiesto";
    }
});

//21. Solicite duraciones de tramos de viaje en minutos (hasta que se introduzca un cero o
//un valor negativo) y muestre la duración del viaje en horas y minutos
const form21 = document.getElementById('form21');
form21.addEventListener('submit', (e) => {
    e.preventDefault();
    let min = parseInt(prompt("Introduce duración o cero para salir"));
    let duracion = 0;
    while (min > 0) {
        duracion += parseInt(min);
        min = parseInt(prompt("Introduce duración o cero para salir"));
    }
    let horas = 0;
    while (duracion >= 60) {
        horas++;
        duracion -= 60;
        console.log(duracion);
    }
    console.log("Horas: " + horas + ", minutos: " + duracion);
});

// 22. Solicite un número y muestre la parte decimal
const form22 = document.getElementById('form22');
form22.addEventListener('submit', (e) => {
    e.preventDefault();

    const decimales = (f22_num.value).split(".")[1];
    f22_res.value = decimales;

})

// 23. Solicite un número y muestre la parte entera
const form23 = document.getElementById('form23');
form23.addEventListener('submit', (e) => {
    e.preventDefault();

    f23_res.value = parseInt(f23_num.value);

});

// 24. Solicite dos números y calcule su división indicando si es exacta o no. 
const form24 = document.getElementById('form24');
form24.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultado = parseFloat(f24_num1.value) / parseFloat(f24_num2.value);
    const isExacta = (parseFloat(f24_num1.value) % parseFloat(f24_num2.value) === 0) ? "Exacta" : "No exacta";
    f24_res.value = resultado;
    f24_res2.value = isExacta;

});

// 25. Solicite una base y exponente y calcule la potencia 
const form25 = document.getElementById('form25');
form25.addEventListener('submit', (e) => {
    e.preventDefault();
    f25_res.value = Math.pow(f25_bas.value, f25_exp.value);

});

// 26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima hasta a ingresada por el usuario. 
const form26 = document.getElementById('form26');
form26.addEventListener('submit', (e) => {
    e.preventDefault();
    const max = parseInt(f26_num.value);
    let respuesta = "";
    for (var i = 0; i <= max; i++) {
        respuesta += `<li>2 ^ ${i} = ${Math.pow(2, i)}</li>`
    }
    f26_res.innerHTML = respuesta;
});

// Factorial funcion
function calFactorial(num) {
    let factorial = num;
    for (var i = factorial - 1; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

// 27. Solicite un número y muestre su factorial
const form27 = document.getElementById('form27');
form27.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f27_num.value);
    f27_res.value = calFactorial(num);

});



// 28. Solicite dos números y muestre su coeficiente binomial
const form28 = document.getElementById('form28');
form28.addEventListener('submit', (e) => {
    e.preventDefault();
    let resultado = calFactorial(f28_num1.value) /
            (calFactorial(f28_num2.value) * (calFactorial((f28_num1.value - f28_num2.value))))
    f28_res.value = resultado;
});

// 29. Calcule el número de puntos que suman las fichas del juego del dominó
// TODO

// 30. Muestre las distintas combinaciones al lanzar dos dados
const form30 = document.getElementById('form30');
form30.addEventListener('submit', (e) => {
    e.preventDefault();
    f30_res1.value = parseInt((Math.random() * 6) + 1);
    f30_res2.value = parseInt((Math.random() * 6) + 1);
});

// 31. Solicite un número y muestre el numero de combinaciones que existen para obtener ese número lanzando dos dados y sumando sus puntuaciones
const form31 = document.getElementById('form31');
form31.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f31_num.value);
    let combinaciones = 0;
    for (var i = 1; i <= 6; i++) {
        for (var j = 1; j <= 6; j++) {
            if ((i + j) === num) {
                combinaciones++;
            }
            ;
        }
    }
    f31_res.value = combinaciones;
});

// 32. Solicite un número en base decimal y lo muestre en binario, octal y hexadecimal
const form32 = document.getElementById('form32');
form32.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f32_num.value)
    f32_res1.value = num.toString(2);
    f32_res2.value = num.toString(8);
    f32_res3.value = num.toString(16);
});

// 33. Solicite un número y muestre la parte entera de su raíz cuadrada
const form33 = document.getElementById('form33');
form33.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f33_num.value)
    f33_res.value = Math.trunc(Math.sqrt(num));
});

// 34. Solicite un número y muestre todos sus divisores
const form34 = document.getElementById('form34');
form34.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f34_num.value);
    let divisores = "";
    for (var i = num; i > 0; i--) {
        if (num % i === 0) {
            divisores += i + ", "
        }
    }
    f34_res.textContent = divisores;
});


// 35. Solicite dos números e indique sus divisores comunes
const form35 = document.getElementById('form35');
form35.addEventListener('submit', (e) => {
    e.preventDefault();
    const num1 = parseInt(f35_num1.value);
    const num2 = parseInt(f35_num2.value);
    const min = Math.min(num1, num2);
    let divComunes = "";
    for (var i = min; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            divComunes += i + ", ";
        }
    }
    f35_res.innerHTML = "Divisores comunes: " + divComunes;

});

// 36. Juegue al Fizz buzz
// num divisible 3 = Fizz, num divisible 5 = Buzz; num entre 3 y 5 FizzBuzz
const form36 = document.getElementById('form36');
form36.addEventListener('submit', (e) => {
    e.preventDefault();
    const max = parseInt(f36_num1.value);
    let respuesta = "";

    for (var i = 1; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            respuesta += "FizzBuzz , ";
        } else if (i % 3 === 0) {
            respuesta += "Fizz, ";
        } else if (i % 5 === 0) {
            respuesta += "Buzz, ";
        } else {
            respuesta += i + ", ";
        }
    }
    f36_res.innerHTML = respuesta;

});

// 37. Solicite un número e indique si es primo o no
const form37 = document.getElementById('form37');
form37.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f37_num1.value);
    let isPrimo = true;

    if (num < 1) {
        isPrimo = false;
    } else {
        // Solo se ejecuta para mayores de 2
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrimo = false;
            }
        }
    }

    f37_res.textContent = (isPrimo ? "Es primo" : "No es primo")

});

// 38. Solicite dos números y muestre su máximo común divisor
//FORMA 1
function mcd(num1, num2) {
    let min = Math.min(num1, num2);
    let mcd = 1;
    for (var i = min; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            mcd = i;
            i = 0;
        }
    }

    return mcd;
}

// FORMA 2
function calcularMCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Evento
const form38 = document.getElementById('form38');
form38.addEventListener('submit', (e) => {
    e.preventDefault();
    f38_res.value = mcd(parseInt(f38_num1.value), parseInt(f38_num2.value));

});

// 39. Solicite un número y lo descomponga en factores primos
function isPrimo(num) {
    let isPrimo = true;
    if (num < 1) {
        isPrimo = false;
    } else {
        // Solo se ejecuta para mayores de 2
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrimo = false;
            }
        }
    }
    return isPrimo;
}

const form39 = document.getElementById('form39');
form39.addEventListener('submit', (e) => {
    e.preventDefault();
    let num = parseInt(f39_num1.value);
    const factores = [1];
    if (isPrimo(num)) {
        f39_res.textContent = `El numero ${num} es primo no se puede descomponer`;
    } else {
        while (num > 1) {
            for (var i = 2; i <= num; i++) {
                if (isPrimo(i) && num % i === 0) {
                    factores.push(i)
                    num = num / i;
                    break;
                }

            }

        }

    }

    f39_res.textContent = factores;

});

// 40. Solicite un número y calcule la suma de sus dígitos
const form40 = document.getElementById('form40');
form40.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputNum = f40_num1.value;
    let suma = 0;
    for (var i = 0; i < inputNum.length; i++) {
        suma += parseInt(inputNum[i]);
    }
    f40_res.value = suma;

});

// 41. Muestre la tabla de multiplicar
const form41 = document.getElementById('form41');
form41.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = f41_num1.value;
    let text = "";

    for (var i = 0; i <= 10; i++) {
        text += (`<li>${num} x ${i} = ` + (num * i));
    }
    f41_res.innerHTML = text;
});

// 42. Implemente una sencilla calculadora, en la que se solicite el primer operando, un operador aritmético y el segundo operando para mostrar a continuación el resultado
const form42 = document.getElementById('form42');
form42.addEventListener('submit', (e) => {
    e.preventDefault();
    const num1 = parseFloat(f42_num1.value);
    const op = f42_op.value;
    const num2 = parseFloat(f42_num2.value);
    let resultado = 0;
    switch (op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
        default:
            resultado = "Operacion incorrecta";
    }

    f42_res.value = resultado;
});

// 43. Solicite números entre 0 y 998 hasta que el usuario introduzca el 999, en ese momento muestra la suma de todos ellos (menos el 999)
const form43 = document.getElementById('form43');
form43.addEventListener('submit', (e) => {
    e.preventDefault();
    const numeros = [];
    let num = parseFloat(prompt("Introduce un número [0-998] o 999 para salir"));
    let suma = 0;
    while (num !== 999) {
        if (num < 1 || num > 999 || isNaN(num)) {
            alert("Número fuera de rango o valor incorrecto");
        } else {
            suma += num;
            numeros.push(num);
        }
        num = parseFloat(prompt("Introduce un número [0-998] o 999 para salir"));
    }

    f43_res.innerHTML = `La suma se ${numeros} es ${suma}`;
});

// 44. Solicite un número de segundos y muestre este dato en horas, minutos y segundos
const form44 = document.getElementById('form44');
form44.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(f44_num1.value);
    let seg = parseInt(num % 60);
    let min = parseInt((num / 60) % 60);
    let horas = parseInt(num / 3600);

    f44_res.innerHTML = `${horas} horas ${min} minutos ${seg} segundos.`;

});

// 45. Solicite tres números al usuario e indique si forman los lados de un triángulo y en caso afirmativo qué tipo de triángulo
const form45 = document.getElementById('form45');
form45.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = parseFloat(f45_num1.value);
    const b = parseFloat(f45_num2.value);
    const c = parseFloat(f45_num3.value);
    let respuesta;
    const isTtriangulo = a + b > c && a + c > b && b + c > a;

    if (isTtriangulo) {
        if (a === b && b === c) {
            respuesta = "Los lados forman un triángulo equilátero.";
        } else if (a === b || a === c || b === c) {
            respuesta = "Los lados forman un triángulo isósceles.";
        } else {
            respuesta = "Los lados forman un triángulo escaleno.";
        }
    } else {
        respuesta = "Los lados no forman un triángulo.";
    }

    f45_res.innerHTML = respuesta;
});

// 46. Solicite números al usuario y muestre cuantos números mayores que cero se han introducido y la suma de todos ellos. Para terminar, el usuario introducirá el cero
// ESTE TAMBIÉN SE PUEDE HACER CON UN ARRAY Y UN REDUCE()
const form46 = document.getElementById('form46');
form46.addEventListener('submit', (e) => {
    e.preventDefault();
    let num;
    let contador = 0;
    let suma = 0;
    do {
        num = parseFloat(prompt("Introduce un número o 0 para salir"));
        if (num > 0) {
            contador++;
            suma += num;
        }

    } while (num !== 0)

    f46_res.innerHTML = `Se han introducido ${contador} números positivos y su suma es ${suma}`;
});


// 47. Calcule el número de años que deben transcurrir para que la suma de las edades de tres hijos de 14, 12 y 9 años sea igual a la edad de su padre que ahora tiene 43 años
const form47 = document.getElementById('form47');
form47.addEventListener('submit', (e) => {
    e.preventDefault();
    let hijo1 = 14;
    let hijo2 = 12;
    let hijo3 = 9;
    let padre = 43;
    let year = 0;
    let suma = hijo1 + hijo2 + hijo3;

    while (suma !== padre) {
        ++year;
        ++padre;
        suma = ++hijo1 + ++hijo2 + ++hijo3;
    }

    f47_res.innerHTML = `Los años que tiene que pasar son ${year}: padre (${padre}) h1(${hijo1}) h2(${hijo2}) h3(${hijo3})`;
});

// 48. Solicite las dimensiones de una matriz, y muestre únicamente aquéllas posiciones cuyas coordenadas sean, ambas, impares
const form48 = document.getElementById('form48');
form48.addEventListener('submit', (e) => {
    e.preventDefault();
    const arr = [];
    const impares = [];
    let fil = parseInt(f48_num1.value);
    let col = parseInt(f48_num2.value);
    let respuesta = "";
    for (var i = 0; i < fil; i++) {
        arr.push([]);
        for (var j = 0; j < col; j++) {
            arr[i][j] = "" + i + "," + j;
            if (i % 2 !== 0 && j % 2 !== 0) {
                impares.push(`${i} ${j}`);
            }

        }
    }

    f48_res.innerHTML = impares;
});

// 49. Solicite al usuario un PIN (número de cuatro dígitos) y le ofrezca tres oportunidades para introducir el mismo que uno elegido por el desarrollador
const form49 = document.getElementById('form49');
form49.addEventListener('submit', (e) => {
    e.preventDefault();
    let pin = "";
    for (var i = 0; i < 4; i++) {
        pin += Math.round(Math.random() * 9);
    }
    console.log("pin ejercicio 49->" + pin);
    let num = parseInt(prompt("Introduce el pin (4 digitos)"));
    let intentos = 1;
    while (num != pin && intentos < 4) {
        num = parseInt(prompt(`Te quedan ${4 - intentos}, introduce el pin`));
        intentos++;
    }
    if (num == pin) {
        f49_res.textContent = "Dispositivo desbloqueado con exito.";
    } else {
        f49_res.textContent = "Dispositivo bloqueado.";
    }
});

// 50. Solicite el número de horas que se ha trabajado y el número de horas extra y calcule la nómina semanal bruta. La hora normal se paga a 10€ y la extra a 15€
const form50 = document.getElementById('form50');
form50.addEventListener('submit', (e) => {
    e.preventDefault();
    const pHora = 10;
    const pExtra = 15;
    const horas = parseFloat(f50_num1.value);
    const extra = parseFloat(f50_num2.value);
    f50_res.innerHTML = `Sueldo ordinario(${pHora}€/h)= ${horas * pHora}€, sueldo extra(${pExtra}€/h)= ${extra * pExtra}€, sueldo TOTAL = ${(horas * pHora) + (extra * pExtra)}€`
});

// 51. Solicite la edad de un padre y la de su hijo y muestre el número de años que deben transcurrir hasta que la edad del padre doble a la del hijo
const form51 = document.getElementById('form51');
form51.addEventListener('submit', (e) => {
    e.preventDefault();
    let padre = parseInt(f51_num1.value);
    let hijo = parseInt(f51_num2.value);
    let years = 0;
    while (padre !== (hijo * 2)) {
        years++;
        padre++;
        hijo++;
    }

    f51_res.innerHTML = `${years} años tienen que pasar (padre = ${padre}, hijo = ${hijo})`;

});
// 52. Solicite un número y muestre el triángulo de Pascal de altura igual al número introducido
function calcularTrianguloPascal(n) {
    const triangulo = [];

    for (let i = 0; i < n; i++) {
        triangulo[i] = [];
        triangulo[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
        }

        triangulo[i][i] = 1;
    }

    return triangulo;
}

function mostrarTrianguloPascal(triangulo) {
    let salida = "";
    for (let i = 0; i < triangulo.length; i++) {
        salida += ' '.repeat(triangulo.length - i - 1) + triangulo[i].join(' ') + "\n";
    }
    console.log(salida);
    return salida;
}


const form52 = document.getElementById('form52');
form52.addEventListener('submit', (e) => {
    e.preventDefault();
    const altura = parseInt(f52_num1.value);

    if (!isNaN(altura) && altura > 0) {
        const triangulo = calcularTrianguloPascal(altura);
        for (let i = 0; i < triangulo.length; i++) {
            const espacioInicial = '\u00A0'.repeat(altura - i - 1);
            const fila = espacioInicial + triangulo[i].join(' ');
            const nuevaLinea = document.createElement('div');
            nuevaLinea.textContent = fila;
            f52_res.appendChild(nuevaLinea);
        }

    } else {
        f52_res.textContent = 'Por favor, introduce un número válido y mayor que cero.';
    }

});

// 53. Solicite los coeficientes de una ecuación de primer grado y muestre su solución
const form53 = document.getElementById('form53');
form53.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = f53_num1.value;
    const b = f53_num2.value;

    if (!isNaN(a) && !isNaN(b)) {
        if (a == 0) {
            if (b == 0) {
                f53_res.textContent = "La ecuación tiene soluciones infinitas.";
            } else {
                f53_res.textContent = "La ecuación no tiene solución.";
            }
        } else {
            const x = -b / a;
            f53_res.textContent = `La solución a la ecuación es ${x}.`;
        }
    } else {
        f53_res.textContent = "Por favor, introduce valores númericos válidos";
    }
});

// 54. Solicite los coeficientes de una ecuación de segundo grado y muestre su solución
const form54 = document.getElementById('form54');
form54.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = f54_num1.value;
    const b = f54_num2.value;
    const c = f54_num3.value;

    if (!isNaN(a) && !isNaN(b)) {
        const discriminante = Math.pow(b, 2) - 4 * a * c;

        if (discriminante > 0) {
            const x1 = (-b + Math.sqrt(discriminante)) / 2 * a;
            const x2 = (-b - Math.sqrt(discriminante)) / 2 * a;
            f54_res.textContent = `La ecuación tiene dos soluciones x1=${x1} y x2=${x2}`;
        } else if (discriminante == 0) {
            const x3 = -b / (2 * a);
            f54_res.textContent = `La ecuación tiene una solucion x=${x1}`;
        } else {
            f54_res.textContent = "La ecuación no tiene soluciones reales, pero puede tener soluciones complejas conjugadas";
        }
    } else {
        f54_res.textContent = "Por favor, introduce valores númericos válidos";
    }
});

// 55. Solicite al usuario las coordenadas del centro y el radio de dos circunferencias e indique si se cortan o no y en cuantos puntos
const form55 = document.getElementById('form55');
form55.addEventListener('submit', (e) => {
    e.preventDefault();
    const x1 = parseFloat((f55_num1.value).split(",")[0]);
    const y1 = parseFloat((f55_num1.value).split(",")[1]);
    const r1 = parseFloat(f55_num2.value);
    const x2 = parseFloat((f55_num3.value).split(",")[0]);
    const y2 = parseFloat((f55_num3.value).split(",")[1]);
    const r2 = parseFloat(f55_num4.value);

    if ([x1, y1, r1, x2, y2, r2].includes(NaN)) {
        f55_res.textContent = "Datos introducidos erroneos."
    } else {
        // Calcular la distancia entre los centros
        const distanciaCentro = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2
                ));
        //console.log(distanciaCentro);

        // Sumar sus radios
        const sumaRadios = parseFloat(r1) + parseFloat(r2);
        //console.log(sumaRadios);

        if (distanciaCentro < sumaRadios) {
            f55_res.textContent = "Los círculos se superponen se superponen o se cortan."
        } else if (distanciaCentro == sumaRadios) {
            f55_res.textContent = "los círculos se tocan en un solo punto (son tangentes externamente)."
        } else {
            f55_res.textContent = "Los círculos no se cortan y no se tocan."
        }
    }
});

//56. Solicite números al usuario entre el 1 y el 100 hasta que se averigüe el que ha
//elegido el desarrollador. Para ayudar al usuario, cada vez que éste introduzca un
//número, se le indicará si el número a averiguar es mayor o menor que el número
//introducido. Intercambiar los papeles y que sea ahora el usuario el que elije un
//número y el programa tratará de adivinarlo
const form56 = document.getElementById('form56');
form56.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = Math.round(Math.random() * (100 - 1) + 1);
    //console.log(num);
    let intentos = 1;

    let resp = parseInt(prompt("Introduce un número entre 1-100 o '0' para salir"));
    while (resp != num) {
        intentos++;
        if (resp == 0) {
            break;
        }

        if (resp < num) {
            resp = parseInt(prompt("El número a adivinar es más alto. Introduce un número entre 1-100 o '0' para salir"));
        } else {
            resp = parseInt(prompt("El número a adivinar es más bajo. Introduce un número entre 1-100 o '0' para salir"));
        }
    }
    if (resp != 0) {
        f56_res.textContent = `Enhorabuena el número era ${num} has usado ${intentos} intentos.`;
    } else {
        f56_res.textContent = "Has salido."
    }

});

const form56b = document.getElementById('form56b');
form56b.addEventListener('submit', (e) => {
    e.preventDefault();

    let intentos = 1;
    let max = 100;
    let min = 1;
    let num = Math.round(Math.random() * (max - min) + min);
    let resp = prompt(`El número es ${num}. Respuestas: correcto, mayor, menor, salir`);

    while (resp != 'correcto' && resp != 'salir') {
        switch (resp) {
            case 'mayor':
                intentos++;
                min = num + 1;
                num = Math.round(Math.random() * (max - min) + min);
                resp = prompt(`El número es ${num}. Respuestas: correcto, mayor, menor, salir`);
                break;
            case 'menor':
                intentos++;
                max = num - 1;
                num = Math.round(Math.random() * (max - min) + min);
                resp = prompt(`El número es ${num}. Respuestas: correcto, mayor, menor, salir`);
                break;
            default:
                resp = prompt(`Respuesta incorrecta. El número es ${num}. Respuestas: correcto, mayor, menor, salir`);
        }

    }

    if (resp == 'correcto') {
        f56b_res.textContent = `He tardado ${intentos} intentos.`;
    } else {
        f56b_res.textContent = "Has salido."
    }
});

// 57. Solicite un número y muestre los dígitos de todos los números desde el 0 hasta el solicitado en columnas, por ejemplo, para el número 26: 
const form57 = document.getElementById('form57');
form57.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let numero = prompt("Introduce un número:");
    
    if (!isNaN(numero)) {
        
        if (numero >= 0) {
            let respuesta = "<table>";
            const len = numero.length;
            const arr = [];
            numero = parseInt(numero);
            
            // Creo el array
            for (let i = 0; i <= numero; i++) {
                arr.push(i.toString().padStart(len, "0"));
            }
            
            let contador = 0;
            while(contador < len) {
                respuesta += "<tr>"
                for (var i = 0; i < arr.length; i++) {
                    respuesta += "<td>" + arr[i][contador] + "<td>";
                }
                respuesta += "</tr>";
                contador++;
            }
            
            respuesta += "</table>"
            f57_res.innerHTML = respuesta;
            
        } else {
            f57_res.innerHTML = "Por favor, introduce un número no negativo.";
        }
    } else {
        f57_res.innerHTML = "Por favor, introduce un número válido.";
    }

});