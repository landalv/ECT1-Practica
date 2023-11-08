"use strict";

class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    atacar(objetivo) {
        console.log(
            `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
        );
    }
}

class Jugador {
    maxPV = 100
    constructor(nombre, ocupacion, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.faccion = faccion;
        this.puntosVida = this.maxPV;
    }
    toString() {
        return `Jugador ${this.nombre}. ${this.ocupacion} de la facción ${this.faccion} tiene ${this.puntosVida} PV.`;
    }
}

//------------------------MAIN ----------------//
let carlos = new Jugador("Carlos", ["Programador", "Electronico"], "DAW");
let mj = new Jugador("MariaJosé", "Profesor", "DAW");
console.log(carlos.toString());
console.log(mj.toString());