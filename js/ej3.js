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
    consumir(consumible) {
        consumible.consumir(this);
    }
}

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
    consumir(jugador) {
        if (jugador.puntosVida >= jugador.maxPV) {
            console.log(`${jugador.nombre} no puede consumir ${this.nombre} porque sus PV están al maximo. Tiene ${jugador.puntosVida}PV.`);
        }
        else {
            if ((this.poder + jugador.puntosVida) >= jugador.maxPV) {
                /*Si esta condición se cumple es porque el jugador tiene el Máximo de Puntos
               de Vida. */
                jugador.puntosVida = jugador.maxPV;
                console.log(`Jugador ${jugador.nombre} regeneró todos sus PV con ${this.nombre}, ahora tiene ${jugador.puntosVida}PV.`);

            } else {
                /* En este caso los Puntos de Vida del jugador se incrementan con su poder.*/
                let pvRegenerados = jugador.puntosVida + this.poder;
                jugador.puntosVida = pvRegenerados;
                console.log(`Jugador ${jugador.nombre} regeneró ${pvRegenerados} PV con ${this.nombre}, ahora tiene ${jugador.puntosVida}PV.`);
            }
        }
        //Implementar: Muestra por consola el nombre del jugador, el nombre de la PlantaCurativa que consume y los puntos de vida que tiene.
    }
}

//------------------------MAIN ----------------//
//creamos consimubles
let manzana = new Consumible('Manzana');
let alohe = new PlantaCurativa('alohe', 10);
//creamos al jugador
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 6,
    maxPV: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
//hacemos que el juador consuma los consumibles.
ricardo.consumir(manzana);
ricardo.consumir(alohe);

