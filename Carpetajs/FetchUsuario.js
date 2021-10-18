const URLS = [];
const arrIds = [];
const arrNUmberServices=[];
const arrServicios = ["nails", "skin", "pest", "fac", "pedi", "makeup", "estetica", "massage"];


window.onload = () => {
    countServicesLenght();
};


function generatorArrys(tamañoJson) {
    for (let varCtlrGenerator = 0; varCtlrGenerator < tamañoJson; varCtlrGenerator++) {
        let url = "http://localhost:3000/Servicios/" + varCtlrGenerator;
        let ids = "carta" + varCtlrGenerator;
        URLS.push(url);
        arrIds.push(ids);
    }
    console.log(arrIds);
    console.log(URLS);
}

async function countServicesLenght() {

    try {
        let Servicio1 = 0, Servicio2 = 0, Servicio3 = 0, Servicio4 = 0, Servicio5 = 0, Servicio6 = 0, Servicio7 = 0, Servicio8 = 0;
        const respuestaServicios = await fetch("http://localhost:3000/Servicios");
        const jsonServicios = await respuestaServicios.json();
        const lengthServicios = await jsonServicios.length;
        console.log(lengthServicios);
        generatorArrys(lengthServicios);

        for(Servicios of jsonServicios){
            if (Servicios.Categoria == "Unas") {
                Servicio1++;
            }
            if (Servicios.Categoria == "Cuidado de la piel") {
                Servicio2++;
            }
            if (Servicios.Categoria == "Pestañas y cejas") {
                Servicio3++;
            }
            if (Servicios.Categoria == "Faciales") {
                Servicio4++;
            }
            if (Servicios.Categoria == "Pedicure y manicure") {
                Servicio5++;
            }
            if (Servicios.Categoria == "Maquillaje") {
                Servicio6++;
            }
            if (Servicios.Categoria == "Estetica") {
                Servicio7++;
            }
            if (Servicios.Categoria == "Masajes") {
                Servicio8++;
            }
            
        }
        arrNUmberServices.push(Servicio1);
        arrNUmberServices.push(Servicio2);
        arrNUmberServices.push(Servicio3);
        arrNUmberServices.push(Servicio4);
        arrNUmberServices.push(Servicio5);
        arrNUmberServices.push(Servicio6);
        arrNUmberServices.push(Servicio7);
        arrNUmberServices.push(Servicio8);
        console.log(arrNUmberServices);
        generatorCols();


    } catch (error) {
        console.error("ERROR DE RESPUESTA DE SERVIDOR");
    } finally { }
}

function generatorCols() {

    let varCtrlCols = 0, varCtlrIds=0;

    for (let varCtlrService = 0; varCtlrService < arrServicios.length; varCtlrService++) {

        console.log(arrServicios[varCtlrService]);
        

        for (varCtrlCols; varCtrlCols < arrNUmberServices[varCtlrService]; varCtrlCols++) {
            
            let col = document.createElement('div');
            col.className = "col";
            col.style.paddingBottom = "2%";
            col.id = arrIds[varCtlrIds];
            console.log(col);
            document.getElementById(arrServicios[varCtlrService]).appendChild(col.cloneNode(false));
            varCtlrIds++;
        }
        varCtrlCols=0;
        
    }
    getCartas();
}
    
function getCartas(){
        let varCtlrCards=0;
    
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
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Cuidado de la piel"){
                    let elemento1 = document.getElementById(arrIds[varCtlrCards]);
                    elemento1.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Pestañas y cejas"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Faciales"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Pedicure y manicure"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Maquillaje"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Estetica"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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
                if(Servicios.Categoria=="Masajes"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
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