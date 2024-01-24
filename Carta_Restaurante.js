// Mecanismo de las tarjetas

let iconoInfo = document.querySelectorAll(".icono-info");
let iconoRegresar = document.querySelectorAll(".icono-regresar");

iconoInfo.forEach(icono => {
icono.addEventListener('click', (event) => abrirInfo(event));
});

iconoRegresar.forEach(icon =>{
icon.addEventListener('click', (event) => abrirCarta(event));
});

function abrirInfo(event){
// Obtenemos específicamente el elemento al que se le hizo "click"
let regresar = event.target;
// Obtenemos la parte frontal
let front = regresar.parentNode;
// Obtenemos la parte trasera
let back = front.nextElementSibling;

//Iteramos la clase show en ambos lados de la carta
front.classList.toggle("show");
back.classList.toggle("show");
}

function abrirCarta(event){
 // Obtenemos específicamente el elemento al que se le hizo "click"
 let regresar = event.target;
 // Obtenemos la parte trasera
 let back = regresar.parentNode;
 // Obtenemos la parte frontal
 let front = back.previousElementSibling;

 //Iteramos la clase show en ambos lados de la carta
 front.classList.toggle("show");
 back.classList.toggle("show");
}