"use strict";

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Fernando", puntuacion: 105 },
    { nombre: "Laura", puntuacion: 210 },
    { nombre: "Julian", puntuacion: 520 },
];

function jugadoresTop(array) {
    return new Array(array.filter((jugador) => jugador['puntuacion'] > 100));
}

//MAIN
console.log(jugadoresTop(puntuaciones));