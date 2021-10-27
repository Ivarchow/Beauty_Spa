const url = "http://localhost:8080/ApiRest/Order";
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
});






/*const addPostUser = document.querySelector('.addPostUser');
const NombreUser = document.getElementById('Nombre-usuario');
const numTel = document.getElementById('tel');
const correo = document.getElementById('correo');
const servicio = document.getElementById('servicio');
const fecha = document.getElementById('fecha');
const horario = document.getElementById('horario');

// Create - Insert new user
//Method: POST

addPostUser.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:8080/ApiRest/Order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({


    })
  })  
  .then(respuesta => respuesta.json()) 
  .then((json) => json)
  .catch((error) => console.log(error));
})
*/
