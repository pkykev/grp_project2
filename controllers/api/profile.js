const router = require('express').Router();
const jwt = require('jsonwebtoken')



router.get('/', (req, res) => {
  console.log('profile working')
  // check for previous session
  if (req.session.logged_in){
    // pass this ID around to grab specific user info from DB
    console.log(req.session.user_id)
  res.render('profile',{
    // passes the logged_in true to handlebars for use
    logged_in: req.session.logged_in,
  });
  } else {
    res.redirect('/')
  }
})


module.exports = router;
