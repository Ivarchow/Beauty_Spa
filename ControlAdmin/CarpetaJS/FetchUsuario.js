const tabla = document.querySelector('#Tabla-Usuarios tbody');

function cargarUsuarios(){
        fetch('http://localhost:8080/ApiRest/User')
        .then(respuesta => respuesta.json()) 
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.cliente_id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.cel}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.cumple}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();


/*                    <td>${usuario.servicio}</td>
                    <td>${usuario.hora}</td>
                    <td>${usuario.reservado}</td>
                    */

