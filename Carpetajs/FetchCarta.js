const URLS = [];
const arrIds = [];
const arrNUmberServices=[];
const arrServicios = ["nails", "skin", "pest", "fac", "pedi", "makeup", "estetica", "massage"];



window.onload = () => {
    countServicesLenght();
};

let retardoFetchMain = setTimeout(()=>{
    generatorCols();
    getCartas();
    clearTimeout(retardoFetchMain);
},3500)  

let retardoFetchCartas = setTimeout(()=>{
    btn();
    // cargaDeReservacion();
     displayCart();
    // clickborrar();
    // btnReservar();
    clearTimeout(retardoFetchCartas);
},5000)  


function generatorArrys(tamañoJson) {
    for (let varCtlrGenerator = 1; varCtlrGenerator <= tamañoJson; varCtlrGenerator++) {
        let url = "http://localhost:8080/ApiRest/Products/" + varCtlrGenerator;
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
        const respuestaServicios = await fetch("http://localhost:8080/ApiRest/Products");
        const jsonServicios = await respuestaServicios.json();
        const lengthServicios = await jsonServicios.length;
        console.log(lengthServicios);
        generatorArrys(lengthServicios);

        for(Products of jsonServicios){
            if (Products.categoria == "nails") {
                Servicio1++;
            }
            if (Products.categoria == "Cuidado de la piel") {
                 Servicio2++;
            }
            if (Products.categoria == "Pestañas y cejas") {
                 Servicio3++;
            }
            if (Products.categoria == "Faciales") {
                 Servicio4++;
            }
            if (Products.categoria == "Pedicure y manicure") {
                Servicio5++;
            }
            if (Products.categoria == "Maquillaje") {
                Servicio6++;
            }
            if (Products.categoria == "Estetica") {
                Servicio7++;
            }
            if (Products.categoria == "Masajes") {
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
        // generatorCols();


    } catch (error) {
        console.log(error);
    } finally { }
}

function generatorCols() {

    let varCtrlCols = 0, varCtlrIds=1;

    for (let varCtlrService = 0; varCtlrService < arrServicios.length; varCtlrService++) {

        console.log(arrServicios[varCtlrService]);

        let tagsids = document.querySelector("#nails");
        if(tagsids){
        
        for (varCtrlCols; varCtrlCols < arrNUmberServices[varCtlrService]; varCtrlCols++) {
            
            let col = document.createElement('div');
            col.style.display= "inline-block";
            col.style.paddingBottom = "2%";
            col.id = arrIds[varCtlrIds];
            document.getElementById(arrServicios[varCtlrService]).appendChild(col.cloneNode(true));
            console.log(col);
            varCtlrIds++;
        }
    }
        varCtrlCols=0;
        
    }
}
    
function getCartas(){
        let varCtlrCards=1;
        
        for(let varCtrlFetch=0;varCtrlFetch<URLS.length;varCtrlFetch++ ){
    
        fetch(URLS[varCtrlFetch])
        .then(response => response.json())
        .then(Servicios =>{
    
                if(Servicios.categoria=="nails"){
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
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Cuidado de la piel"){
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
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Pestañas y cejas"){
                    let elemento2 = document.getElementById(arrIds[varCtlrCards]);
                    elemento2.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Faciales"){
                    let elemento3 = document.getElementById(arrIds[varCtlrCards]);
                    elemento3.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Pedicure y manicure"){
                    let elemento4 = document.getElementById(arrIds[varCtlrCards]);
                    elemento4.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Maquillaje"){
                    let elemento5 = document.getElementById(arrIds[varCtlrCards]);
                    elemento5.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Estetica"){
                    let elemento6 = document.getElementById(arrIds[varCtlrCards]);
                    elemento6.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios.categoria=="Masajes"){
                    let elemento7 = document.getElementById(arrIds[varCtlrCards]);
                    elemento7.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>Duración: '+Servicios.duracion+'min</p>\n' +
                                '<p>'+Servicios.descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
        })
        .catch(err => console.log(err));
    }
}


var jsonserviciosreservados;
var arrCarritoServicios =[];
var costoTotal=0;

function btn(){
    let btnReservacion = document.querySelectorAll(".btnSeleccionar");
    for(let varCtlrClick=0; varCtlrClick<btnReservacion.length;varCtlrClick++){
        btnReservacion[varCtlrClick].addEventListener('click',()=>{

        SelectServicio(varCtlrClick);

        let retardoFetchMain1 = setTimeout(()=>{

        arrCarritoServicios.push(jsonserviciosreservados);

        localStorage.setItem("serviciosReservados", JSON.stringify(arrCarritoServicios));

        localStorage.setItem("cantidadServicios",arrCarritoServicios.length );

        document.querySelector('.bag span').textContent = localStorage.getItem("cantidadServicios");

        localStorage.setItem("costoCarrito",costoTotal);
                
        clearTimeout(retardoFetchMain1);
        },500) 
            
        }); 
         
    }
}

function SelectServicio(numeroDeServicio){ //5
    numeroDeServicio++;

    fetch("http://localhost:8080/ApiRest/Products/"+numeroDeServicio) //servicio/5
    .then(response => response.json())
    .then(Servicios =>{

        jsonserviciosreservados = Servicios.id;

        costoTotal = costoTotal + parseInt(Servicios.precio);
    })
    .catch(err => console.log(err));
}


function displayCart(){

    let productContainer = document.querySelector(".products");

    let total = document.querySelector(".total");


    let serviciosenCarrito = localStorage.getItem("cantidadServicios");
    document.querySelector('.bag span').textContent = serviciosenCarrito;

    let varprueba3 = localStorage.getItem("serviciosReservados");
    varprueba3 = JSON.parse(varprueba3);

    console.log(varprueba3);

    if(productContainer){

        for(let varprueba2 = 0; varprueba2 <= varprueba3.length-1 ; varprueba2++){
        fetch("http://localhost:8080/ApiRest/Products/" + varprueba3[varprueba2])
        .then(response => response.json())
        .then(ServiciosRservados =>{
            console.log(varprueba3[varprueba2]);
        
            productContainer.innerHTML += `
            <tr style="bm: 5%;">

            <td>
            <div>
            <button class="btn eliminar" style="background-color: red" type="button"><h3 style="color: white">Eliminar</h3></button>
            </div>
            </td>

            <td style="width: 25%;">
            <h3 style=" color: red">${ServiciosRservados.titulo}</h3>
            <img style="width: 50%;" src="${ServiciosRservados.img}">
            </td>
    
            <td>
            
            <form role="form" onsubmit="dateAndTimeSelect(event);" style=" margin: auto;">
            <div class="mb-3" style="margin: auto; width: 280px;">
              <label>Fecha</label>
              <input type="date" name="selectfecha" step="1" class=" selectfecha form-control form-control-lg" required/>
            </div>
            <div class="mb-3" >
              <label>Hora: <br>
                <input list="horarioCita" name="selecthora" class="selecthora form-control form-control-lg" required/></label>
                <datalist id="horarioCita">
                  <option value="9:00">
                  <option value="9:30">
                  <option value="10:00">
                  <option value="10:30">
                  <option value="11:00">
                  <option value="11:30">
                  <option value="12:00">
                  <option value="12:30">
                  <option value="13:00">
                  <option value="13:30">
                  <option value="14:00">
                  <option value="14:30">
                  <option value="15:00">
                  <option value="15:30">
                  <option value="16:00">
                  <option value="16:30">
                  <option value="17:00">
                  <option value="17:30">
                  <option value="18:00">
                  <option value="18:30">                         
                </datalist>
            </div>
    
            <div>
            <button class="btn almacenar" style="background-color: #AB3053" type="submit"><h3 style="color: white">Reservar</h3></button>
          </div>
    
    
          </form>
    
    
            </td>
    
            <td>
    
            <h3>$${ServiciosRservados.precio},00</h3>
    
            </td>
    
          </tr>`;

    

        })
        .catch(err => console.log(err));
        
     }
     total.innerHTML += `

    <tr>
       <td> </td>
       <td> </td>
       <td>
       <div>
       <button class="btn borrar" style="background-color: red" type="button"><h3 style="color: white">ELIMINAR TODO</h3></button>
       </div>
       </td>
       <td style="background-color: #AB3053"><h2 style="color: white">${localStorage.getItem("costoCarrito")}$</h2></td>
    </tr>
`;

    }else{
        productContainer.innerHTML = '';
    }
    
    }

const dateAndTimeSelect = e => {

    let reservarServicio = document.querySelectorAll('.almacenar');
    let fechaDeReservacion = document.querySelectorAll('.selectfecha');
    let horaDeReservacion = document.querySelectorAll('.selecthora');

    for (let varCtlrBtnResrvar = 0; varCtlrBtnResrvar < reservarServicio.length; varCtlrBtnResrvar++){
        reservarServicio[varCtlrBtnResrvar].addEventListener('click', e=>{

            alert("btnReservar");
            console.log(fechaDeReservacion[varCtlrBtnResrvar].value,horaDeReservacion[varCtlrBtnResrvar].value);
            verificarReserva(fechaDeReservacion[varCtlrBtnResrvar].value,horaDeReservacion[varCtlrBtnResrvar].value);




            // let formReservar = {
            //     selectfecha: reservarServicio1[i].value,
            //     selecthora: reservarServicio2[i].value
            // }
            // localStorage.setItem('formReservar',JSON.stringify(formReservar));
            // console.log(localStorage.getItem('formReservar'));
            
            // e.preventDefault();
        } )
    }

        // let formReservar = {
        //   selectfecha: document.getElementsByClassName('selectfecha').value,        
        //   selecthora: document.getElementsByClassName('selecthora').value
        // }
        // localStorage.setItem('formReservar',JSON.stringify(formReservar));

        // console.log(localStorage.getItem('formReservar'));

        e.preventDefault();
    }


function verificarReserva(fechaDeReservacion,horaDeReservacion){
        
        fetch("http://localhost:8080/ApiRest/Order")
        .then(response => response.json())
        .then(Reservacion =>{
            Reservacion.forEach(Reservacion=>{
                if(Reservacion.orden_date==(fechaDeReservacion+" 00:00:00") && Reservacion.hora_reserva==horaDeReservacion ){
                    alert("son iguales");

                }else{
                    agregarReserva();
                }
            });
        })
        .catch(err => console.log(err));
}


function agregarReserva(arrCarritoProductos){
        fetch("http://localhost:8080/ApiRest/Order", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(arrCarritoProductos), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
}
var nuevaReserva = Object();

nuevaReserva.orden_id=7;
nuevaReserva.orden_date=7;
nuevaReserva.fecha_reserva=7;
nuevaReserva.hora_reserva=7;
nuevaReserva.cliente_id.cliente_id=1;



// {
//     "orden_id": 6,
//     "orden_date": "2021-10-29 00:00:00",
//     "fecha_reserva": "2021-10-29",
//     "hora_reserva": "9:00",
//     "cliente_id": {
//         "cliente_id": 1,
//         "cel": "3222638841",
//         "nombre": "Candy Pacheco",
//         "email": "Candy4@gmail.com",
//         "contraseña": "sdverwetgerfq",
//         "cumple": "15/08/1998",
//         "genero": "M",
//         "foto_perfil": " ",
//         "fecha_registro": "2021-10-27 00:00:00"
//     },
//     "id": {
//         "id": 1,
//         "titulo": "RETIRO DE GELISH DE FÁCIL REMOCIÓN",
//         "duracion": "15",
//         "precio": "40",
//         "img": " /images/Servicios/Nails1.jpeg",
//         "carrito": "0",
//         "descripcion": "Cuidamos de tu uña natural y retiramos adecuadamente el gelish anterior!",
//         "categoria": "nails"
//     }
// }