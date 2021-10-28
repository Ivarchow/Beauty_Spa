count();
var lastuser; 
document.getElementById("guardarUser").addEventListener("click", main);
// var lastuser = Number(sessionStorage.getItem("last")) + 1;


function main(){
  lastuser = sessionStorage.getItem("last");
  let usr = crear();
  emailp(usr);
  //redirect();
}

function count(){
  fetch('http://localhost:8080/ApiRest/User')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
      usuarios.forEach(usuarios => {
        sessionStorage.setItem("last", Number(usuarios.cliente_id)+1);
      });
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
}

function crear(){
  let nom = document.getElementById("nombre").value;
  let phone = document.getElementById("tel").value;
  let email = document.getElementById("correo").value;
  let cumple = document.getElementById("inputBirth").value;
  let gender = document.getElementById("gender").value;

    var user = new Object();
    user.cliente_id = lastuser;
    user.cel = phone;
    user.nombre = nom;
    user.email = email;
    user.contraseña = "pass";
    user.cumple = cumple;
    user.genero = gender;
    user.foto_perfil = "/images/logo/divinite3.png";
    user.fecha_registro = "2021-10-26 00:00:00";
    return user;
  
}

function emailp(user){
  let bandera;
  fetch('http://localhost:8080/ApiRest/User')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuarios => {
          if(usuarios != null){
            if(usuarios.email === user.email){
              bandera = true;
            }
          }
        });
        if(bandera){
          alert("Correo con cuenta ya creada");
        }else{
          adduser(user);
        }
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
}

function adduser(user){
  fetch("http://localhost:8080/ApiRest/User", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    sessionStorage.setItem("j", user.cliente_id);
}








