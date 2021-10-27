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

    var user = new Object();
    user.cliente_id = 6;
    user.cel = phone;
    user.nombre = nom;
    user.email = email;
    user.contraseña = pass;
    user.cumple = cumple;
    user.genero = gender;
    user.foto_perfil = "/images/logo/divinite3.png";
    user.fecha_registro = "2021-10-26 00:00:00";
    //var local = JSON.stringify(user);

    /*fetch('http://localhost:8080/ApiRest/User')  //link para el GET de todos los usuarios
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuario => {
          if(usuario != null){
            if(usuario.email === user.email){
              alert("correo con cuenta ya registrada");
            }
          }
        });
        return false
    })
    .catch(error => console.log('Hubo un error : ' + error.message))*/

    //var local = JSON.stringify(user);
    //sessionStorage.setItem("j", );
    /*alert("Cuenta creada satisfactoriamente");
    location.href ="/PaginasHTML/usuarioLogeado.html";*/

    fetch("http://localhost:8081/ApiRest/User", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
}