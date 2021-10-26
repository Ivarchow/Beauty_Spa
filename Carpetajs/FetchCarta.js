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
},1000)  

let retardoFetchCartas = setTimeout(()=>{
    btn();
    cargaDeReservacion();
    displayCart();
    clickborrar();
    btnReservar();
    clearTimeout(retardoFetchCartas);
},1500)  


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
            // if (Servicios.categoria == "Pedicure y manicure") {
            //     Servicio5++;
            // }
            // if (Servicios.categoria == "Maquillaje") {
            //     Servicio6++;
            // }
            // if (Servicios.categoria == "Estetica") {
            //     Servicio7++;
            // }
            // if (Servicios.categoria == "Masajes") {
            //     Servicio8++;
            // }
            
        }
        arrNUmberServices.push(Servicio1);
        arrNUmberServices.push(Servicio2);
        arrNUmberServices.push(Servicio3);
        arrNUmberServices.push(Servicio4);
        // arrNUmberServices.push(Servicio5);
        // arrNUmberServices.push(Servicio6);
        // arrNUmberServices.push(Servicio7);
        // arrNUmberServices.push(Servicio8);
        console.log(arrNUmberServices);
        // generatorCols();


    } catch (error) {
        console.error("ERROR DE RESPUESTA DE SERVIDOR");
    } finally { }
}

