const mongoose  = require("mongoose");

//Schema
const AppointmentSchema = new mongoose.Schema({
    clients: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    psychiatrists: {type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist'},
    payments: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
    answer: String,
    answerOne: String,
    answerTwo: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    scheduledDate: {type: String, default: "not yet scheduled"}
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
