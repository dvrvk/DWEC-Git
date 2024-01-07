// SELECCIONAR FORMULARIO
// Conociendo el id
let formulario = document.getElementById("miFormualrio");
let formulario2 = document.forms['miFormualrio'];

// Conociendo el número de formulario que es en la página
let formulario3 = document.getElementsByTagName('form')[0];
let formulario4 = document.forms[0];

// SELECCIONAR ELEMENTOS DE UN FORMULARIO
// .elements[] -> array con todos los inputs del formulario
// getElementByID("idElemento") -> devuelve un elemento con un id determinado
// getElemntsByTagName("etiqueta") -> devulve un array con elementos de un tipo de etiquetas
// getElementsByName("nombre") -> devuelve un array con elementos que tienen el mismo nombre. Ejemplo: útil para los radiobutton

window.onload = iniciar; // Sin parentesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validar(e) {
    
    if(validaNombre() && validarTelefono() && validaFecha() && validarCheck() && confirm("Pulsa aceptar si deseas enviar los datos")) {
        return true;
    }
    e.preventDefault();
    return false;

}

function validaNombre() {
    let elemento = document.getElementById('name');
    if(elemento.value == "") {
        alert("El nombre no puede estar vacio");
        error(elemento);
        return false;
    }
    limpiarError(elemento);
    return true;
}

function validarTelefono() {
    let elemento = document.getElementById('telefono');
    if(isNaN(elemento.value)) {
        alert("El télefono tiene que ser un número");
        error(elemento);
        return false;
    }
    limpiarError(elemento);
    return true;
}

function validaFecha() {
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let year = document.getElementById('year').value;
    
    let fecha = new Date(year, mes, dia);
    if(isNaN(fecha)) {
        alert("La fecha no es correcta.");
        return false;
    }
    return true;
}

function validarCheck() {
    var campoCheck = document.getElementById('mayor');
    if(!campoCheck.checked) {
        alert("Debe ser mayor de edad");
        error(campoCheck);
        return false;
    }
    limpiarError(campoCheck);
    return true;
}

function error(elemento) {
    elemento.className="error";
    elemento.focus();
}


function limpiarError(elemento) {
    elemento.className="";
}