function generatorCols() {

    let varCtrlCols = 0, varCtlrIds=0;

    for (let varCtlrService = 0; varCtlrService < arrServicios.length; varCtlrService++) {

        console.log(arrServicios[varCtlrService]);

        let tagsids = document.querySelector("#nails");
        if(tagsids){
        
        for (varCtrlCols; varCtrlCols < arrNUmberServices[varCtlrService]; varCtrlCols++) {
            
            let col = document.createElement('div');
            // col.className = "col-4";
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
    // getCartas();
}
    
function getCartas(){
        let varCtlrCards=0;
        
        for(let varCtrlFetch=0;varCtrlFetch<URLS.length;varCtrlFetch++ ){
    
        fetch("http://localhost:8080/ApiRest/Products")
        .then(response => response.json())
        .then(Servicios =>{
    
                if(Servicios[varCtrlFetch].categoria=="nails"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios[varCtrlFetch].titulo+'</h1>\n' +
                        '<img src="'+Servicios[varCtrlFetch].img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios[varCtrlFetch].precio+'$</p>\n' +
                                '<p>Duración: '+Servicios[varCtrlFetch].duracion+'min</p>\n' +
                                '<p>'+Servicios[varCtrlFetch].descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios[varCtrlFetch].categoria=="Cuidado de la piel"){
                    let elemento1 = document.getElementById(arrIds[varCtlrCards]);
                    elemento1.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios[varCtrlFetch].titulo+'</h1>\n' +
                        '<img src="'+Servicios[varCtrlFetch].img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios[varCtrlFetch].precio+'$</p>\n' +
                                '<p>Duración: '+Servicios[varCtrlFetch].duracion+'min</p>\n' +
                                '<p>'+Servicios[varCtrlFetch].descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios[varCtrlFetch].categoria=="Pestañas y cejas"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios[varCtrlFetch].titulo+'</h1>\n' +
                        '<img src="'+Servicios[varCtrlFetch].img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios[varCtrlFetch].precio+'$</p>\n' +
                                '<p>Duración: '+Servicios[varCtrlFetch].duracion+'min</p>\n' +
                                '<p>'+Servicios[varCtrlFetch].descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
                if(Servicios[varCtrlFetch].categoria=="Faciales"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios[varCtrlFetch].titulo+'</h1>\n' +
                        '<img src="'+Servicios[varCtrlFetch].img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios[varCtrlFetch].precio+'$</p>\n' +
                                '<p>Duración: '+Servicios[varCtrlFetch].duracion+'min</p>\n' +
                                '<p>'+Servicios[varCtrlFetch].descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
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




let arrCarrito = [
    {
        tituloRvdo: "gelish prueba 1", //Servicio/0
        precio: 150,
        img: "/imagenes/gelish1.jpeg",
        Reservado: 0
    },
    {
        tituloRvdo: "gelish prueba 2",
        precio: 250,
        img: "/imagenes/gelish1.jpeg",
        Reservado: 0
    },
    {
        tituloRvdo: "gelish prueba 3",
        precio: 350,
        img: "/imagenes/gelish1.jpeg",
        Reservado: 0
    }
];

var jsonserviciosreservados;

function btn(){
    let btnReservacion = document.querySelectorAll(".btnSeleccionar");
    for(let varCtlrClick=0; varCtlrClick<btnReservacion.length;varCtlrClick++){
        btnReservacion[varCtlrClick].addEventListener('click',()=>{
            SelectServicio(varCtlrClick);
            let retardoFetchMain1 = setTimeout(()=>{
                serviciosNum(jsonserviciosreservados);
                totalcost(jsonserviciosreservados);
                clearTimeout(retardoFetchMain1);
            },500) 
            
        }); 
         
    }
}
// INCREMENTO DE NUMEROS EN LA BOLSA
function cargaDeReservacion(){
    let productosEnCarrito = localStorage.getItem('serviciosNum');
    if(productosEnCarrito){
        document.querySelector('.bag span').textContent= productosEnCarrito;
    }
}
// INCREMENTO DE NUMEROS EN LA BOLSA

function serviciosNum(arrCarritoProductos){
   let productosEnCarrito = localStorage.getItem('serviciosNum');
   productosEnCarrito = parseInt(productosEnCarrito);

   if(productosEnCarrito){
    localStorage.setItem('serviciosNum',productosEnCarrito + 1);
    document.querySelector('.bag span').textContent= productosEnCarrito +1;
   }else{
    localStorage.setItem('serviciosNum',1);
    document.querySelector('.bag span').textContent=1;
   }
   setItems(arrCarritoProductos);
}
function setItems(arrCarritoProductos){
    let carritoItems= localStorage.getItem("serviciosencarrito");
    carritoItems = JSON.parse(carritoItems);

    if(carritoItems!=null){
        if(carritoItems[arrCarritoProductos.titulo]==undefined){
            carritoItems={
                ...carritoItems,
                [arrCarritoProductos.titulo]: arrCarritoProductos
            }
        }
        carritoItems[arrCarritoProductos.titulo].Carrito +=1
    }else{
        arrCarritoProductos.Carrito=1;
        carritoItems={
            [arrCarritoProductos.titulo]: arrCarritoProductos
        }
    }
    localStorage.setItem("serviciosencarrito", JSON.stringify(carritoItems));
}

function SelectServicio(uno){ //5

    fetch("http://localhost:3000/Servicios/"+uno) //servicio/5
    .then(response => response.json())
    .then(Servicios =>{
        jsonserviciosreservados=Servicios;
    })
    .catch(err => console.log(err));
}

function totalcost(servicioreservado){
    let costototal = localStorage.getItem("preciocarrito");
    console.log("el precio de mi carrito es: ",costototal);
    console.log(typeof costototal);

    if(costototal!=null){
        costototal = parseInt(costototal);
        localStorage.setItem("preciocarrito",costototal + servicioreservado.precio);
    }else{
        localStorage.setItem("preciocarrito", servicioreservado.precio);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("serviciosencarrito");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    console.log(cartItems);
    let costototal = localStorage.getItem("preciocarrito");
    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += 

        // `<div class="product">
        // <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        // <button type="button" class="btn btn-danger">borrar</button>
        // </div>
        // <img class="tamañoimg" src="${item.img}">
        // <span>${item.titulo}</span>
        // </div>
        // <div class="price">${item.precio},00</div>
        // <div class="quantity">
        // <span>${item.Carrito}</span>
        // </div>
        // <div class="total">
        // $${item.Carrito * item.precio},00
        // </div>
        // `;


        `
        <tr style="bottom: 5%;">
        <td>
        
        <div>
        <button class="btn eliminar" style="background-color: red" type="button"><h3 style="color: white">Eliminar</h3></button>
      </div>

        </td>
        <td style="width: 25%;">



        <h3 style=" color: red">${item.titulo}</h3>
        <img style="width: 50%;" src="${item.img}">
        </td>
    
        <td>

        <h3>${item.precio},00</h3>

        </td>

        <td>
        <h3>${item.Carrito}</h3>
        </td>

        <td>
        
        <form role="form" onsubmit="dateAndTimeSelect(event);" style=" margin: auto;">
        <div class="mb-3" style="margin: auto; width: 280px;">
          <label>Fecha</label>
          <input type="date" name="selectfecha" id="selectfecha" step="1" class="form-control form-control-lg" required/>
        </div>
        <div class="mb-3" >
          <label>Hora: <br>
            <input list="horarioCita" name="selecthora" id="selecthora" class="form-control form-control-lg" required/></label>
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

        <h3>$${item.Carrito * item.precio},00</h3>

        </td>

      </tr>`;

        });

        productContainer.innerHTML += `

        <table class="table" style="width: 95%; margin: auto;">
        <thead style="text-align: center;">
          <tr>
          <th scope="col"><h2></h2></th>
          <th scope="col"><h2></h2></th>
          <th scope="col"><h2></h2></th>
          <th scope="col"><h2></h2></th>
          <th scope="col"><h2></h2></th>
            <th scope="col"><h2>Total</h2></th>
          </tr>
        </thead>
        <tbody class="products" style="text-align: center;">
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <div>
          <button class="btn borrar" style="background-color: red" type="button"><h3 style="color: white">ELIMINAR TODO</h3></button>
        </div>
          </td>
          <td style="background-color: #AB3053"><h2 style="color: white">${costototal}$</h2></td>
          </tr>

        </tbody>
      </table>`;


    }
}
function clickborrar(){
    let btnBorrar = document.querySelectorAll(".eliminar");
for(let varCtlrClick=0; varCtlrClick<btnBorrar.length;varCtlrClick++){
    btnBorrar[varCtlrClick].addEventListener('click',()=>{
        let cartItems = localStorage.getItem("serviciosencarrito");
        cartItems = JSON.parse(cartItems);
        let obj = Object.values(cartItems)[varCtlrClick];
        console.log(obj);
        // localStorage.clear();
        // alert("se han borrado todos lo servcios");
        // location.reload();
    });
     
}
}

//const dateAndTimeSelect = e => {
//    let formReservar = {
//        selectfecha: document.getElementById('selectfecha').value,
//        selecthora: document.getElementById('selecthora').value
/*    }
    localStorage.setItem('formReservar',JSON.stringify(formReservar));
    console.log(localStorage.getItem('formReservar'));
    e.preventDefault();
}*/

function btnReservar(){
    let reservarServicio = document.querySelectorAll('.almacenar');
    let reservarServicio1 = document.querySelectorAll('#selectfecha');
    let reservarServicio2 = document.querySelectorAll('#selecthora');

    for (let i = 0; i < reservarServicio.length; i++){
        reservarServicio[i].addEventListener('click', e=>{

            let formReservar = {
                selectfecha: reservarServicio1[i].value,
                selecthora: reservarServicio2[i].value
            }
            localStorage.setItem('formReservar',JSON.stringify(formReservar));
            console.log(localStorage.getItem('formReservar'));
            e.preventDefault();
        } )
    }
}