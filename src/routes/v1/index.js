const router = require('express').Router();

const adminRoute = require('./admin/adminRoute');

router.use('/admin', adminRoute);

module.exports = router;
