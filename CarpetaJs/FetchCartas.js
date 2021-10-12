const URLS= [];
const arrIds=[];
const arrSErvicios=["nails","skin","pest","pedi","makeup","estetica","massage"];

main();

function main(){

    generatorArrys();
    window.onload=() =>{
        generatorCols();
    };
    getCartas();
}

function generatorArrys(){
    for(let varCtlrGenerator = 1;varCtlrGenerator<=14;varCtlrGenerator++){
        let url = "http://localhost:3000/Servicios/" + varCtlrGenerator;
        URLS.push(url);
    }
    for(let varCtlrIdsCards=0; varCtlrIdsCards<=48;varCtlrIdsCards++){
        let ids = "carta" + varCtlrIdsCards;
        arrIds.push(ids);
    }
}

function generatorCols(){
    
        let varCtrlCols=1, varCtlrContinue=5;
        
    for(let varCtlrService=0; varCtlrService<3; varCtlrService++ ){

        console.log(arrSErvicios[varCtlrService]);

        for(varCtrlCols; varCtrlCols<= varCtlrContinue ; varCtrlCols++ ){
            let col = document.createElement('div');
            col.className = "col";
            col.style.paddingBottom = "2%";
            col.id = arrIds[varCtrlCols];
            document.getElementById(arrSErvicios[varCtlrService]).appendChild(col);
        }
        varCtrlCols = varCtlrContinue+1;
        varCtlrContinue =varCtlrContinue+5;
        if(varCtlrContinue>15){
            varCtrlCols=0;
            varCtlrContinue=0;
        }
    }
}

function getCartas(){
    let varCtlrCards=1;

    for(let varCtrlFetch=0;varCtrlFetch<URLS.length;varCtrlFetch++ ){

    fetch(URLS[varCtrlFetch])
    .then(response => response.json())
    .then(Servicios =>{

            if(Servicios.Categoria=="Unas"){
                let elemento = document.getElementById(arrIds[varCtlrCards]);
                elemento.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
        }
    })
    .catch(err => console.log(err));
}
}

/*window.onload=() =>{

                let col = document.createElement('div');
                col.className = "col";
                col.style.paddingBottom = "2%";
                col.id = arrIds[varCtlrCards];
                console.log(col);
                document.getElementById(arrSErvicios[varCtlrService]).appendChild(col);  


                let elemento = document.getElementById(col.id);
            elemento.innerHTML = 
            '<figure class="image-block" style="margin: auto;">\n' +
                '<h1>'+ Servicios.titulo+'</h1>\n' +
                '<img src="'+Servicios.img+'"/>\n' +
                '<figcaption>\n' +
                    '<h3>\n' +
                        'Ver Más\n' +
                    '</h3>\n' +
                    '<div class="overflow-auto example" style="height: 250px; ">\n' +
                        '<p>Precio: '+Servicios.precio+'$</p>\n' +
                        '<p>'+Servicios.Descripcion+'</p>\n' +
                    '</div>\n' +
                    '<button>\n' +
                        'Reservar\n' +
                    '</button>\n' +
                '</figcaption>\n' +
            '</figure>';



        }*/