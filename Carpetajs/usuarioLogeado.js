let j = sessionStorage.getItem("last");
//guardar / actualizar cambios
(function(){
  fetch(`http://localhost:8080/ApiRest/User/${j-1}`) //link para el GET de todos los usuarios
  .then(respuesta => respuesta.json())
  .then(usuario => {
    var usr = usuario;
    var generoso;
    if(usr.genero == "Mujer"){
      generoso = 1;
    }if(usr.genero == "Hombre"){
      generoso = 2;
    }if(usr.genero == "Otr@"){
      generoso = 3;
    }
    document.getElementById("validationDefault01").value = usr.nombre;
    document.getElementById("validationDefault03").value = usr.cumple;
    document.getElementById("validationDefault04").value = usr.cel;
    document.getElementById("validationDefault05").value = usr.email;
    document.getElementById("dropGenero").value = generoso;
    document.getElementById("validationDefault06").value = atob(usr.contraseña);
    document.getElementById("photo").setAttribute('src',usr.foto_perfil);
  });
})();

document.getElementById("btnGuardarCambios").addEventListener("click",guardarCambios);

function guardarCambios(){
  let name = document.getElementById("validationDefault01").value;
  let birthdate = document.getElementById("validationDefault03").value;
  let phone = document.getElementById("validationDefault04").value;
  let email = document.getElementById("validationDefault05").value;
  let gender = document.getElementById("dropGenero").value;
  let contra = document.getElementById("validationDefault06").value;
  let img = document.getElementById("photo").src;
  var genero;
    if(gender == 1){
      genero = "Mujer";
    }if(gender == 2){
      genero = "Hombre";
    }if(gender == 3){
      genero = "Otr@";
    }
  let profile = new Object();
  profile.cliente_id = Number(j)-1;
  profile.cel = phone;
  profile.nombre = name;
  profile.email = email;
  profile.contraseña = btoa(contra);
  profile.cumple = birthdate;
  profile.genero = genero;
  profile.foto_perfil = img;
  profile.fecha_registro = "2021-10-26 00:00:00";
  actualizardatos(profile);
}

//guardar / actualizar cambios

//Declarando HTML elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//cuando se pase el puntero arriba de la imagen

imgDiv.addEventListener('mouseenter',function(){
  uploadBtn.style.display="block"
});

//si se pasa el cursor fuera de la img

imgDiv.addEventListener('mouseleave',function(){
  uploadBtn.style.display="none"
});

//funcionalidad para subir foto de perfil

file.addEventListener('change',function(){
  //esto se refiere al archivo
  const choosedFile = this.files[0];

  if (choosedFile) {

    const reader = new FileReader();
    //FileReader es una funcion predefinida en JS

    reader.addEventListener('load',function(){
      img.setAttribute('src',reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }

});

//display password
  function viewpassword(){
    var show = document.getElementById('validationDefault06')
      if(show.type =='password'){show.type='text';}
      else{show.type='password';}
  }
function actualizardatos(nuevainfo){

  fetch("http://localhost:8080/ApiRest/User", {
    method: 'PUT', // or 'POST'
    body: JSON.stringify(nuevainfo), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  alert("datos guardados");

}