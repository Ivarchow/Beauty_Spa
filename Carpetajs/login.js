document.getElementById("Login").addEventListener("click", login);

function login(){
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  //pass = btoa(pass);

  fetch('http://localhost:8081/ApiRest/User')  //link para el GET de todos los usuarios
  .then(respuesta => respuesta.json()) 
  .then(usuarios => {
      usuarios.forEach(usuario => {
        if(usuario != null){
          if(usuario.email === email && usuario.contraseña === pass){
            sessionStorage.setItem("j", usuario.cliente_id);
            location.href ="/PaginasHTML/PaginaDeInicio.html";
          }
        }
      });
  })
  .catch(error => console.log('Hubo un error : ' + error.message))
}