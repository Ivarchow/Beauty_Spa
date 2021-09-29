document.getElementById("Nueva-carta").addEventListener("submit", agregarCargta)

document.getElementById("mostrar-cartas").addEventListener("click", mostratCarta);

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
            addCarta(JSON.parse(local));
            i++;
            
        }
        
        function addCarta(item){
            const itemHTML = 

           ' <div class="row">\n' +
            '<div class="col-sm">\n' +         
              '<div class="card mb-3 h-100" style="max-width: auto; border-radius: 30px;">\n' +
              '<div class="row g-0">\n' +
                '<div class="col-md-4 tamañoimagenes centrarimagen ">\n' +
                  '<img src="/images/Seccion1/imagen1.jpeg" class="img-fluid rounded-start" >\n' +
                '</div>\n' +
                '<div class="col-md-8">\n' +
                 '<div class="card-body">\n' +
                    '<div class = "circleBag">\n' +  
                      '<i class="cp cp-shopping-bag" style="font-size: 30px; color: #d63031"></i></div>\n' +
                    '<h5 class="card-title">'+item.titulo+'</h5>\n' +
                    '<p class="card-text">'+item.precio+'</p>\n' +
                    '<p class="card-text global">'+item.descripcion+'</p>\n' +
                    '<div class="d-grid gap-2 col-6 mx-auto">\n' +
                   '</div>  \n' +        
                  '</div>\n' +
                '</div>\n' +
              '</div>\n' +
            '</div>\n' +
            '</div>';

            
            const itemsContainer = document.getElementById("list-items");
            itemsContainer.innerHTML += itemHTML;
        }


            function mostratCarta(){
                alert(localStorage.getItem("servicios"));
            }


       /* addItem({"name":"juice",
            'img':'https://www.gs1india.org/media/Juice_pack.jpg',
            'description':'Orange and Apple juice fresh and delicious'});
        
        addItem({'name':'Tayto',
            'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
            'description':'Cheese & Onion Chips'});
            
            {"id":2,"titulo":"uñas","precio":"200","descripcion":"fa"}
*/
        