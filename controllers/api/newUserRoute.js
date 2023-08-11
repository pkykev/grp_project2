const router = require('express').Router();
const { User } = require('../../models');

// I believe is is the route /api/new
router.get('/new', (req,res)=>{
  res.render('newuser')
  console.log('new user route')
})





























module.exports = router;