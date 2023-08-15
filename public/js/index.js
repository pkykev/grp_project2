const loginSubmit = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#loginEmail').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();

  console.log('login click')
  console.log(email)
  console.log(password)
  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('login good!');
      document.location.replace('/api/profile')
    } else {
      // put any alert or however yuo want to notify user wrong info here
      console.log('give up, login failed')
    }
  }
}


//New user page
const newuser = async (event) => {
  event.preventDefault();
  document.location.replace("/newuser")
  console.log('click')
}


document.querySelector('#newuser').addEventListener('click', newuser);
document.querySelector('#login').addEventListener('click', loginSubmit);

console.log('Hit')