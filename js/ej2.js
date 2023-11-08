"use strict";

class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    atacar(objetivo) {
        console.log(
            `${this.nombre} ataca a ${objetivo.nombre} y le causa ${this.potencia} puntos de daño`
        );
        //restamos PV
        if (objetivo.puntosVida > 0) {
            objetivo.puntosVida -= this.potencia;
            //ajustamos para que el valor de PV nunca sea menor que 0
            //console.log(`${objetivo.nombre} con ${objetivo.puntosVida}PV.`);
            if (objetivo.puntosVida <= 0) {
                console.log(`${objetivo.nombre} debilitado.`);
                objetivo.puntosVida = 0;
            }
        }
        else {
            console.log(`${this.nombre} no puede atacar, porque ${objetivo.nombre} esta debilitado.`);
        }

        console.log(objetivo.toString());
    }
    toString() {
        return `${this.nombre}. tiene ${this.puntosVida} PV y una potencia de ${this.potencia}.`;
    }
}

class Abominacion extends Zombi {
    constructor(nombre, puntosVida, potencia) {
        super(nombre, puntosVida, potencia);
        this.atacarMultiple = 3;
    }
    ataqueMultiple(objetivo) {
        console.log(`${this.nombre} ataca ${this.atacarMultiple} veces a ${objetivo.nombre} con ${this.potencia} de potencia`);
        for (var i = 0; i < this.atacarMultiple; i++) {
            console.log(`ataque nº${i + 1}:`);
            super.atacar(objetivo);
        }
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


//MAIN
let carlos = new Jugador("Carlos", ["Programador", "Electronico"], "DAW");
let mj = new Jugador("MariaJosé", "Profesor", "DAW");
console.log(carlos.toString());
console.log(mj.toString());
let examen = new Abominacion("ExamenT1", 100, 75);
console.log(examen.toString());
examen.ataqueMultiple(carlos);