// Nueva ventana
var ventana_nueva = window.open("nueva.html", "Nueva ventana DWEC03", "hight=600,width=400");

// Numero aleatorio
function aleatorio(min, max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dias de la semana
const dia_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

// Calcular edad - COMPROBAR
function edad(fecha){
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    if(hoy.getMonth() < fecha.getMonth()) {
        edad--;
    } else if(hoy.getMonth() == fecha.getMonth()) {
        if(hoy.getDate() < fecha.getDate()) {
            edad--;
        }
    }
    return edad;
    
}

// Crear fecha
let dia = aleatorio(1,28);
let mes = aleatorio(1,12);
let year = aleatorio(1980,1999);
const fecha = new Date(year, mes, dia);


// Crear un string
const nombre = "Diego Vázquez Rodríguez";



// Escribir en la ventana
ventana_nueva.document.write("Fecha: " + fecha.toLocaleString() + "<br>");
ventana_nueva.document.write("Día de la semana: " + dia_semana[fecha.getDay()] + "<br>");
ventana_nueva.document.write("Edad: " + edad(fecha) + "<br>");
ventana_nueva.document.write("URL: " + ventana_nueva.location.href + "<br>");
ventana_nueva.document.write("Protocolo: " + ventana_nueva.location.protocol + "<br>");
ventana_nueva.document.write("Nombre en código del navegador: " + ventana_nueva.navigator.appCodeName + "<br>");
let java = (navigator.javaEnabled()) ? "Java SI disponible en esta ventana." : "Java NO disponible en esta ventana.";
ventana_nueva.document.write(java + "<br>");
ventana_nueva.document.write("Nombre y apellidos en mayúsculas: " + nombre.toUpperCase() + "<br>");
ventana_nueva.document.write("Posición de la primera letra e de tu nombre y apellidos: " + nombre.indexOf('e') + "<br>");
ventana_nueva.document.write("Posición de la última letra e de tu nombre y apellidos: " + nombre.lastIndexOf('e') + "<br>");
ventana_nueva.document.write("Cadena de tu nombre y apellidos comprendida entre las posiciones 4 y 12: " + "\"" + nombre.substring(4,12) + "\"<br>");
ventana_nueva.document.write("Menor múmero de (20,6,14,89,33): " + Math.min(20,6,14,89,33) + "<br>");
ventana_nueva.document.title = ventana_nueva.name;






