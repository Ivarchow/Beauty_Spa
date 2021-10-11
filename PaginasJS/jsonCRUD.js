//var i = localStorage.setItem("i", 0);
if(localStorage.getItem("i") != 0){
  i = localStorage.getItem("i");
}else{
  i = 0;
}
document.getElementById("Crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("eliminar").addEventListener("click", eliminar);

function crear(){
  let nom = document.getElementById("exampleInputName").value;
  let text = document.getElementById("exampleInputDescription").value;
  let pre = document.getElementById("exampleInputPrice").value;
  let imgn = document.getElementById("exampleInputImage").value;

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

function mostrar(){
  var j = localStorage.getItem("i");
  for(var cont=0; cont<j; cont++){
      var serv = JSON.parse(localStorage.getItem(`servicios${cont}`));
      const itemHTML = '<div class="col-4 col-md-4 col-sm-4>\n' +
          '       <div class="card" style="width: 18rem;">\n' +
          '           <img src="'+serv.img +'" class="card-img-top" alt="image">\n' +
          '           <div class="card-body">\n' +
          '               <h5 class="card-title">'+serv.nombre+'</h5>\n' +
          '               <p class="card-text">Precio: '+serv.precio+'</p>\n' +
          '               <p class="card-text">'+serv.texto+'</p>\n' +
          '           </div>\n' +
          '       </div>\n' + 
          '   </div>'
          '   <br>';
      const itemsContainer = document.getElementById("list-items");
      itemsContainer.innerHTML += itemHTML;
  }
}

function modificar(){
  /*localStorage.setItem("nombre", "David")
  localStorage.setItem("apellido", "Gordillo")*/
}

function eliminar(){
  /*localStorage.removeItem("nombre")
  localStorage.removeItem("apellido")*/
}