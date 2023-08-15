const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('inbox working')
  // need to pass in user ID aswell
  // check for previous session
  if (req.session.logged_in) {
    res.render('inbox', {
      // passes the logged_in true to handlebars for use
      logged_in: req.session.logged_in,
    });
  } else {
    res.redirect('/')
  }
})

router.post('/test', (req, res) => {
  console.log(req.body)
  console.log(req.session)
})


module.exports = router;