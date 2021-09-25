//Código para enviar correos

(function() {
  emailjs.init("user_t1a6wx7VdPYfvD9S7Q9cw");
  })();

function sendMail(){
   let fullName = document.getElementById("name").value;
   let userEmail = document.getElementById("email").value;
   let userMessage = document.getElementById("message").value;
  
   var contactParams ={
     from_name: fullName,
     from_email: userEmail,
     message : userMessage
   };
  emailjs.send("service_36z2izv","template_266mkfa", contactParams).then (function(res){}) 
}

//Código para la NavBar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

