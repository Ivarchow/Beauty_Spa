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
                    <td>${usuario.codigo}</td>
                    <td>${usuario.codigoC}</td>
                    <td>${usuario.cel}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.cumple}</td>
                    <td>${usuario.servicio}</td>
                    <td>${usuario.hora}</td>
                    <td>${usuario.reservado}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();


