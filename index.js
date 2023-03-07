// El usuario tiene que elegir y seleccionar un plazo fijo


const nombreUsuario = prompt("Bienvenido/a. Ingresa tu nombre, por favor...")

alert("Perfecto, podes continuar "+nombreUsuario)

// se realizo una clase para armas un grupo de bancos

class Banco {
    constructor(nombre, id, tasa1, tasa6, tasa12) {
        this.nombre = nombre
        this.id = id
        this.tasa1 = tasa1
        this.tasa6 = tasa6
        this.tasa12 = tasa12
    }
}

const bancoCiudad = new Banco("Ciudad", 1, 6, 65, 110)
const bancoNacion = new Banco("Nacion", 2, 6, 60, 112)
const icbc = new Banco("icbc", 3, 5, 58, 107)

console.log(bancoCiudad, bancoNacion, icbc)

let bancoElegido = +(prompt("Elegi el banco con el que deseas invertir en plazo fijo. 1. Banco Ciudad - 2. Banco Nacion - 3. ICBC"))

// variable para que seleccione banco correcto

let eligioBanco = false

// variable para guardar la informacion que el usuario eligio segun el banco

let infoBancoElegido

while (eligioBanco === false) {
    if (bancoElegido === 1) {
        eligioBanco = true
        infoBancoElegido = bancoCiudad
    } else if (bancoElegido === 2) {
        eligioBanco = true
        infoBancoElegido = bancoNacion
    } else if (bancoElegido === 3) {
        eligioBanco = true
        infoBancoElegido = icbc
    } else {
        bancoElegido = +(prompt("Elegi el banco con el que deseas invertir en plazo fijo. 1. Banco Ciudad - 2. Banco Nacion - 3. ICBC"))
    }
}

const montoInvertido = +(prompt("Ingresa el monto que queres invertir"))

const plazo1 = calcularPlazo(montoInvertido, infoBancoElegido.tasa1, 1)
const plazo6 = calcularPlazo(montoInvertido, infoBancoElegido.tasa6, 6)
const plazo12 = calcularPlazo(montoInvertido, infoBancoElegido.tasa12, 12)

console.log(plazo1, plazo6, plazo12)

// funcion que calcula el interes que le daria el plazo fijo segun el monto elegido
function calcularPlazo(monto, interes, meses) {
    const plazo = (monto * interes) / 100 / meses
    return plazo
}

alert(`Las opciones de inversión que te brinda ${infoBancoElegido.nombre} son: 1. ${plazo1} de interes a 1 mes - 2. ${plazo6} de intereses a 6 meses - 3. ${plazo12} de intereses a 12 meses`)
console.log("infoDelBanco", infoBancoElegido, montoInvertido)

alert("Gracias por elegirnos una vez más.")