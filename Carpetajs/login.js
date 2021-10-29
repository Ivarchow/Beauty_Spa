document.getElementById("Login").addEventListener("click", login);

function login(){
  let bandera = false;
  let id;
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  pass = btoa(pass);

  fetch('http://localhost:8080/ApiRest/User')  //link para el GET de todos los usuarios
  .then(respuesta => respuesta.json()) 
  .then(usuarios => {
      usuarios.forEach(usuario => {
        if(usuario != null){
          if(usuario.email === email && usuario.contraseña === pass){
            bandera = true;
            id = usuario.cliente_id;
          }
        }
      });
      if(bandera){
        sessionStorage.setItem("last", Number(id)+1);
        location.href ="/PaginasHTML/PaginaDeInicio.html";
      }else{
        alert("credenciales invalidas")
      }
  })
  .catch(error => console.log('Hubo un error : ' + error.message))
}