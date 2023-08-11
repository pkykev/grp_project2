const loginHand = (event) => {
  event.preventDefault();
  console.log('click')
  
  tester()
}


const tester = () =>
fetch('/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: 'project'})
})
.then(res =>
  res.json()
)
.then(data => console.log(data))





document
  .addEventListener('submit', loginHand);



console.log('Hit')