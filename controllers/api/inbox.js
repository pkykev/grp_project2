const router = require('express').Router();
const { Mail } = require('../../models');
const { User } = require('../../models');


router.get('/', async (req, res) => {
  console.log('inbox working')
  // need to pass in user ID aswell
  // check for previous session
  if (req.session.logged_in) {

    // findbypk current user_i => grab email => mail.findall where: email => render message as if reciever
    const user = await User.findByPk(req.session.user_id)
    const mailBox = await Mail.findAll({where: {reciever: user.dataValues.email}})
    console.log(user.dataValues.email)
    console.log(mailBox)

    res.render('inbox', {
      // passes the logged_in true to handlebars for use
      logged_in: req.session.logged_in,
    });
  } else {
    res.redirect('/')
  }
})

router.post('/test', async (req, res) => {
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
    res.status(200).json(newMail)
  } catch (err) {
    res.status(400).json(err)
  }
})


module.exports = router;