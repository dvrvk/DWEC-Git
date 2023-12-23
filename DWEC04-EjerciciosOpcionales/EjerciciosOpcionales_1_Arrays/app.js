let frutas = ['limon', 'pera', 'melon', 'sandia'];

// 1. Muestre el último elemento utilizando la propiedad length.
document.write("Último elemento " + frutas[frutas.length -1] + "<br>");

// 2. Cree un nuevo elemento al final del array con el valor “cereza”, 
// utilizando la propiedad length. Muestra su valor
frutas[frutas.length] = 'cereza';
document.write("Agrega al final cereza (con length) -> " + frutas + "<br>");

// 3. Crea otro nuevo elemento al final del array con el valor “uva”, 
// utilizando el método push. Muestra su valor.
frutas.push('uva');
document.write("Agrega al final uva (con push) -> " + frutas + "<br>");

// 4. Muestre si frutas es un array o no (utiliza el método isArray()).
document.write("frutas " + ((Array.isArray(frutas)) ? "sí es un array" : "no es un array") + "<br>");

// 5. Que muestre el contenido de todo el array con el método toString().
document.write("Contenido frutas: " + frutas.toString() + "<br>");

// 6. Que muestre el contenido de todo el array separando los valores por // con el método join()
document.write("Contenido frutas: " + frutas.join("//") + "<br>");

// 7. Elimina el último elemento con el método pop(). Muestra el contenido de todo el array. 
// Muestra la longitud actual del array
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
document.write(frutas.pop() + " eliminado <br>");
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//8. Elimina el primer elemento con el método shift(). Muestra el contenido de todo el array.
//Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
document.write(frutas.shift() + " eliminado <br>");
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//9. Añade como primer elemento el valor aguacate con el método unshift(). Muestra el
//contenido de todo el array. Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
document.write("aguacate(" + frutas.unshift("aguacate") + ") agregado <br>");
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//10. Borra el tercer elemento con el operador delete. Muestra el contenido de todo el array.
//Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
document.write("Tercer elemento eliminado:" +  delete frutas[2]+  "<br>");
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//11. Pon de nuevo el valor melon en el tercer elemento. Muestra el contenido de todo el
//array. Muestra la longitud actual del array.
frutas[2] = "melon";
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//12. Borra el segundo elemento con el método splice. Muestra el contenido de todo el array.
//Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
document.write("Elemento eliminado:" +  frutas.splice(1,1) +  "<br>");
document.write("FrutasModificado[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br><br>");

//13. Añade en la posición 2 y 3, los valores “piña” y “manzana” utilizando el método splice.
//Muestra el contenido de todo el array. Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
frutas.splice(2,0, "piña", "manzana");
document.write("FrutasModificado[ " + frutas.toString() + "] - longitud: " + frutas.length + "<br><br>");

//14. Reemplaza los valores de las posiciones 3 y 4 por “platano” y “naranja” utilizando el
//método splice. Muestra el contenido de todo el array. Muestra la longitud actual del
//array
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
frutas.splice(3,2, "platano", "naranja");
document.write("FrutasModificado[ " + frutas.toString() + "] - longitud: " + frutas.length + "<br><br>");

//15. Reemplaza los valores de las posiciones 0 y 1 por “mandarina” y “kiwi”, y además,
//añade “caqui” utilizando el método splice. Muestra el contenido de todo el array.
//Muestra la longitud actual del array.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
frutas.splice(0,2, "mandarina", "kiwi");
frutas.splice(frutas.length,0, "caqui");
document.write("FrutasModificado[ " + frutas.join(", ") + "] - longitud: " + frutas.length + "<br><br>");

//16. Crea un segundo array de frutas con los valores “melocotón” y “fresa”. Concatena los
//arrays frutas y frutas2, y guarda el array resultante en frutasTotal, utilizando el método
//concat(). Muestra el contenido del array frutasTotal. Muestra la longitud también.
let frutas2 = ["melocotón", "fresa"];
let frutasTotal = frutas.concat(frutas2);
document.write("Frutas Total[ " + frutasTotal.join(", ") + "] - longitud: " + frutasTotal.length + "<br><br>");

//17. Guarda en otro array llamado resultadoArray, los elementos desde la posición 2 a 6 del
//array frutas utilizando el método slice(). Muestra el contenido del array frutas, del array
//resultadoArray. Muestra la longitud también de ambos
let resultadoArray = frutas.slice(2,6);
document.write("Frutas[ " + frutas.join(", ") + "] - longitud: " + frutas.length + "<br>");
document.write("resultadoArray[ " + resultadoArray.join(", ") + "] - longitud: " + resultadoArray.length + "<br><br>");

//18. Ordena alfabéticamente el array frutas con el método sort(). Muestra el contenido del
//array frutas después de ordenarlo y también la longitud.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "] - longitud: " + frutas.length + "<br>");
frutas.sort();
document.write("FrutasModificado[ " + frutas.toString() + "] - longitud: " + frutas.length + "<br><br>");

//19. Invierta el orden del array frutas con el método reverse(). Muestra el contenido del array
//frutas después de invertirlo y también la longitud.
document.write("<br> FrutasSinModificar[ " + frutas.join(",") + "]<br>");
frutas.reverse();
document.write("FrutasModificado[ " + frutas.toString() + "]<br><br>");

//20. Añade al final del array un elemento nuevo llamado “naranja”, aunque esté repetido.
document.write("20. Añade al final del array un elemento nuevo llamado “naranja”, aunque esté repetido<br>");
frutas.push("naranja");
document.write("FrutasModificado[ " + frutas.toString() + "]<br><br>");

//21. Averigua en qué posición está el elemento “naranja” comenzando desde la primera
//posición con el método indexOf(). Muestra esta posición, el elemento que hay en esta
//posición y muestra el contenido del array frutas.
document.write("21. Averigua en qué posición está el elemento “naranja” comenzando desde la primera<br>");
document.write("posición con el método indexOf(). Muestra esta posición, el elemento que hay en esta<br>");
document.write("posición y muestra el contenido del array frutas.<br>");
document.write("Posición -> " + frutas.indexOf("naranja") + "<br>");
document.write("Frutas[ " + frutas.toString() + "]<br><br>");

//22. Averigua en qué posición está el elemento “naranja” a partir de la posición 4. Muestra
//esta posición, el elemento que hay en esta posición y muestra el contenido del array
//frutas
document.write("22. Averigua en qué posición está el elemento “naranja” a partir de la posición 4. Muestra<br>");
document.write("esta posición, el elemento que hay en esta posición y muestra el contenido del array<br>");
document.write("frutas<br>");
document.write("Posición -> " + frutas.indexOf("naranja",4) + "<br>");
document.write("Frutas[ " + frutas.toString() + "]<br><br>");

//23. Averigua en qué posición está el elemento “naranja” comenzando desde la última
//posición con el método lastIndexOf(). Muestra esta posición, el elemento que hay en
//esta posición y muestra el contenido del array frutas.
document.write("23. Averigua en qué posición está el elemento “naranja” comenzando desde la última<br>");
document.write("osición con el método lastIndexOf(). Muestra esta posición, el elemento que hay en<br>");
document.write("esta posición y muestra el contenido del array frutas.<br>");
document.write("Posición -> " + frutas.lastIndexOf("naranja") + "<br>");
document.write("Frutas[ " + frutas.toString() + "]<br><br>");

//24. Averigua si está o no el elemento “higo” en el array frutas. Muestra el resultado de esta
//búsqueda.
document.write((frutas.includes("higo")?"Sí está higo": "No está higo")+ "<br><br>");

