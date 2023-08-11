const router = require('express').Router();
// we dont really need auth on the login page, however to use other parts we should as a requirement
const withAuth = require('../utils/auth');


const testObj = {
  test: 'Work',
  test2: 'plz',
}

router.post('/', async (req, res) => {
  try {
    console.log('hit projeeeeect post')
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});


// these are homeroutes where we can hit the login page
// route http://localhost:3001
router.get('/', (req, res) => {
  console.log('working')
  res.render('homepage',)

})












module.exports = router;