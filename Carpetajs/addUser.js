// Se crea una variable para los usuarios Ejemplo: usuario${j} => usuario0 y se actualiza cada que se agrega un usuario.
//var j = localStorage.setItem("j", 0);
if(localStorage.getItem("j") != 0){
  j = localStorage.getItem("j");
}else{
  j = 0;
}

document.getElementById("Crear").addEventListener("click", crear);

// Funcion para crear usuarios
function crear(){
  // Se obtienen los valores del form
  let nom = document.getElementById("InputName").value;
  let phone = document.getElementById("InputPhone").value;
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  let pass1 = document.getElementById("Show1").value;

  // Se verifica que las contraseñas sean iguales y se manda mun alert si no lo son
  if(pass != pass1){
    alert("Las contraseñas no coinciden.");
  }if(pass.length < 8){  //se verifica el largo de la contraseña
    alert("La contraseña debe tener al menos 8 carácteres.");
  }else{

    // Si las las contraseñas cumplen las condiciones se encriptan con base64
    pass = btoa(pass);

    // Se crea una variable que servira como bandera para saber si un correo ya esta dado de alta
    var corr = false;

    // Se crea un objeto con los datos que se obtuvieron del form
    var user = new Object();
    user.id = j;
    user.nombre = nom;
    user.phone = phone;
    user.mail = email;
    user.password = pass;

    // Con un bucle se busca usuario a usuario si el correo ya fue dado de alta, si es así la bandera cambia a true
    for(let cont=0; cont<j; cont++){
      let usuario = JSON.parse(localStorage.getItem(`usuario${cont}`));
      if(usuario.mail === user.mail){
        corr = true;
      }
    }
    if(corr){  // Si la bandera es true da un alert
      alert("Cuenta con correo ya existente.");
    }else{
      // Si el correo no esta dado de alta, el objeto se convierte en formato JSON y se guarda en almacenamiento local
      var local = JSON.stringify(user);
      localStorage.setItem(`usuario${j}`, local);

      //Se da un alert avisando que se creo la cuenta y se redirige a otra página.
      alert("Cuenta creada satisfactoriamente");
      location.href ="../PaginasHTML/PaginaDeInicio.html";

      //Se incrementa el contador de usuarios y se actualiza
      j++;
      localStorage.setItem("j", j);
    }
  }
}