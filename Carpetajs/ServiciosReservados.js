window.onload = ()=>{

let cuerpo = document.querySelector('body');
let btnReservar = document.querySelector("button");
btnReservar.addEventListener('click', validar);
function validar(){
  cuerpo.style.backgroundColor = 'red';
}


};