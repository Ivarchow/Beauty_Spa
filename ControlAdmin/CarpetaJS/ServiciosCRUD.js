window.onload = () => {
  count();
  var lastServ;
  document.getElementById("Crear").addEventListener("click", main);
  document.getElementById("mostrar").addEventListener("click", mostrar);
  document.getElementById("ocultar").addEventListener("click", ocultar);
  document.getElementById("editar").addEventListener("click", editar);
  document.getElementById("eliminar").addEventListener("click", eliminar);
  document.getElementById("buscar").addEventListener("click", buscar);

  function main(){
    lastServ = Number(sessionStorage.getItem("lastServ"));
    let product = crear();
    revisar(product);
  }
  
  function postmethod(service){
    fetch("http://localhost:8080/ApiRest/Products", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(service), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert("Servicio creado");
    sessionStorage.setItem("lastServ", Number(service.id)+1);
    setTimeout(mostrar,1000);
  }

  function count(){
    fetch('http://localhost:8080/ApiRest/Products')  //link para el GET de todos los usuarios
      .then(respuesta => respuesta.json()) 
      .then(products => {
          products.forEach(products => {
            sessionStorage.setItem("lastServ", Number(products.id)+1);
            lastServ = sessionStorage.getItem("lastServ");
          });
      })
      .catch(error => console.log('Hubo un error : ' + error.message))
  }

  function revisar(product){
    let bandera = false;
    fetch('http://localhost:8080/ApiRest/Products')  //link para el GET de todos los usuarios
      .then(respuesta => respuesta.json()) 
      .then(products => {
          products.forEach(products => {
            if(products.titulo == product.titulo || products.descripcion == product.descripcion){
              bandera = true;
            }
          });
          if(bandera){
            alert("Servicio ya creado");
          }else{
            postmethod(product);
          }
      })
      .catch(error => console.log('Hubo un error : ' + error.message))
  }
  
  function crear(){
    let nom = document.getElementById("exampleInputName").value;
    let text = document.getElementById("exampleInputDescription").value;
    let pre = Number(document.getElementById("exampleInputPrice").value);
    let imgn = document.getElementById("exampleInputImage").value;
    let duracion = Number(document.getElementById("exampleImputDuration").value);
    let clasification = document.getElementById("exampleInputClas").value;
  
    if(nom == "" && pre == "" && text == "" && imgn == ""){
      alert("No puedes agregar tarjetas vacias.");
    }else if(isNaN(pre) || isNaN(duracion)){
      alert("Debes ingresar solo los números en el precio y la duración.");
    }else{
      var requisitos = new Object();
      requisitos.id = lastServ;
      requisitos.titulo = nom;
      requisitos.categoria = clasification;
      requisitos.descripcion = text;
      requisitos.duracion = duracion;
      requisitos.precio = pre;
      requisitos.img = imgn;
      requisitos.carrito = 0;
      return requisitos;
    }
  }
  
  function mostrar(){
    //clean();
    ocultar();
    fetch('http://localhost:8080/ApiRest/Products')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(productos => {
      productos.forEach(producto => {
        if(producto != null){
          const itemHTML = 
          '<figure class="image-block" style="margin: auto;">\n' +
            '<h1>'+ producto.titulo+'</h1>\n' +
            '<img src="'+producto.img+'"/>\n' +
            '<figcaption>\n' +
              '<h3>\n' +
                'Ver Más\n' +
              '</h3>\n' +
              '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+producto.id+'</p>\n' +
                '<p>Precio: $'+producto.precio+'</p>\n' +
                '<p>Clasificación: '+producto.categoria+'</p>\n' +
                '<p>'+producto.descripcion+'</p>\n' +
              '</div>\n' +
              '<button>\n' +
                'Reservar\n' +
              '</button>\n' +
            '</figcaption>\n' +
          '</figure>';
          const itemsContainer = document.getElementById("list-items");
          itemsContainer.innerHTML += itemHTML;
        }
      });
  })
  .catch(error => console.log('Hubo un error : ' + error.message))
  }
  
  function ocultar(){
    clean();
    document.getElementById("list-items").innerHTML = "";
  }
  function ocultar1(){
    clean1();
    document.getElementById("list-items1").innerHTML = "";
  }
  
  function editar(){
    let cambio = Number(document.getElementById("searchService").value);
    let name = document.getElementById("exampleInputName1").value;
    let desc = document.getElementById("exampleInputDescription1").value;
    let pri = Number(document.getElementById("exampleInputPrice1").value);
    let ima = document.getElementById("exampleInputImage1").value;
    let dur = Number(document.getElementById("exampleImputDuration1").value);
    let clasi = document.getElementById("exampleInputClas1").value;

    if(name == "" && pri == "" && desc == "" && ima == "" && dur == "" && clasi == ""){
      alert("No puedes agregar tarjetas vacias.");
    }else if(isNaN(pri) || isNaN(dur)){
      alert("Debes ingresar solo los números en el precio y la duración.");
    }else{
      var service = new Object();
      service.id = cambio;
      service.titulo = name;
      service.categoria = clasi;
      service.descripcion = desc;
      service.duracion = dur;
      service.precio = pri;
      service.img = ima;
      service.carrito = 0;

      fetch("http://localhost:8080/ApiRest/Products", {
        method: 'PUT', // or 'POST'
        body: JSON.stringify(service), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
    setTimeout(function() {search (cambio)}, 1000);
  }
  
  function eliminar(){
    let borrar = window.prompt("Ingrese el id del producto que desea eliminar: ","");
    if(borrar != ""){ 
      Number(borrar);
      fetch(`http://localhost:8080/ApiRest/Products/${borrar}`, {
        method: 'DELETE', // or 'PUT'
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      setTimeout(mostrar,1000);

    }else{
      alert("Debes ingresar un número.");
    }
  }
  
  function buscar(){
    ocultar1();
    let search = document.getElementById("searchService").value;
    if(search != ""){
      search = Number(search);
      if(isNaN(search)){
        alert("El ID debe ser un numero.");
      }else{
        fetch(`http://localhost:8080/ApiRest/Products/${search}`)
        .then(respuesta => respuesta.json()) 
        .then(producto => {
          const itemHTML1 = 
          '<figure class="image-block" style="margin: auto;">\n' +
            '<h1>'+ producto.titulo+'</h1>\n' +
            '<img src="'+producto.img+'"/>\n' +
            '<figcaption>\n' +
              '<h3>\n' +
                'Ver Más\n' +
              '</h3>\n' +
              '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+producto.id+'</p>\n' +
                '<p>Precio: $'+producto.precio+'</p>\n' +
                '<p>Clasificación: '+producto.categoria+'</p>\n' +
                '<p>'+producto.descripcion+'</p>\n' +
              '</div>\n' +
              '<button>\n' +
                'Reservar\n' +
              '</button>\n' +
            '</figcaption>\n' +
          '</figure>';
          const itemsContainer = document.getElementById("list-items1");
          itemsContainer.innerHTML += itemHTML1;
          document.getElementById("exampleInputName1").value = producto.titulo;
          document.getElementById("exampleInputDescription1").value = producto.descripcion;
          document.getElementById("exampleInputPrice1").value = producto.precio;
          document.getElementById("exampleInputImage1").value = producto.img;
          document.getElementById("exampleImputDuration1").value = producto.duracion;
          document.getElementById("exampleInputClas1").value = producto.categoria;
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
      }
    }else{
      alert("Debes ingresar un ID");
    }
  }
  
  function clean(){
    document.getElementById("exampleInputName").value = null;
    document.getElementById("exampleInputDescription").value = null;
    document.getElementById("exampleInputPrice").value = null;
    document.getElementById("exampleInputImage").value = null;
    document.getElementById("exampleImputDuration").value = null;
    document.getElementById("exampleInputClas").value = null;
  }
  function clean1(){
    document.getElementById("exampleInputName1").value = null;
    document.getElementById("exampleInputDescription1").value = null;
    document.getElementById("exampleInputPrice1").value = null;
    document.getElementById("exampleInputImage1").value = null;
    document.getElementById("exampleImputDuration1").value = null;
    document.getElementById("exampleInputClas1").value = null;
  }

  function search(ser){
    ocultar1();
    fetch(`http://localhost:8080/ApiRest/Products/${ser}`)
    .then(respuesta => respuesta.json()) 
    .then(producto => {
      const itemHTML1 = 
        '<figure class="image-block" style="margin: auto;">\n' +
          '<h1>'+ producto.titulo+'</h1>\n' +
          '<img src="'+producto.img+'"/>\n' +
          '<figcaption>\n' +
            '<h3>\n' +
              'Ver Más\n' +
            '</h3>\n' +
            '<div class="overflow-auto example" style="height: 200px; ">\n' +
              '<p>ID: '+producto.id+'</p>\n' +
              '<p>Precio: $'+producto.precio+'</p>\n' +
              '<p>Clasificación: '+producto.categoria+'</p>\n' +
              '<p>'+producto.descripcion+'</p>\n' +
            '</div>\n' +
            '<button>\n' +
              'Reservar\n' +
            '</button>\n' +
          '</figcaption>\n' +
        '</figure>';
      const itemsContainer = document.getElementById("list-items1");
      itemsContainer.innerHTML += itemHTML1;
      document.getElementById("exampleInputName1").value = producto.titulo;
      document.getElementById("exampleInputDescription1").value = producto.descripcion;
      document.getElementById("exampleInputPrice1").value = producto.precio;
      document.getElementById("exampleInputImage1").value = producto.img;
      document.getElementById("exampleImputDuration1").value = producto.duracion;
      document.getElementById("exampleInputClas1").value = producto.categoria;
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
  }
  
  };