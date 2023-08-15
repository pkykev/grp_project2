


const sendMessage = async (event) => {
  event.preventDefault();

  const sendto = document.querySelector('#sendto').value.trim()
  const title = document.querySelector('#title').value.trim()
  const messagetxt = document.querySelector('#messagetxt').value.trim()
  console.log(sendto)
  console.log(title)
  console.log(messagetxt)
  const test = await fetch('/api/inbox/test', {
    method: 'POST',
    body: JSON.stringify({ sendto, title, messagetxt }),
    headers: { 'Content-Type': 'application/json' },
  });
}



  document.querySelector('#sendmessage').addEventListener('click', sendMessage)

