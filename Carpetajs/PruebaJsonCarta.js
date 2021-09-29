document.getElementById("Nueva-carta").addEventListener("submit", agregarCargta)

var i = 0;
        function agregarCargta(event){
          event.preventDefault();
          
          var titulouser = document.getElementById("titulo").value;
          var preciouser = document.getElementById("precio").value;
          var descripcionuser = document.getElementById("descripcion").value;

          var datosCarta = new Object();
          
          datosCarta.id = i;
          datosCarta.titulo = titulouser;
          datosCarta.precio = preciouser;
          datosCarta.descripcion = descripcionuser;
          

          var stored = localStorage.getItem("servicios");

          var local = JSON.stringify(datosCarta);

            if(stored == "" || stored == null){
              localStorage.setItem("servicios", local);
            }
/*ACUMULA LOS SERVICIOC O CARTAS*/
            else if(stored != local){
              stored = stored + ", " + local;
              localStorage.setItem("servicios", stored);
            }
            console.log('servicios: ', JSON.parse(local));
            i++;
            addItem(JSON.parse(local));
        }


       function addItem(item){
            const itemHTML = '<div class="card" style="width: 18rem;">\n' +
                '    <img src="/images/Seccion1/imagen1.jpeg" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+item.titulo+'</h5>\n' +
                '        <h5 class="card-title">PRECIO: '+item.precio+'</h5>\n' +
                '        <p class="card-text">'+item.descripcion+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
            const itemsContainer = document.getElementById("list-items");
            itemsContainer.innerHTML += itemHTML;
        }
        
        function addCarta(item){
            const itemHTML = item.titulo
            const itemsContainer = document.getElementById("titulo1");
            itemsContainer.innerHTML += itemHTML;

        }



       /* addItem({"name":"juice",
            'img':'https://www.gs1india.org/media/Juice_pack.jpg',
            'description':'Orange and Apple juice fresh and delicious'});
        
        addItem({'name':'Tayto',
            'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
            'description':'Cheese & Onion Chips'});
            
            {"id":2,"titulo":"uñas","precio":"200","descripcion":"fa"}
*/
        