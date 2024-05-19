const express = require('express');
const adminRoutes = require('./routes/admin');
require('../db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);

module.exports = allRoutes;