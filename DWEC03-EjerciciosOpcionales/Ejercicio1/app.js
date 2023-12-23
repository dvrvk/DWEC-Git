var nuevaVentana = null;
// 1. Un botón llamado abrir nueva ventana. Cuando se pulse se debe crear una nueva ventana
/*
14. Modifique el botón que crea una nueva ventana para que además de crearla la mueva
a las coordenadas (300,0)
*/
const abrir = document.getElementById('abrir');
abrir.addEventListener('click', () => {
    nuevaVentana = window.open('nueva.html', "Nueva Ventana", "height=800,width=600,top=0,left=300");
});

// 2. Un botón que muestre el nombre de la nueva ventana creada
const nombre = document.getElementById('nombre');
nombre.addEventListener('click', () => {
    let respuesta = document.createElement('P');
    let respuestadiv = document.getElementById('resp_nombre');
    respuestadiv.innerHTML = '';
    if (nuevaVentana === null) {
        respuesta.textContent = 'No existe la nueva ventana'
    } else if (nuevaVentana.closed) {
        respuesta.textContent = 'Se ha cerrado';
    } else {
        respuesta.textContent = nuevaVentana.name;
    }
    document.getElementById('resp_nombre').append(respuesta);
});

// 3. Un botón llamado cerrar ventana. Cuando se pulse se debe cerrar la ventana creada anteriormente.
const cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click', () => {
    if (nuevaVentana) {
        nuevaVentana.close();
    }
});

// 4. Un botón que indique si la ventana creada está abierta o cerrada.
const isClose = document.getElementById('isClose');
isClose.addEventListener('click', () => {
    let respuesta = document.createElement('P');
    let respuestadiv = document.getElementById('resp_isClose');
    respuestadiv.innerHTML = '';

    respuesta.textContent = (nuevaVentana.closed) ? "Está cerrada" : "No esta cerrada";

    document.getElementById('resp_isClose').append(respuesta);
});

// 5. Otro botón llamado Quitar foco. Cuando se pulse se debe quitar el foco a la ventana creada anteriormente.
const quitarFoco = document.getElementById('quitar');
quitarFoco.addEventListener('click', () => {
    nuevaVentana.blur();
});

// 6. Otro botón llamado Poner foco. Cuando se pulse se debe poner el foco a la ventana creada anteriormente.
const foco = document.getElementById('poner');
foco.addEventListener('click', () => {
    nuevaVentana.focus();
});

// 7. Otro botón que indique la URL de la nueva ventana HTML.
const url = document.getElementById('url');
url.addEventListener('click', () => {
    if(nuevaVentana && !nuevaVentana.closed)
        alert(nuevaVentana.location.href);
});

// 8. Un botón que indique la URL de la ventana principal.
const urlP = document.getElementById('urlP');
urlP.addEventListener('click', () => {
    alert(location.href);
});

// 9. Un botón que saque una ventana de confirmación advirtiendo: “El usuario va a ser borrado: ¿Está de acuerdo?”
const borrar = document.getElementById('borrar');
borrar.addEventListener('click', () => {
    let respuesta = confirm('El usuario va a ser borrado. ¿Está de acuerdo?');
    if(respuesta) {
        alert('Usuario borrado con exito.')
    } else {
        alert('Operación cancelada.')
    }
});

// 10. Un botón que muestre todas las propiedades del objeto location.
const propiedades = document.getElementById('propiedades');
propiedades.addEventListener('click', () => {
    let respuesta = document.createElement('DIV');
    for(let propiedad in location) {
        let parrafo = document.createElement('P');
        parrafo.textContent = `${propiedad}: ${location[propiedad]}`;
        respuesta.appendChild(parrafo);
    }
    document.getElementById('resp_prop').innerHTML = '';
    document.getElementById('resp_prop').appendChild(respuesta);
    document.getElementById('resp_prop').setAttribute('style','border: 1px solid black; padding: 5px');
});

// 11. Un botón que vuelva a recargar la página HTML. 
const recargar = document.getElementById('recargar');
recargar.addEventListener('click', () => {
    location.reload();
});

/*
12. Un botón que muestre todas las propiedades del objeto navigator. Fíjate en las
siguientes especialmente y explica para qué sirven: appCodeName, appName,
appVersion, cookieEnabled, platform, userAgent. Ejecuta este documento HTML en
varios navegadores, y fíjate si cambian estos valores.
*/
const prop_navigator = document.getElementById('navigator');
prop_navigator.addEventListener('click', () => {
    let respuesta = document.createElement('DIV');
    for(let propiedad in navigator) {
        let parrafo = document.createElement('P');
        parrafo.textContent = `${propiedad}: ${navigator[propiedad]}`;
        respuesta.appendChild(parrafo);
    }
    document.getElementById('resp_nav').innerHTML = '';
    document.getElementById('resp_nav').appendChild(respuesta);
    document.getElementById('resp_nav').setAttribute('style','border: 1px solid black; padding: 5px');
});

/*
13. Un botón que muestre todas las propiedades del objeto document. Fíjate en el valor
de los siguientes: cookie, domain, lastModified, readyState, referrer, title, URL. Haz
que la propiedad cookie tenga algún contenido. 
 */
const prop_doc = document.getElementById('prop_doc');
prop_doc.addEventListener('click', () => {
    let respuesta = document.createElement('DIV');
    for(let propiedad in document) {
        let parrafo = document.createElement('P');
        parrafo.textContent = `${propiedad}: ${document[propiedad]}`;
        respuesta.appendChild(parrafo);
    }
    document.getElementById('resp_prop_doc').innerHTML = '';
    document.getElementById('resp_prop_doc').appendChild(respuesta);
    document.getElementById('resp_prop_doc').setAttribute('style','border: 1px solid black; padding: 5px');
});

const rellenarCookie = document.getElementById('rellenarCookie');
rellenarCookie.addEventListener('click', () => {
    let hoy = new Date();
    hoy.setMinutes((hoy.getMinutes() + 1));
    document.cookie = `username=Diego; expires=${hoy}`;
});

//15. Un botón que muestre si el cliente (navegador) permite la ejecución de Java o no. Configura tu navegador para que el valor devuelto cambie.
const java = document.getElementById('java');
java.addEventListener('click', () => {
    alert((navigator.javaEnabled()) ?"Permite la ejecución Java": "No la permite");
});




