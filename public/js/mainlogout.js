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

function userMail() {

  // probably need fetch for mail info from here
  document.location.replace('/api/inbox')
}


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