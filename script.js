// Juego de inicio Piedra, Papel o Tijera para dar descuentos

let nombre = "0"
nombre = prompt("¿Cuál es tu nombre?")
alert("¡Hola " + nombre + ", vamos a jugar Piedra, Papel o Tijera!! ¡Si Ganás tendrás un código de descuento! =D")

// 1 es piedra, 2 es papel, 3 es tijera

let jugador = 0
let min = 1
let max = 3
let pc = Math.floor(Math.random() * (max - min + 1) +  min)

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

if(jugador == 1) {
    alert("Elegiste piedra") 
} else if(jugador == 2){
    alert("Elegiste papel")
} else if(jugador == 3){ 
    alert("Elejiste tijera")	
} else {
    alert("No es una opción válida")
}

if(pc == 1) {
    alert("Pc elige piedra") 
} else if(pc == 2){
    alert("Pc elige papel")
} else if(pc == 3){ 
    alert("Pc elige tijera")	
}

// COMBATE

if(pc == jugador){
    alert("EMPATE! Tienes igual Premio! Código: 5%offArtamCrafts . Usalo antes de finalizar la compra.")
} else if (jugador == 1 && pc == 3) {
    alert("GANASTE!! Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
} else if (jugador == 2 && pc == 1) {
    alert("GANASTE!! Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
}  else if (jugador == 3 && pc == 2) {
    alert("GANASTE!! Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
}	else {
    alert("PERDISTE! :( Mejor suerte la próxima.")
}