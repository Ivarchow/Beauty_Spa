let animado = document.querySelectorAll(".animado");

let btnanimado = document.querySelectorAll("btnanimado")

window.addEventListener('scroll', mostrarScroll);

window.addEventListener('scroll', mostrarbtn);

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado+400<scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

function mostrarbtn(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado+400<scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}