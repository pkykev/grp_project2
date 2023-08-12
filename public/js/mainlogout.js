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

document.querySelector('#logout').addEventListener('click', userLogout)