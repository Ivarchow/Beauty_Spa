//Declarando HTML elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//cuando se pase el puntero arriba de la imagen

imgDiv.addEventListener('mouseenter',function(){
  uploadBtn.style.display="block"
});

//si se pasa el cursor fuera de la img

imgDiv.addEventListener('mouseleave',function(){
  uploadBtn.style.display="none"
});

//funcionalidad para subir foto de perfil

file.addEventListener('change',function(){
  //esto se refiere al archivo
  const choosedFile = this.files[0];

  if (choosedFile) {

    const reader = new FileReader();
    //FileReader es una funcion predefinida en JS

    reader.addEventListener('load',function(){
      img.setAttribute('src',reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }

});
