
const URLS= ['http://localhost:3000/Servicios/1',
'http://localhost:3000/Servicios/2',
'http://localhost:3000/Servicios/3'];

const arrIds=["carta1","carta2","carta3"];
const arrSErvicios=["nails","skin","pest"];

var varCtrlUrlsCol = 0, varCtlrUrlsRow=0, varCtlrCards=0;

window.onload=() =>{
    for(varCtlrCards; varCtlrCards < arrIds.length; varCtlrCards++){

        let col = document.createElement('div');
        col.className = "col";
        col.style.paddingBottom = "2%";
        col.id = arrIds[varCtlrCards];
        console.log(col.id);
        document.getElementById(arrSErvicios[varCtlrCards]).appendChild(col);
        

        for(varCtrlUrlsCol; varCtrlUrlsCol < 2; varCtrlUrlsCol++){

            fetch(URLS[varCtrlUrlsCol])
                .then(Servicios => Servicios.json())
                .then(Servicios =>{

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
                        console.log(col.id);
                        
                        
                })
                .catch(err => console.log(err))
            }
            varCtrlUrlsCol = 0;
    }
}










/*var varCtrlUrlsCol = 0, varCtlrUrlsRow=0;
for(varCtrlUrlsCol; varCtrlUrlsCol < URLS.length; varCtrlUrlsCol++){

fetch(URLS[varCtrlUrlsCol])
    .then(carta => carta.json())
    .then(carta =>{

            let col = document.createElement('div');
             col.class = "col";
             col.style.paddingBottom = "2%";
             col.id = "carta1";
             document.getElementById("nails").appendChild(col);

             let col1 = document.createElement('div');
             col1.class = "col";
             col1.style.paddingBottom = "2%";
             col1.id = "carta2";
             document.getElementById("nails").appendChild(col1);

            let elemento = document.getElementById(col.id);
            elemento.innerHTML = 
            '<figure class="image-block" style="margin: auto;">\n' +
                '<h1>'+ carta.id+'</h1>\n' +
                '<img src="'+carta.url +'"/>\n' +
                '<figcaption>\n' +
                    '<h3>\n' +
                        'Ver Más\n' +
                    '</h3>\n' +
                    '<div class="overflow-auto example" style="height: 250px; ">\n' +
                        '<p>Precio: '+carta.albumId+'$</p>\n' +
                        '<p>'+carta.title+'</p>\n' +
                    '</div>\n' +
                    '<button>\n' +
                        'Reservar\n' +
                    '</button>\n' +
                '</figcaption>\n' +
            '</figure>';

            let elemento1 = document.getElementById(col1.id);
            elemento1.innerHTML = 
            '<figure class="image-block" style="margin: auto;">\n' +
                '<h1>'+ carta.id+'</h1>\n' +
                '<img src="'+carta.url +'"/>\n' +
                '<figcaption>\n' +
                    '<h3>\n' +
                        'Ver Más\n' +
                    '</h3>\n' +
                    '<div class="overflow-auto example" style="height: 250px; ">\n' +
                        '<p>Precio: '+carta.albumId+'$</p>\n' +
                        '<p>'+carta.title+'</p>\n' +
                    '</div>\n' +
                    '<button>\n' +
                        'Reservar\n' +
                    '</button>\n' +
                '</figcaption>\n' +
            '</figure>';
        
            varCtlrUrlsRow++;
            
    })
    .catch(err => console.log(err))
}*/
