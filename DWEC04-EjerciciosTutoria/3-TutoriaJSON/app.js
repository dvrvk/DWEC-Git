let count = 0;
let aeropuertosDestino = [];

vuelos.data.forEach(vuelo => {
    if(vuelo.airline.name == "Turkish Airlines") {
        count++;
        let destino = vuelo.arrival.airport;
        if(!(aeropuertosDestino.includes(destino))) {
            aeropuertosDestino.push(destino);
        }
       
    }

});

info.innerHTML = "El número de vuelo de la aerolinea Turkish Airlines es " + count + ".";
info.innerHTML += "<br>Los aeropuertos de destino son: " + aeropuertosDestino.join(", ") + ".";