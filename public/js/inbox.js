


const sendMessage = async (event) => {
  // need to set vals to empty strings after sending
  event.preventDefault();

  const reciever = document.querySelector('#sendto').value.trim()
  const title = document.querySelector('#title').value.trim()
  const messagetxt = document.querySelector('#messagetxt').value.trim()
  console.log(reciever)
  console.log(title)
  console.log(messagetxt)
  const test = await fetch('/api/inbox/test', {
    method: 'POST',
    body: JSON.stringify({ reciever, title, messagetxt }),
    headers: { 'Content-Type': 'application/json' },
  });
}



  document.querySelector('#sendmessage').addEventListener('click', sendMessage)

