const router = require('express').Router();
// bring in user model to create new user when button is hit
const { User } = require('../models');
// we dont really need auth on the login page, however to use other parts we should as a requirement
const withAuth = require('../utils/auth');

// this post creates a new user and stores it in DB
router.post('/new', async (req, res) => {
  console.log(req.body)
  console.log('hit new post')
  try {
    // the req.body can be passed in directly becuase it contains the vars that line up with User model
    const newUserData = await User.create(req.body);
    console.log(newUserData)

    req.session.save(()=>{
      // this can be passed around to call up info from the front end since
      req.session.user_id = newUserData.id;
      // creates a boolean for logged_in we can use to do certain things we want a user logged_in for
      req.session.logged_in = true;
      // sends back a 200 so they front end knows
      res.status(200).json(newUserData)
    });
  } catch (err) {
    // sends back 400 err and err data
    res.status(400).json(err);
  }
});


// login function
router.post('/login', async (req,res)=>{
  console.log(req.body);
  console.log('hit login post');
  try {
    // this will check for a user with that email adn grab the user object
    const loginUserData = await User.findOne({ where: {email: req.body.email}});
    if (!loginUserData) {
      res.status(400).json({ message: 'Bad email or password'});
      return;
    }
    // performs the User method of checkpassword on the password
    const passCheck = await loginUserData.checkPassword(req.body.password);

    if (!passCheck) {
      res.status(400).json({message: 'Bad email or password'});
      return;
    }
    req.session.save(()=>{
      req.session.user_id = loginUserData.id;
      req.session.logged_in = true;

      res.json({user: loginUserData, message: 'Login successful'});
    });
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/logout', (req,res)=>{
  console.log('hit logout post')
  if (req.session.logged_in) {
    req.session.destroy(()=>{
      // need to look up .end()
      res.status(204).end();
    });
  } else {
    res.status(404).end()
  }
})





// these are homeroutes where we can hit the login page
// route http://localhost:3001
router.get('/', (req, res) => {
  console.log('working')
  res.render('homepage',)

})






// when new user button is hit, this load the newuser handlebars
router.get('/signup', (req, res) => {
  res.render('newuser', { layout: 'secondary'})
})













module.exports = router;