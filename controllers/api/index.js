
const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const newUser = require('./newUserRoute')
const profile = require('./profile');

router.use('/profile', profile);
// router.use('/new', newUser);
// router.use('/users', userRoutes);

module.exports = router;
