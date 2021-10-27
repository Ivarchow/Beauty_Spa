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

"orden_id": 1,
        "orden_date": "2021-10-27 00:00:00",
        "fecha_reserva": "11/11/2021",
        "hora_reserva": "3:00",
        "cliente_id": {
            "cliente_id": 1,
            "cel": "3222638841",
            "nombre": "Candy Pacheco",
            "email": "Candy4@gmail.com",
            "contraseña": "sdverwetgerfq",
            "cumple": "15/08/1998",
            "genero": "M",
            "foto_perfil": " ",
            "fecha_registro": "2021-10-27 00:00:00"
        },
        "id": {
            "id": 2,
            "titulo": "GELISH FRANCÉS",
            "duracion": "60",
            "precio": "280",
            "img": " ",
            "descripcion": "APLICACIÓN DE ESMALTE SEMIPERMANENTE  EN BASE TRANSPARENTE DE UÑA NATURAL,  CON LA PUNTA EN COLOR BLANCO O  CUALQUIER OTRO COLOR DE LA GAMA",
            "categoria": "nails",
            "carrito": "0"
        
    })
  })  
  .then(respuesta => respuesta.json()) 
  .then((json) => json)
  .catch((error) => console.log(error));
})
*/
