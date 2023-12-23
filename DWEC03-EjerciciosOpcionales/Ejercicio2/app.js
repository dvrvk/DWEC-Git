var nuevaVentana = null;

const crear = document.getElementById('crear');
crear.addEventListener('click', () => {
    nuevaVentana = window.open('v1.html', "v1", "height=800,width=600");
    console.log();
});

const mover = document.getElementById('mover');
mover.addEventListener('click', () => {
    nuevaVentana.focus();
    myInterval = setInterval(function () {
        nuevaVentana.moveBy(5,5);
    }, 100);
});

const parar = document.getElementById('parar');
parar.addEventListener('click', () => {
    clearInterval(myInterval);
});
