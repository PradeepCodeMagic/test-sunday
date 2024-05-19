const express = require('express');
const regAdmin = require('../controllers/admin/registerAdmin');
const readAdmin = require('../controllers/admin/readAdmin');

const adminRoutes = express.Router();

adminRoutes.post('/registeradmin', regAdmin);
adminRoutes.get('/readadmins', readAdmin);

module.exports = adminRoutes;