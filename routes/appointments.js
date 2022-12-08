const express = require('express');
const router = express.Router();
//Models
const Appointment = require('../models/Appointment');
//GET
router.post('/', ( request, response ) => {
    let addAppointment = new Appointment( request.body );
    addAppointment.save().then( result => {
        response.status(200).send({ status: 'You added new Appointment' });
    });
});
//Get Appointment by id
router.get('/:id', ( request, response ) => {
    Appointment.findOne({ _id: request.params.id })
    .populate('clients', 'email')
    .populate('psychiatrists', 'email')
    .then( result => {
        if( typeof result === 'object' ){
            response.status(200).send( result );
        }
    });
});
router.get('/', (request, response) => {
    Appointment.find(
        { }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});

//Update Appointment
router.put('/:id', ( request, response ) => {
    const appointmentId = request.params.id;
    Appointment.updateOne(
        { _id: appointmentId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "Appointment has been updated" });
        }
    });
});
//Delete appointment
router.delete('/:id', (request,response)=>{
    Appointment.deleteOne({_id: request.params.id})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.status(200).send({status:'Appointment removed'})
    } else {
        response.status(404).send({status:'This Appointment is already deleted'})
        return 
        }
    })
});

module.exports = router;