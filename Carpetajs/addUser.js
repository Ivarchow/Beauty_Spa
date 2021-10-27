// document.getElementById("Crear").addEventListener("click", crear);


// var bandera=0;

// function crear(){
//   let nom = document.getElementById("InputName").value;
//   let phone = document.getElementById("InputPhone").value;
//   let email = document.getElementById("InputEmail").value;
//   let pass = document.getElementById("Show").value;
//   let pass1 = document.getElementById("Show1").value;
//   let cumple = document.getElementById("InputBirth").value;
//   let gender = document.getElementById("InputGender").value;
//   let terms = document.getElementById("terms").checked;
//   let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//   if(!expReg.test(email)){
//     alert("Debes utilizar una cuenta de correo valida.");
//   }if(pass != pass1){
//     alert("Las contraseñas no coinciden.");
//   }else if(pass.length < 8){
//     alert("La contraseña debe tener al menos 8 carácteres.");
//   }else if(phone.length < 8 || phone.length > 15){
//     alert("Número de telefono invalido");
//   }else if(!terms){
//     alert("Debes aceptar los términos y condiciones.");
//   }else{
//     // pass = btoa(pass);

//     var user = new Object();
//     user.cliente_id = 11;
//     user.cel = phone;
//     user.nombre = nom;
//     user.email = email;
//     user.contraseña = pass;
//     user.cumple = cumple;
//     user.genero = gender;
//     user.foto_perfil = "/images/logo/divinite3.png";
//     user.fecha_registro = "2021-10-26 00:00:00";
//     emailcomparacion(email);

//     let retardoFetchMain = setTimeout(()=>{
//       addusercomplete(user)
//       clearTimeout(retardoFetchMain);
//   },1000);

// }
// }

// function addusercomplete(User){

// if(bandera==1){
//   bandera=0;
//   console.log("paso 3 bandera añadir usuario deberia ser 0, valor: ", bandera);
//   fetch("http://localhost:8081/ApiRest/User", {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(User), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   .catch(error => console.error('Error:', error))
//   .then(response => console.log('Success:', response));
//   //sessionStorage.setItem("j", User.cliente_id );
//   //location.href ="/PaginasHTML/usuarioLogeado.html";
// }
// }

// async function emailcomparacion(confirmemail) {

//   try {
//       const respuestausuarios = await fetch("http://localhost:8081/ApiRest/User");
//       const jsonusuarios = await respuestausuarios.json();
//       console.log("dentro de comprobar el email");
//       jsonusuarios.forEach(jsonusuarios=>{
//         if(jsonusuarios != null){
//           if(jsonusuarios.email === confirmemail){
//             alert("correo con cuenta ya registrada");
//             console.log(" paso 1 bandera añadir usuario deberia ser 0, valor: ", bandera);
//             bandera=0;
//           }else{
//             bandera=1;
//             console.log("paso 2 bandera añadir usuario deberia ser 1, valor: ", bandera);
//           }
//         }
//       })
//   } catch (error) {
//       console.log(error);
//   } finally { }
// }


/************************************ */
var lastuser = Number(sessionStorage.getItem("last")) + 1;
document.getElementById("Crear").addEventListener("click", main);

function main(){
  count();
  let usr = crear();
  emailp(usr);
  //redirect();
}

function count(){
  fetch('http://localhost:8080/ApiRest/User')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuarios => {
          sessionStorage.setItem("last", usuarios.cliente_id);
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
  let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

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
    sessionStorage.setItem("j", user.cliente_id);
}

/*function redirect(){
  location.href = "/PaginasHTML/usuarioLogeado.html";
}*/