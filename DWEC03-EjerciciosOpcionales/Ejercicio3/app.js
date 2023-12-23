var nuevaVentana = null;

const crear = document.getElementById('crear');
crear.addEventListener('click', () => {
    nuevaVentana = window.open('v1.html', "v1", "height=800,width=600");
    console.log();
});

/*
2. Un botón que servirá para mover a los 2 segundos a la posición 40 pixeles en la
coordenada x, y a la posición 40 pixeles en la coordenada y una sola vez.
 */
const mover = document.getElementById('mover');
mover.addEventListener('click', () => {
    nuevaVentana.focus();
    myTimeout = setTimeout(function () {
        nuevaVentana.moveBy(40,40);
    }, 2000);
});

const parar = document.getElementById('parar');
parar.addEventListener('click', () => {
    clearTimeout(myTimeout);
    nuevaVentana.focus();
});
