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


// this is the burron redirect to new user sign up
// const newUserbtnClick = document.querySelector('#new')
// newUserbtnClick.addEventListener('click', () => document.location.replace('/signup'))


console.log('Hit')