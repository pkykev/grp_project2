
const newUserSubmit = async (event) => {
  // prevent reload so we can use JS for inputs
  event.preventDefault();
  // grabs fname and trims all spaces
  // these variable names are important to correspond with the user model so they can be passed direclty through req.body
  const fname = document.querySelector('#fname').value.trim();
  const lname = document.querySelector('#lname').value.trim();
  const email = document.querySelector('#newEmail').value.trim();
  const password = document.querySelector('#newPassword').value.trim();
  console.log('new click')
  console.log(fname)
  console.log(lname)
  console.log(email)
  console.log(password)
  if (fname && lname && email && password) {
    const response = await fetch('/new', {
      method: 'POST',
      body: JSON.stringify({ fname, lname, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // we can do stuff in here like set a req.session var to check for persistent logged in status
      console.log('we did it!')
    } else {
      console.log('give up we cant do this')
    }
  }
}

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


const homelogin = async (event) => {
  event.preventDefault();
  document.location.replace("/")
}

document.querySelector('#new').addEventListener('click', newUserSubmit);
document.querySelector('#homelogin').addEventListener('click', homelogin);


// this is the burron redirect to new user sign up
// const newUserbtnClick = document.querySelector('#new')
// newUserbtnClick.addEventListener('click', () => document.location.replace('/signup'))


console.log('Hit')