
    const URLS= [];
    const arrIds=[];
    const arrServicios=["nails","skin","pest","fac","pedi","makeup","estetica","massage"];

    window.onload=() =>{   
    main();
    };

    function main(){
        let banderArrays=0;
        countServicesLenght();
        //generatorArrys(35);
        if(banderArrays==1){
            countServices();
        }
        
        //generatorCols();
        //getCartas();
    }
    
    function generatorArrys(tamañoJson){
        for(let varCtlrGenerator = 1; varCtlrGenerator<=tamañoJson; varCtlrGenerator++){
            let url = "http://localhost:3000/Servicios/" + varCtlrGenerator;
            let ids = "carta" + varCtlrGenerator;
            URLS.push(url);
            arrIds.push(ids);
        }
        console.log(arrIds);
        console.log(URLS);
        banderArrays=1;
    }

function countServicesLenght(){
        let Jsonlength=0;
        fetch("http://localhost:3000/Servicios")
        .then(response1 => response1.json())
        .then(TodosLosServicios =>{

                Jsonlength = Object.keys(TodosLosServicios).length;
                console.log(Jsonlength);
                generatorArrys(Jsonlength);
        })
        .catch(err1 => console.log(err1));
}

function countServices(){
        let Servicio1=0,Servicio2=0,Servicio3=0,Servicio4=0,Servicio5=0,Servicio6=0,Servicio7=0,Servicio8=0;
    
        for(let varCtrlFetch=0;varCtrlFetch<URLS.length;varCtrlFetch++ ){
    
        fetch(URLS[varCtrlFetch])
        .then(response => response.json())
        .then(Servicios =>{

            if(Servicios.Categoria == "Unas"){
                Servicio1++;
                console.log(Servicio1);
            }
            if(Servicios.Categoria == "Cuidado de la piel"){
                Servicio2++;
                console.log(Servicio2);
            }
            if(Servicios.Categoria == "Pestañas y cejas"){
                Servicio3++;
                console.log(Servicio3);
            }
            if(Servicios.Categoria == "Faciales"){
                Servicio4++;
                console.log(Servicio4);
            }
            if(Servicios.Categoria == "Pedicure y manicure"){
                Servicio5++;
                console.log(Servicio5);
            }
            if(Servicios.Categoria == "Maquillaje"){
                Servicio6++;
                console.log(Servicio6);
            }
            if(Servicios.Categoria == "Estetica"){
                Servicio7++;
                console.log(Servicio7);
            }
            if(Servicios.Categoria == "Masajes"){
                Servicio8++;
                console.log(Servicio8);
            }
        })
        .catch(err => console.log(err));
    } 
}
    
    function generatorCols(){
        
            let varCtrlCols=1, varCtlrContinue=5;
            
        for(let varCtlrService=0; varCtlrService < arrServicios.length; varCtlrService++ ){
    
            console.log(arrServicios[varCtlrService]);
    
            for(varCtrlCols; varCtrlCols<= varCtlrContinue ; varCtrlCols++ ){
                let col = document.createElement('div');
                col.className = "col";
                col.style.paddingBottom = "2%";
                col.id = arrIds[varCtrlCols];
                console.log(col);
                document.getElementById(arrServicios[varCtlrService]).appendChild(col.cloneNode(false));
                
            }
            varCtrlCols = varCtlrContinue+1;
            varCtlrContinue = varCtlrContinue+5;
            if(varCtlrContinue>50){
                varCtrlCols=1;
                varCtlrContinue=5;
            }
        }
    }


    
/*    function getCartas(){
        let varCtlrCards=1;
    
        for(let varCtrlFetch=0;varCtrlFetch<URLS.length;varCtrlFetch++ ){
    
        fetch(URLS[varCtrlFetch])
        .then(response => response.json())
        .then(Servicios =>{
    
                if(Servicios.Categoria=="Unas"){
                    let elemento = document.getElementById(arrIds[varCtlrCards]);
                    elemento.innerHTML = 
                    '<figure class="image-block" style="margin: auto;">\n' +
                        '<h1>'+ Servicios.titulo+'</h1>\n' +
                        '<img src="'+Servicios.img+'"/>\n' +
                        '<figcaption>\n' +
                            '<h3>\n' +
                                'Ver Más\n' +
                            '</h3>\n' +
                            '<div class="overflow-auto example" style="height: 200px; ">\n' +
                                '<p>Precio: '+Servicios.precio+'$</p>\n' +
                                '<p>'+Servicios.Descripcion+'</p>\n' +
                            '</div>\n' +
                            '<button>\n' +
                                'Reservar\n' +
                            '</button>\n' +
                        '</figcaption>\n' +
                    '</figure>';
                    varCtlrCards++;
                }
            if(Servicios.Categoria=="Cuidado de la piel"){
                let elemento1 = document.getElementById(arrIds[varCtlrCards]);
                elemento1.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Pestañas y cejas"){
                let elemento2 = document.getElementById(arrIds[varCtlrCards]);
                elemento2.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Faciales"){
                let elemento3 = document.getElementById(arrIds[varCtlrCards]);
                elemento3.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Pedicure y manicure"){
                let elemento4 = document.getElementById(arrIds[varCtlrCards]);
                elemento4.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Maquillaje"){
                let elemento5 = document.getElementById(arrIds[varCtlrCards]);
                elemento5.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Estetica"){
                let elemento6 = document.getElementById(arrIds[varCtlrCards]);
                elemento6.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
            if(Servicios.Categoria=="Masajes"){
                let elemento7 = document.getElementById(arrIds[varCtlrCards]);
                elemento7.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 200px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
                varCtlrCards++;
            }
        })
        .catch(err => console.log(err));
    }
}*/