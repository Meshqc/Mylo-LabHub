import express from 'express';
const authRoutes = require('../api/auth');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;
