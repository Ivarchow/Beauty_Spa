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

//Código para la NavBar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
