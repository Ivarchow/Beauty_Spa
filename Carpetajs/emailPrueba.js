const inputs = document.querySelector('form')
let aviso = document.getElementById("terminos").checked;

function sendEmail() {
 
  Email.send({
      Host : "smtp.mailtrap.io",
      Username : "71e4b9403ab5c0",
      Password : "f932ba1e05391f",
      To : "divinitebeautyspa@gmail.com",
      From : inputs.elements["email"].value,
      Subject : "Test email",
      
      Body:  inputs.elements["name"].value + " con el correo: "+ inputs.elements["email"].value+ " te envió el siguiente mensaje: "+"<br>" +inputs.elements["message"].value 
    }).then(message =>{
      let p;
      if(message!="OK"){
        p = document.getElementById('alert');
        p.removeAttribute("hidden")
        
        setTimeout(() => {
          window.location.reload();
         }, 4000);
      }else{
        console.log(message)
        p = document.getElementById('goodAlert')
        p.removeAttribute("hidden")
        
       setTimeout(() => {
        window.location.reload();
       }, 3000);
        
      }
    })
  }

/*const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "71e4b9403ab5c0",
    Password: "f932ba1e05391f",
    To: "divinitebeautyspa@gmail.com",
    From: inputs.elements["email"].value,
    Subject: "Contact Us Beauty Spa", 
    Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"]
  }).then(msg => alert("The email was successfully sent"))
})*/



//Código para enviar correos

/*(function () {
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
*/
 function envi() {
  
  window.location.reload();
}

