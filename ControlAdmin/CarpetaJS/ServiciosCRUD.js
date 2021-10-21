window.onload = () => {

  if(localStorage.getItem("i") != 0){
    if(localStorage.getItem("i") == null){
      localStorage.setItem("i", 0);
    }
    i = localStorage.getItem("i");
  }else{
    i = 0;
  }
  document.getElementById("Crear").addEventListener("click", crear);
  document.getElementById("mostrar").addEventListener("click", mostrar);
  document.getElementById("ocultar").addEventListener("click", ocultar);
  document.getElementById("editar").addEventListener("click", editar);
  document.getElementById("eliminar").addEventListener("click", eliminar);
  document.getElementById("buscar").addEventListener("click", buscar);
  
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
      var duplicado = false
      var requisitos = new Object();
      requisitos.id = i;
      requisitos.nombre = nom;
      requisitos.precio = pre;
      requisitos.texto = text;
      requisitos.img = imgn;
      requisitos.duracion = duracion;
      requisitos.clasification = clasification;
  
      var local = JSON.stringify(requisitos);
      for(let cont=0; cont<i; cont++){
        let servicio = JSON.parse(localStorage.getItem(`servicios${cont}`));
        if(servicio != null){
          if(requisitos.nombre == servicio.nombre || requisitos.texto == servicio.texto){
            duplicado = true;
          }
        }
      }
      if(duplicado){
        alert("Servicio duplicado");
      }else{
        localStorage.setItem(`servicios${i}`, local);
        i++;
        localStorage.setItem("i", i);
      }
    clean();
    mostrar();
    }
  }
  
  function mostrar(){
    clean();
    ocultar();
    var j = localStorage.getItem("i");
    for(var cont=0; cont<j; cont++){
      if(localStorage.getItem(`servicios${cont}`) != null){
        var serv = JSON.parse(localStorage.getItem(`servicios${cont}`));
        const itemHTML = 
        '<figure class="image-block" style="margin: auto;">\n' +
          '<h1>'+ serv.nombre+'</h1>\n' +
          '<img src="'+serv.img+'"/>\n' +
          '<figcaption>\n' +
            '<h3>\n' +
                'Ver Más\n' +
            '</h3>\n' +
            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                '<p>ID: '+serv.id+'</p>\n' +
                '<p>Precio: $'+serv.precio+'</p>\n' +
                '<p>Clasificación: '+serv.clasification+'</p>\n' +
                '<p>'+serv.texto+'</p>\n' +
            '</div>\n' +
            '<button>\n' +
                'Reservar\n' +
            '</button>\n' +
          '</figcaption>\n' +
        '</figure>';
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
      }
    }
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
        for(let cont=0; cont<i; cont++){
          var service = JSON.parse(localStorage.getItem(`servicios${cont}`));
          if(service != null){
            if(service.id == search){
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
        let servi = JSON.parse(localStorage.getItem(`servicios${search}`));
        document.getElementById("exampleInputName1").value = servi.nombre;
        document.getElementById("exampleInputDescription1").value = servi.texto;
        document.getElementById("exampleInputPrice1").value = servi.precio;
        document.getElementById("exampleInputImage1").value = servi.img;
        document.getElementById("exampleImputDuration1").value = servi.duracion;
        document.getElementById("exampleInputClas1").value = servi.clasification;
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