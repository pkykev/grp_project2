const loginHand = (event) => {
  event.preventDefault();
  console.log('click')
  
  tester()
}


const newUserbtn = () =>
fetch('/api/new', {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
const newUserbtnClick = document.querySelector('#new')

newUserbtnClick.addEventListener('click', newUserbtn)


const tester = () =>
fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: 'project'})
})






document
  .addEventListener('submit', loginHand);

console.log('Hit')