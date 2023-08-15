
const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const newUser = require('./newUserRoute')
const inbox = require('./inbox')
const profile = require('./profile');

router.use('/profile', profile);
router.use('/inbox', inbox)
// router.use('/new', newUser);
// router.use('/users', userRoutes);

module.exports = router;
