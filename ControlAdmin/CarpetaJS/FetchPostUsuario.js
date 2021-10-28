/*const url = "http://localhost:8080/ApiRest/User";
const formEl = document.querySelector('.addPostUser');

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const formDataSerialized = Object.fromEntries(formData); 
  const jsonObject = formDataSerialized

try {
const response = await fetch(url, {
  method: 'POST',
  body: JSON.stringify(jsonObject),
  headers: {
    'Content-Type': 'application/json'
  },
});
const json = await response.json();
console.log(json);
} catch(e){
console.error(e); 
alert("There was an error");
}
});*/


// Create - Insert new user
//Method: POST

/*addPostUser.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:8080/ApiRest/User', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            cel: numTel.value,
            nombre: NombreUser.value,
            email: correo.value,
            cumple: inputBirth.value,
            genero: genero.value,
  })  
})
})*/

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


const addPostUser = document.querySelector('.addPostUser');

function crear(){
  let nom = document.getElementById("nombre-usuario").value;
  let phone = document.getElementById("tel'").value;
  let email = document.getElementById("correo").value;
  let cumple = document.getElementById("inputBirth").value;
  let gender = document.getElementById("gender").value;

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
