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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button class="btnSeleccionar">\n' +
                                'Seleccionar\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
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
                                '<p>Duración: '+Servicios.duracion+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
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

        `<div class="product">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">borrar</button>
        </div>
        <img class="tamañoimg" src="${item.img}">
        <span>${item.titulo}</span>
        </div>
        <div class="price">${item.precio},00</div>
        <div class="quantity">
        <span>${item.Carrito}</span>
        </div>
        <div class="total">
        $${item.Carrito * item.precio},00
        </div>
        `;
        });
        productContainer.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
      Precio total: 
      </h4>
      <h4 class="basketTotal">
        $${costototal},00
        </h4>
        </div>`;

    }
}
function clickborrar(){
    let btnBorrar = document.querySelectorAll(".btn-danger");
for(let varCtlrClick=0; varCtlrClick<btnBorrar.length;varCtlrClick++){
    btnBorrar[varCtlrClick].addEventListener('click',()=>{
        localStorage.clear();
        alert("se han borrado todos lo servcios");
        location.reload();
    });
     
}
}



