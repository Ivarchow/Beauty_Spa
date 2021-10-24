let animado = document.querySelectorAll(".animado");

let btnanimado = document.querySelectorAll(".btnanimado")

window.addEventListener('scroll', mostrarScroll);

window.addEventListener('scroll', mostrarbtn);

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for(var varCtrlScroll=0; varCtrlScroll<animado.length; varCtrlScroll++){
        let alturaAnimado = animado[varCtrlScroll].offsetTop;
        if(alturaAnimado+350<scrollTop){
            animado[varCtrlScroll].style.opacity = 1;
            animado[varCtrlScroll].classList.add("mostrarArriba");
        }
    }
}

function mostrarbtn(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i=0; i<btnanimado.length; i++){
        let alturaBtnAnimado = btnanimado[i].offsetTop;
        if(alturaBtnAnimado+60<scrollTop){
            btnanimado[i].style.opacity = 1;
            btnanimado[i].classList.add("mostrarArriba1");
        }if (alturaBtnAnimado+600<scrollTop) {
            btnanimado[i].style.opacity = 0;
            btnanimado[i].classList.add("mostrarArriba1");
        }
    }
}