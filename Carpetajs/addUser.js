count();
var lastuser;
document.getElementById("Crear").addEventListener("click", main);

function main(){
  lastuser = sessionStorage.getItem("last");
  let usr = crear();
  emailp(usr);
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
  let nom = document.getElementById("InputName").value;
  let phone = document.getElementById("InputPhone").value;
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  let pass1 = document.getElementById("Show1").value;
  let cumple = document.getElementById("InputBirth").value;
  let gender = document.getElementById("InputGender").value;
  let terms = document.getElementById("terms").checked;
  let expReg =  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if(!expReg.test(email)){
    alert("Debes utilizar una cuenta de correo valida.");
  }if(pass != pass1){
    alert("Las contraseñas no coinciden.");
  }else if(pass.length < 8){
    alert("La contraseña debe tener al menos 8 carácteres.");
  }else if(phone.length < 8 || phone.length > 15){
    alert("Número de telefono invalido");
  }else if(!terms){
    alert("Debes aceptar los términos y condiciones.");
  }else{
    pass = btoa(pass);

    var user = new Object();
    user.cliente_id = lastuser;
    user.cel = phone;
    user.nombre = nom;
    user.email = email;
    user.contraseña = pass;
    user.cumple = cumple;
    user.genero = gender;
    user.foto_perfil = "/images/logo/divinite3.png";
    user.fecha_registro = "2021-10-26 00:00:00";
    return user;
  }
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
    sessionStorage.setItem("last", Number(user.cliente_id)+1);
    setTimeout(redirect, 1000);
}

function redirect(){
  location.href = "/PaginasHTML/usuarioLogeado.html";
}