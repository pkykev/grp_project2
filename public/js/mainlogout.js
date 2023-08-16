
// add logout feature here for the main html wrapper
const userLogout = async () => {
  const response = await fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(response.statusText);
  }
};

const userMail = async () => {
  const response = await fetch('/inbox', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/inbox')
  }
  else {
    console.log(error)
  }
};

const about = async (event) => {
  event.preventDefault();
  document.location.replace("/about")
  console.log('click')
}



document.querySelector('#about').addEventListener('click', about);
document.querySelector('.fa').addEventListener('click', userMail)
document.querySelector('#logout').addEventListener('click', userLogout)



// const logout = async () => {
//   // Make a POST request to destroy the session on the back end
//   const response = await fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     // If successfully logged out, redirect to the login page
//     document.location.replace('/login');
//   } else {
//     alert(response.statusText);
//   }
// };

// document.querySelector('#logout').addEventListener('click', logout);