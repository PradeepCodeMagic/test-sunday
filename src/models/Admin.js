const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String
});

const Admin = mongoose.model('admins', adminSchema);

module.exports = Admin;