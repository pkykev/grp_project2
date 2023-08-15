

const about = async (event) => {
  event.preventDefault();
  document.location.replace("/about")
  console.log('click')
}

const home = async (event) => {
  event.preventDefault();
  document.location.replace("/")
  console.log('click')
}

document.querySelector('#about').addEventListener('click', about);
document.querySelector('#home').addEventListener('click', home);




