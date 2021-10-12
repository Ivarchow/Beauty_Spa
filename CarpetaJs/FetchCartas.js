
const URLS= ['http://localhost:3000/Servicios/1',
'http://localhost:3000/Servicios/2',
'http://localhost:3000/Servicios/3',
'http://localhost:3000/Servicios/4',
'http://localhost:3000/Servicios/5',
'http://localhost:3000/Servicios/6',
'http://localhost:3000/Servicios/7',
'http://localhost:3000/Servicios/8',
'http://localhost:3000/Servicios/9'];

const arrIds=["carta1","carta2","carta3","carta4","carta5","carta6"];
const arrSErvicios=["nails","skin","pest"];

var varCtrlUrlsCol = 0, varCtlrUrlsRow=0, varCtlrCards=0;

window.onload=() =>{

    for(let varCtlrService=0;varCtlrService<arrSErvicios.length;varCtlrService++ ){
        console.log(arrSErvicios[varCtlrService])

        for(varCtlrCards;varCtlrCards<arrIds.length;varCtlrCards++){

                let col = document.createElement('div');
                col.className = "col";
                col.style.paddingBottom = "2%";
                col.id = arrIds[varCtlrCards];
                console.log(col);
                document.getElementById(arrSErvicios[varCtlrService]).appendChild(col);  


            fetch(URLS[varCtlrCards])
                .then(Servicios => Servicios.json())
                .then(Servicios =>{
                    console.log(Servicios.Categoria)

                    if(Servicios.Categoria == "Unas"){

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
                    }
                })
                .catch(err => console.log(err))
        }
    }
}
