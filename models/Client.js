const mongoose = require('mongoose');

//Schema
const ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:	String,
    password: String,
    profilePic: String,
    address: String,
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
});

module.exports = mongoose.model('Client', ClientSchema);
