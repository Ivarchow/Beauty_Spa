let j = localStorage.getItem("j");
let bandera = false;
document.getElementById("Login").addEventListener("click", login);

function login(){
  let email = document.getElementById("InputEmail").value;
  let pass = document.getElementById("Show").value;
  pass = btoa(pass);

  for(let cont=0; cont<j; cont++){
    let usuario = JSON.parse(localStorage.getItem(`usuario${cont}`));
    if(usuario.mail === email && usuario.password === pass){
      bandera = true;
    }
  }
  if(bandera){
    location.href ="../PaginasHTML/PaginaLogoInicio.html";
  }else{
    alert("Correo o contraseña invalidos");
  }
}