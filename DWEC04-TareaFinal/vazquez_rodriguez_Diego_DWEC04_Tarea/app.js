
class Edificio {
    // Constructor 
    constructor(calle, numero, cp){
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.propietarios = [];
        document.write(`Construido nuevo edificio en calle: ${this.calle}, nº:${this.numero}, CP: ${this.cp}<br>`);
    }
    
    // Métodos
    agregarPlantasYPuertas (numplantas, puertas) {
        for (var  planta = 0; planta < numplantas; planta++) {
            const nuevoArray = new Array(puertas);
            nuevoArray.fill("");
            this.propietarios.push(nuevoArray);
        }
        console.log("Agregar plantas y puertas vacias")
        console.table(this.propietarios);
        return {"plantas": numplantas,"puertas":puertas};
    }
    agreagarPropietario(nombre,planta,puerta) {
        // Se le pasa un nombre de propietario, un número de planta y un número de
        // puerta y lo asignará como propietario de ese piso.
        this.propietarios[planta-1][puerta-1] = nombre;
        return `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`

    }
    // Setters
    modificarNumero(numero) {
        this.numero = numero;
    }
    modificarCalle(calle){ 
        this.calle = calle;
    }
    
    modificarCodigoPostal(codigo) {
        this.cp = codigo;
    }
    // Getters
    imprimeCalle() {
        return this.calle;
    }
    imprimeNumero() {
        return this.numero;
    }
    imprimeCodigoPostal() {
        return this.cp;
    }
    imprimePlantas() {
         // Recorrerá el edificio e imprimirá todos los propietarios de cada 
         // puerta.
         let respuesta = "<ul>";
         this.propietarios.forEach((planta, numPlanta) => {
             planta.forEach((propietario, numPuerta)=> {
                 respuesta += `<li>Propietario del piso ${numPuerta+1} de la planta ${numPlanta+1}: ${propietario}</li>`;
             })
         })
         respuesta += "</ul>"
         return respuesta;
    }
}

// Instanciar edificios
const edificioA = new Edificio("Garcia Prieto","58","15706");
const edificioB = new Edificio("Camino Caneiro","29","32004");
const edificioC = new Edificio("San Clemente","s/n","15705");

// Utilizar getters
document.write(`<br>La codigo postal del edificio A es: ${edificioA.imprimeCodigoPostal()}.<br>`)
document.write(`La calle del edificio C es: ${edificioC.imprimeCalle()}.<br>`)
document.write(`El edificio B está situado en la calle: ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.<br><br>`)

// Agergar plantas
let ppEdificioA = edificioA.agregarPlantasYPuertas(2,3);
document.write(`Se han agregado ${ppEdificioA.plantas} plantas y ${ppEdificioA.puertas} puertas por planta al edificio A.`);

// Agregar Propietarios
document.write("<br><br>Agregamos 4 propietarios al edificio A:<br>");
document.write("<ul><li>" + edificioA.agreagarPropietario("Jose Antonio Lopez",1,1) + "</li>")
document.write("<li>" + edificioA.agreagarPropietario("Luisa Martinez",1,2) + "</li>")
document.write("<li>" + edificioA.agreagarPropietario("Marta Castellón",1,3) + "</li>")
document.write("<li>" + edificioA.agreagarPropietario("Antonio Pereira",2,2)+ "</li></ul>")

// Listar propietarios
document.write(`Listado de propietarios del edificio calle ${edificioA.imprimeCalle()} número ${edificioA.imprimeNumero()}`);
document.write(edificioA.imprimePlantas());

// Agregar una planta más al edificio (como no dice puertas agregaremos 3)
ppEdificioA = edificioA.agregarPlantasYPuertas(1,2);
document.write(`Agregamos ${ppEdificioA.plantas} planta al edificio A (con ${ppEdificioA.puertas} puertas).`);

// Agregar un propietario más
document.write("<br>Agregamos 1 propietario más al edificio A planta 3, puerta 2: <br>");
document.write("<ul><li>" + edificioA.agreagarPropietario("Pedro Meijide",3,2) + "</li></ul>")

// Listar propietarios
document.write(`Listado de propietarios del edificio calle ${edificioA.imprimeCalle()} número ${edificioA.imprimeNumero()}`);
document.write(edificioA.imprimePlantas());






