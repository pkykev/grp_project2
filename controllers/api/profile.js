const router = require('express').Router();




router.get('/', (req, res) => {
  console.log('profile working')
  if (req.session.logged_in){
  res.render('profile',{
    logged_in: req.session.logged_in,
  });
  } else {
    res.redirect('/')
  }
})


module.exports = router;
