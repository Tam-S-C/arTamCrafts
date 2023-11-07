// Juego en index Piedra, Papel o Tijera para dar descuentos

//Variable para el nombre y saludo

let nombre = "0"
nombre = prompt("Bienvenid@!! ✨ ¿Cuál es tu nombre? 😃")
alert("¡Hola " + nombre + " 😊, vamos a jugar Piedra 💎, Papel 📃 o Tijera ✂! ¡Si Ganás tendrás un código de descuento! 🎉")

// Variables de puntos y jugador vs pc con la cuenta del numero aleatorio entre 1 y 3 y redondeado

let jugador = 0
let min = 1
let max = 3
let pc = Math.floor(Math.random() * (max - min + 1) +  min)

// prompt de reglas

jugador = prompt("Presiona la tecla: 1 para Piedra 💎, 2 para Papel 📃, 3 para Tijera ✂")

// condiciones del jugador, si da clik en x aparece un alert de elejiste...

if(jugador == 1) {
    alert("Elegiste Piedra 💎") 
} else if(jugador == 2){
    alert("Elegiste Papel 📃")
} else if(jugador == 3){ 
    alert("Elegiste Tijera ✂")	
} else {
    alert("Esa era una opción válida 😞")
}

// condiciones de la pc (ya tiene hecha su función de número random)

if(pc == 1) {
    alert("Pc elige Piedra 💎")
} else if(pc == 2){
    alert("Pc elige Papel 📃")
} else if(pc == 3){ 
    alert("Pc elige Tijera ✂")	
}

// PC vs Jugador con cada caso posible y su alert

if(pc == jugador){
    alert("EMPATE! Tienes igual Premio! 😁 Código: 5%offArtamCrafts . Usalo antes de finalizar la compra.")
} else if (jugador == 1 && pc == 3) {
    alert("GANASTE!! 🎉 Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
} else if (jugador == 2 && pc == 1) {
    alert("GANASTE!! 🎉 Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
}  else if (jugador == 3 && pc == 2) {
    alert("GANASTE!! 🎉 Este es tu código de descuento 10%offArTamCrafts . Usalo antes de finalizar la compra.")
}	else {
    alert("PERDISTE! 😢 Mejor suerte la próxima.")
}