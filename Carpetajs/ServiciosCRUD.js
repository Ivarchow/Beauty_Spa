//var i = localStorage.setItem("i", 0);
if(localStorage.getItem("i") != 0){
  i = localStorage.getItem("i");
}else{
  i = 0;
}
document.getElementById("Crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("ocultar").addEventListener("click", ocultar);
document.getElementById("editar").addEventListener("click", editar);
document.getElementById("eliminar").addEventListener("click", eliminar);

function crear(){
  let nom = document.getElementById("exampleInputName").value;
  let text = document.getElementById("exampleInputDescription").value;
  let pre = document.getElementById("exampleInputPrice").value;
  let imgn = document.getElementById("exampleInputImage").value;

  if(nom == "" && pre == "" && text == "" && imgn == ""){
    alert("No puedes agregar tarjetas vacias.");
  }else{
    var requisitos = new Object();
    requisitos.id = i;
    requisitos.nombre = nom;
    requisitos.precio = pre;
    requisitos.texto = text;
    requisitos.img = imgn; 

    var local = JSON.stringify(requisitos);
    localStorage.setItem(`servicios${i}`, local);
    console.log('local: ', JSON.parse(local));
    i++;
    localStorage.setItem("i", i);
  }
}

function mostrar(){
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
              '<p>Precio: '+serv.precio+'$</p>\n' +
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
  document.getElementById("list-items").innerHTML = "";
}

function editar(){
  let cambio = Number(window.prompt("Ingrese el id del producto que desea editar: ",""));
  for(let cont=0; cont<i; cont++){
    let service = JSON.parse(localStorage.getItem(`servicios${cont}`));
    if(service.id == cambio){
      let nom = document.getElementById("exampleInputName").value;
      let text = document.getElementById("exampleInputDescription").value;
      let pre = document.getElementById("exampleInputPrice").value;
      let imgn = document.getElementById("exampleInputImage").value;

      if(nom == "" && pre == "" && text == "" && imgn == ""){
        alert("No puedes agregar tarjetas vacias.");
      }else{
      var requisitos = new Object();
      requisitos.id = cambio;
      requisitos.nombre = nom;
      requisitos.precio = pre;
      requisitos.texto = text;
      requisitos.img = imgn; 

      var local = JSON.stringify(requisitos);
      localStorage.setItem(`servicios${cambio}`, local);
      console.log('local: ', JSON.parse(local));
      }
    }
  }
}

function eliminar(){
  let borrar = Number(window.prompt("Ingrese el id del producto que desea eliminar: ",""));
  for(let cont=0; cont<i; cont++){
    let service = JSON.parse(localStorage.getItem(`servicios${cont}`));
    if(service.id == borrar){
      localStorage.removeItem(`servicios${cont}`);
    }
  }
}