let animado = document.querySelectorAll(".animado");

window.addEventListener('scroll', mostrarScroll);

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

