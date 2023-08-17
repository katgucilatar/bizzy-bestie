const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shopRoutes = require('./shopRoutes');

router.use('/users', userRoutes);
router.use('/shops', shopRoutes);

module.exports = router;