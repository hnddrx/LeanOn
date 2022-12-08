const mongoose  = require("mongoose");

//Schema
const PsychiatristSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:	String,
    password: String,
    profilePic: String,
    description: String,
    dayAvailable: String,
    timeAvailable: String,
    status: {type: String, default: 'Available'},
    appointments: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }
    ]
});

module.exports = mongoose.model('Psychiatrist', PsychiatristSchema);