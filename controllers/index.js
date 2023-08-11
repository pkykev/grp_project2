const router = require('express').Router();
const apiRoutes = require('./api');
// thjs is the landing page js with login in and create account info
const homeRoutes = require('./homeRoutes');



router.use('/', homeRoutes);

router.use('/api', apiRoutes);

module.exports = router;
