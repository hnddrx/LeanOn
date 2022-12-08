const mongoose  = require("mongoose");

//Schema
const PaymentSchema = new mongoose.Schema({
   //name should be transaction 
   name: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
   appointment:{type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'},
   amount: Number,
   date: Date
});

module.exports = mongoose.model('Payment', PaymentSchema);
