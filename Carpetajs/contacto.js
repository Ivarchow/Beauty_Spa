//Código para enviar correos

(function () {
  emailjs.init("user_nsfB75HsHb3gAeJ6RzBYc");
})();

function sendMail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    message: userMessage,
  };

  emailjs
    .send("service_l8t7c6q", "template_74px0yb", contactParams)
    .then(function (res) {});

  return true;
}

 function envi() {
  
  window.location.reload();
}



//formulario

