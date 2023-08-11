const router = require('express').Router();
// we dont really need auth on the login page, however to use other parts we should as a requirement
const withAuth = require('../utils/auth');


// these are homeroutes where we can hit the login page
// route http://localhost:3001
router.get('/', (req, res)=>{
  console.log('Hit')
  res.json('Hit')
})















module.exports = router;