const router = require('express').Router();




router.get('/', (req, res) => {
  console.log('profile working')
  // need to pass in user ID aswell
  // check for previous session
  if (req.session.logged_in){
  res.render('inbox',{
    // passes the logged_in true to handlebars for use
    logged_in: req.session.logged_in,
  });
  } else {
    res.redirect('/')
  }
})


module.exports = router;