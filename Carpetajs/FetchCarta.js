window.onload=() =>{

    const URLS= [];
    const arrIds=[];
    const arrServicios=["nails","skin","pest","fac","pedi","makeup","estetica","massage"];
    
    main();
    
    function main(){
    
        generatorArrys();
        generatorCols();
        getCartas();
    }
    
    function generatorArrys(){
        for(let varCtlrGenerator = 1;varCtlrGenerator<=35;varCtlrGenerator++){
            let url = "http://localhost:3000/Servicios/" + varCtlrGenerator;
            URLS.push(url);
        }
        for(let varCtlrIdsCards=0; varCtlrIdsCards<=35;varCtlrIdsCards++){
            let ids = "carta" + varCtlrIdsCards;
            arrIds.push(ids);
        }
        console.log(arrIds);
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
    
    function getCartas(){
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
                            '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
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
    }
    };
    /*window.onload=() =>{
    
                    let col = document.createElement('div');
                    col.className = "col";
                    col.style.paddingBottom = "2%";
                    col.id = arrIds[varCtlrCards];
                    console.log(col);
                    document.getElementById(arrSErvicios[varCtlrService]).appendChild(col);  
    
    
                    let elemento = document.getElementById(col.id);
                elemento.innerHTML = 
                '<figure class="image-block" style="margin: auto;">\n' +
                    '<h1>'+ Servicios.titulo+'</h1>\n' +
                    '<img src="'+Servicios.img+'"/>\n' +
                    '<figcaption>\n' +
                        '<h3>\n' +
                            'Ver Más\n' +
                        '</h3>\n' +
                        '<div class="overflow-auto example" style="height: 250px; ">\n' +
                            '<p>Precio: '+Servicios.precio+'$</p>\n' +
                            '<p>'+Servicios.Descripcion+'</p>\n' +
                        '</div>\n' +
                        '<button>\n' +
                            'Reservar\n' +
                        '</button>\n' +
                    '</figcaption>\n' +
                '</figure>';
    
    
    
            }*/