const router = require('express').Router();
// bring in user model to create new user when button is hit
const { User, Mail } = require('../models');
// calls in operators from sequelize
const { Op } = require("sequelize");
// we dont really need auth on the login page, however to use other parts we should as a requirement
const withAuth = require('../utils/auth');

// this post creates a new user and stores it in DB
router.post('/new', async (req, res) => {
  // NEED something to detect if a user has already registered  new user email
  // NEED to redirect user to newly created account login page
  console.log(req.body)
  console.log('hit new post')
  try {
    // the req.body can be passed in directly becuase it contains the vars that line up with User model
    const newUserData = await User.create(req.body);
    console.log(newUserData)

    req.session.save(() => {
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
router.post('/login', async (req, res) => {
  console.log(req.body);
  console.log('hit login post');
  try {
    // this will check for a user with that email adn grab the user object
    const loginUserData = await User.findOne({ where: { email: req.body.email } });
    if (!loginUserData) {
      res.status(400).json({ message: 'Bad email or password' });
      return;
    }
    // performs the User method of checkpassword on the password
    const passCheck = await loginUserData.checkPassword(req.body.password);

    if (!passCheck) {
      res.status(400).json({ message: 'Bad email or password' });
      return;
    }
    req.session.save(() => {
      // this id can be passed around to pull user specific data from DB
      req.session.user_id = loginUserData.id;
      req.session.logged_in = true;

      res.json({ user: loginUserData, message: 'Login successful' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/logout', (req, res) => {
  console.log('hit logout post')
  if (req.session.logged_in) {
    req.session.destroy(() => {
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
  if (!req.session.logged_in) {
    res.render('homepage',)
  } else {
    //redirects to profile if logged in
    res.redirect('/api/profile')
  }

})




router.get('/inbox', async (req, res) => {
  console.log('inbox working')
  // need to pass in user ID aswell
  // check for previous session
  if (req.session.logged_in) {

    // findbypk current user_i => grab email => mail.findall where: email => render message as if reciever
    const user = await User.findByPk(req.session.user_id);
    const mailBox = await Mail.findAll({
      where: {
        [Op.or]: [
          { reciever: user.dataValues.email },
          { sender: req.session.user_id }
        ]
      }
    });
    const mail = mailBox.map(item => item.get({ plain: true }))
    // check to see who sender is for rendering
    const modifiedMail = mail.map(obj => {
      if (obj.sender == req.session.user_id) {
        return { ...obj, sender: true }
      } else {
        return { ...obj, sender: false }
      }
    })
    console.log(modifiedMail)
    res.status(200).render('inbox', {
      modifiedMail,
      logged_in: true,
    });
  } else {
    res.redirect('/')
  }
})


// when new user button is hit, this load the newuser handlebars
// router.get('/signup', (req, res) => {
//   res.render('newuser', { layout: 'secondary'})
// })

router.get('/newuser', (req, res) => {
  console.log("newuser");
  res.render('newuser');
})

router.get('/', (req, res) => {
  console.log("homelogin");
  res.render('homepage');
})

router.get('/about', (req, res) => {
  console.log("about");
  res.render('about');
})

router.get('/contact', (req, res) => {
  console.log("contact");
  res.render('contact');
})













module.exports = router;