document.getElementById("Login").addEventListener("click", login);

function login(){
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  //pass = btoa(pass);

  fetch('../CarpetaJson/users.json')  //link para el GET de todos los usuarios
  .then(respuesta => respuesta.json()) 
  .then(usuarios => {
      usuarios.forEach(usuario => {
        if(usuario != null){
          if(usuario.email === email && usuario.pass === pass){
            sessionStorage.setItem("j", usuario.id);
            location.href ="/PaginasHTML/PaginaDeInicio.html";
          }
        }
      });
      console.log("Credenciales invalidas")
  })
  .catch(error => console.log('Hubo un error : ' + error.message))
}