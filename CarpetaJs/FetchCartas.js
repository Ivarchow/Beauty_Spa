
const URLS= ['https://jsonplaceholder.typicode.com/photos/1',
'https://jsonplaceholder.typicode.com/photos/2',
'https://jsonplaceholder.typicode.com/photos/3',
'https://jsonplaceholder.typicode.com/photos/4',
'https://jsonplaceholder.typicode.com/photos/5'];

const arrIds=["nails","skin","pest","dato-user4","dato-user5"];

var varCtrlUrlsCol = 0, varCtlrUrlsRow=0;
for(varCtrlUrlsCol; varCtrlUrlsCol < URLS.length; varCtrlUrlsCol++){

fetch(URLS[varCtrlUrlsCol])
    .then(carta => carta.json())
    .then(carta =>{

            let elemento = document.getElementById(arrIds[varCtlrUrlsRow]);
            elemento.innerHTML = 


            '<div class="col" style="padding-bottom: 2%" id="dato-user1">\n' +
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
            '</figure>'
            '</div>';
            
            /*'<div class="card" style="width: 18rem;">\n' +
            '    <img src="'+user.url+'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+user.id+'</h5>\n' +
            '        <h5 class="card-title">PRECIO: '+user.albumId+'</h5>\n' +
            '        <p class="card-text">'+user.title+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';*/
            varCtlrUrlsRow++;
    })
    .catch(err => console.log(err))
}
