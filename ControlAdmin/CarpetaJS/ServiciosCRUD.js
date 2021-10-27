window.onload = () => {
  document.getElementById("Crear").addEventListener("click", crear);
  document.getElementById("mostrar").addEventListener("click", mostrar);
  document.getElementById("ocultar").addEventListener("click", ocultar);
  document.getElementById("editar").addEventListener("click", editar);
  document.getElementById("eliminar").addEventListener("click", eliminar);
  document.getElementById("buscar").addEventListener("click", buscar);
  
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
  }

  function putmethod(service){
    fetch("http://localhost:8080/ApiRest/Products", {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(service), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
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
      requisitos.id = i;
      requisitos.nombre = nom;
      requisitos.precio = pre;
      requisitos.texto = text;
      requisitos.img = imgn;
      requisitos.duracion = duracion;
      requisitos.clasification = clasification;
  
      postmethod(requisitos);

      clean();
      mostrar();
    }
  }
  
  function mostrar(){
    clean();
    ocultar();
    fetch('http://localhost:8080/ApiRest/Products')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(productos => {
      productos.forEach(producto => {
        if(producto != null){
          const itemHTML = 
          '<figure class="image-block" style="margin: auto;">\n' +
            '<h1>'+ producto.nombre_servicio+'</h1>\n' +
            '<img src="'+producto.img+'"/>\n' +
            '<figcaption>\n' +
              '<h3>\n' +
                'Ver Más\n' +
              '</h3>\n' +
              '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+producto.product_id+'</p>\n' +
                '<p>Precio: $'+producto.precio+'</p>\n' +
                '<p>Clasificación: '+producto.categoria_servicio+'</p>\n' +
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
    let cambio = document.getElementById("searchService").value;
    let name = document.getElementById("exampleInputName1").value;
    let desc = document.getElementById("exampleInputDescription1").value;
    let pri = document.getElementById("exampleInputPrice1").value;
    let ima = document.getElementById("exampleInputImage1").value;
    let dur = document.getElementById("exampleImputDuration1").value;
    let clasi = document.getElementById("exampleInputClas1").value;
    for(let cont=0; cont<i; cont++){
      let service = JSON.parse(localStorage.getItem(`servicios${cont}`));
      if(service != null){
        if(service.id == cambio){
          let nom = name;
          let text = desc;
          let pre = Number(pri);
          let imgn = ima;
          let duracion = Number(dur);
          let clasifi = clasi;
    
          if(nom == "" && pre == "" && text == "" && imgn == "" && duracion == "" && clasi == ""){
            alert("No puedes agregar tarjetas vacias.");
          }else if(isNaN(pre) || isNaN(duracion)){
            alert("Debes ingresar solo los números en el precio y la duración.");
          }else{
          var requisitos = new Object();
          requisitos.id = cambio;
          requisitos.nombre = nom;
          requisitos.precio = pre;
          requisitos.texto = text;
          requisitos.img = imgn;
          requisitos.duracion = duracion;
          requisitos.clasification = clasifi;
    
          var local = JSON.stringify(requisitos);
          localStorage.setItem(`servicios${cambio}`, local);
          }
        }
      }
    }
    //ocultar1();
    search(cambio);
  }
  
  function eliminar(){
    let borrar = window.prompt("Ingrese el id del producto que desea eliminar: ","");
    if(borrar != ""){ 
      Number(borrar);
      for(let cont=0; cont<i; cont++){
        let service = JSON.parse(localStorage.getItem(`servicios${cont}`));
        if(service != null){
          if(service.id == borrar){
            localStorage.removeItem(`servicios${cont}`);
          }
        }
      }
      ocultar();
      mostrar();
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
            '<h1>'+ producto.nombre_servicio+'</h1>\n' +
            '<img src="'+producto.img+'"/>\n' +
            '<figcaption>\n' +
              '<h3>\n' +
                'Ver Más\n' +
              '</h3>\n' +
              '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+producto.product_id+'</p>\n' +
                '<p>Precio: $'+producto.precio+'</p>\n' +
                '<p>Clasificación: '+producto.categoria_servicio+'</p>\n' +
                '<p>'+producto.descripcion+'</p>\n' +
              '</div>\n' +
              '<button>\n' +
                'Reservar\n' +
              '</button>\n' +
            '</figcaption>\n' +
          '</figure>';
          const itemsContainer = document.getElementById("list-items1");
          itemsContainer.innerHTML += itemHTML1;
          document.getElementById("exampleInputName1").value = producto.nombre_servicio;
          document.getElementById("exampleInputDescription1").value = producto.descripcion;
          document.getElementById("exampleInputPrice1").value = producto.precio;
          document.getElementById("exampleInputImage1").value = producto.img;
          document.getElementById("exampleImputDuration1").value = producto.duracion_servicio;
          document.getElementById("exampleInputClas1").value = producto.categoria_servicio;
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
    for(let cont=0; cont<i; cont++){
      var service = JSON.parse(localStorage.getItem(`servicios${cont}`));
      if(service != null){
        if(service.id == ser){
          const itemHTML1 = 
          '<figure class="image-block" style="margin: auto;">\n' +
            '<h1>'+ service.nombre+'</h1>\n' +
            '<img src="'+service.img+'"/>\n' +
            '<figcaption>\n' +
              '<h3>\n' +
                'Ver Más\n' +
              '</h3>\n' +
              '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+service.id+'</p>\n' +
                '<p>Precio: $'+service.precio+'</p>\n' +
                '<p>Clasificación: '+service.clasification+'</p>\n' +
                '<p>'+service.texto+'</p>\n' +
              '</div>\n' +
              '<button>\n' +
                'Reservar\n' +
              '</button>\n' +
            '</figcaption>\n' +
          '</figure>';
          const itemsContainer = document.getElementById("list-items1");
          itemsContainer.innerHTML += itemHTML1;
        }
      }
    }
    let servi = JSON.parse(localStorage.getItem(`servicios${ser}`));
    document.getElementById("exampleInputName1").value = servi.nombre;
    document.getElementById("exampleInputDescription1").value = servi.texto;
    document.getElementById("exampleInputPrice1").value = servi.precio;
    document.getElementById("exampleInputImage1").value = servi.img;
    document.getElementById("exampleImputDuration1").value = servi.duracion;
    document.getElementById("exampleInputClas1").value = servi.clasification;
  }
  
  };