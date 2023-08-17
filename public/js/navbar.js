

const aboutPage = async (event) => {
  event.preventDefault();
  document.location.replace("/about")
  console.log('click')
}

const home = async (event) => {
  event.preventDefault();
  document.location.replace("/")
  console.log('click')
}

const sourcesPage = async (event) => {
  event.preventDefault();
  document.location.replace("/sources")
  console.log('click')
}

const listPage = async (event) => {
  event.preventDefault();
  document.location.replace("/list")
  console.log('click')
}


document.querySelector("#list").addEventListener("click", listPage)
document.querySelector("#sources").addEventListener("click", sourcesPage)
document.querySelector('#about').addEventListener('click', aboutPage);
document.querySelector('#home').addEventListener('click', home);






