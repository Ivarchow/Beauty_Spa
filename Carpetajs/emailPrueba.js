function sendMail() {
  Email.send({
      Host : "smtp.mailtrap.io",
      Username : "818ba3fd56eb89",
      Password : "b674ef50bc59ff",
      To : 'rafael.salcedosandoval11@gmail.com',
      From : "rafael.salcedosandoval11@gmail.com",
      Subject : "Test email",
      Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  }).then(
    message => alert(message)
  );
  }