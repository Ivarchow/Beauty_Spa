document.getElementById("Crear").addEventListener("click", crear);

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
    var corr = false;
    var usrid;

    var user = new Object();
    user.nombre = nom;
    user.phone = phone;
    user.mail = email;
    user.password = pass;
    user.gender = gender;
    user.cumple = cumple;
    user.img = "/images/logo/divinite3.png";

    fetch('../CarpetaJson/users.json')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuario => {
          if(usuario != null){
            if(usuario.email === user.mail){
              corr = true;
            }
          }
        });
        if(corr){
          alert("Cuenta con correo ya existente.");
        }else{
          var local = JSON.stringify(user);
          //fetch('localhost:8080/ApiRest/User/add') //link para el POST de un usuario
          //sessionStorage.setItem("j", );
          alert("Cuenta creada satisfactoriamente");
          location.href ="/PaginasHTML/usuarioLogeado.html";
        }
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
  }
}