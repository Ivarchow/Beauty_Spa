let j = sessionStorage.getItem("j");
//guardar / actualizar cambios
(function(){
  var usr = JSON.parse(localStorage.getItem(`usuario${j}`));
  var generoso = 0;
  if(usr.gender == "Mujer"){
    generoso = 1;
  }if(usr.gender == "Hombre"){
    generoso = 2;
  }if(usr.gender == "Otr@"){
    generoso = 3;
  }
  var nombre = document.getElementById("validationDefault01").value = usr.nombre;
  var fechaDeNacimiento = document.getElementById("validationDefault03").value = usr.cumple;
  var telefono = document.getElementById("validationDefault04").value = usr.phone;
  var correoElectronico = document.getElementById("validationDefault05").value = usr.mail;
  var genero = document.getElementById("dropGenero").value = generoso;
  var contraseña = document.getElementById("validationDefault06").value = atob(usr.password);
})();

document.getElementById("btnGuardarCambios").addEventListener("click",guardarCambios);
function guardarCambios(){
  let name = document.getElementById("validationDefault01").value;
  let birthdate = document.getElementById("validationDefault03").value;
  let phone = document.getElementById("validationDefault04").value;
  let email = document.getElementById("validationDefault05").value;
  let gender = document.getElementById("dropGenero").value;
  let contra = document.getElementById("validationDefault06").value;
  let profile = new Object();
  profile.id = j;
  profile.nombre = name;
  profile.phone = phone;
  profile.mail = email;
  profile.password = btoa(contra);
  profile.gender = gender;
  profile.cumple = birthdate;
  profile.img = "/images/logo/divinite3.png";
  var local = JSON.stringify(profile);
  localStorage.setItem(`usuario${j}`, local);
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

