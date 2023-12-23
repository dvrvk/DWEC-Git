var valorContador = 1;
var stop;
var stopTime;
const contador = document.getElementById('contador');
/*
 1. Un botón que servirá para mostrar el valor de un contador que se va incrementando cada
1000 milisegundos de forma indefinida. Este contador debe empezar con el valor 1.
 */
const valor = document.getElementById('valor');
valor.addEventListener('click', () => {
    contador.innerHTML = valorContador;
    stop = setInterval(function() {
        contador.innerHTML = ++valorContador;
    }, 1000);
});

// 2. Un botón que servirá para parar esta cuenta indefinida.
const parar = document.getElementById('parar');
parar.addEventListener('click', () => {
    clearInterval(stop);
});

/*
3. Un botón que servirá para mostrar el valor de ese contador incrementando en 1 cada vez
que se pulsa este botón (se debe tardar 1 segundo desde que se da el botón hasta que
aparece incrementado el contador).
 */
const incrementar = document.getElementById('incrementar');
incrementar.addEventListener('click', () => {
    stopTime = setTimeout(function() {
         contador.innerHTML = ++valorContador;
    }, 1000);
});

const pararTime = document.getElementById('pararTime');
pararTime.addEventListener('click', () => {
    clearTimeout(stopTime);
});






