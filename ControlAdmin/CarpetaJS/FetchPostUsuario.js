const addPostUser = document.querySelector('.addPostUser');

// Create - Insert new user
//Method: POST

addPostUser.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:8080/ApiRest/User', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({


    })
  })  
})