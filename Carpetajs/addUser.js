// Se crea una variable para los usuarios Ejemplo: usuario${j} => usuario0 y se actualiza cada que se agrega un usuario.
//var j = localStorage.setItem("j", 0);
if(localStorage.getItem("j") != 0){
  if(localStorage.getItem("j") == null){
    localStorage.setItem("j", 0);
  }
  j = localStorage.getItem("j");
}else{
  j=0;
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
  let cumple = document.getElementById("InputBirth").value;
  let gender = document.getElementById("InputGender").value;
  let terms = document.getElementById("terms").checked;
  //Se cre una variable con la exprecion regular que validara a los correos
  let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if(!expReg.test(email)){                                    //Se verifica que el correo sea valido
    alert("Debes utilizar una cuenta de correo valida.");
  }if(pass != pass1){                                         //Se verifica que las contraseñas coincidan
    alert("Las contraseñas no coinciden.");
  }else if(pass.length < 8){                                  //Se verifica el largo de la contraseña
    alert("La contraseña debe tener al menos 8 carácteres.");
  }else if(phone.length < 8 || phone.length > 15){            //Se verifica que el numero de telefono este dentro del rango 
    alert("Número de telefono invalido");
  }else if(!terms){                                           //Se verifica que se acepten los términos y condiciones
    alert("Debes aceptar los términos y condiciones.");
  }else{

    // Si se cumplen las condiciones, las contraseñas se encriptan con base64
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
    user.gender = gender;
    user.cumple = cumple;
    user.img = "/images/logo/divinite3.png";

    // Con un bucle se busca usuario a usuario si el correo ya fue dado de alta, si es así la bandera cambia a true
    for(let cont=0; cont<j; cont++){
      let usuario = JSON.parse(localStorage.getItem(`usuario${cont}`));
      if(usuario != null){   //Esto previene que el programa se detenga si se borraron usuarios
        if(usuario.mail === user.mail){
          corr = true;
        }
      }
    }
    if(corr){  // Si la bandera es true da un alert
      alert("Cuenta con correo ya existente.");
    }else{
      // Si el correo no esta dado de alta, el objeto se convierte en formato JSON y se guarda en almacenamiento local
      var local = JSON.stringify(user);
      localStorage.setItem(`usuario${j}`, local);

      //Se da un alert avisando que se creo la cuenta
      alert("Cuenta creada satisfactoriamente");

      //Se incrementa el contador de usuarios y se actualiza en el almacenamiento local
      j++;
      localStorage.setItem("j", j);

      //Se redirecciona a la página principal
      location.href ="/PaginasHTML/PaginaDeInicio.html";
    }
  }
}