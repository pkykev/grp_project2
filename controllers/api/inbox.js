const router = require('express').Router();
const { Mail } = require('../../models');
const { User } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body)
  const { reciever, title, messagetxt } = req.body
  console.log(reciever, title, messagetxt)
  console.log(req.session.user_id)
  try {
    const newMail = await Mail.create({
      reciever: reciever,
      title: title,
      messagetxt: messagetxt,
      sender: req.session.user_id
    })
    res.status(200)
  } catch (err) {
    res.status(400).json(err)
  }
})


module.exports = router;