const { request } = require('express');
const express = require('express');
const router = express.Router();

//Model
const Client = require('../models/Client');

//GET
router.get('/:id', (request, response) => {
    Client.findOne(
        { email: request.params.email },
        { password: 0 }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});
router.get('/', (request, response) => {
    Client.find(
        { }
        )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(202).send( result );
        }
    });
});
//Appointments
//Add appointments to a client 
//See all appointments made by specific client
router.put('/:clientId/appointments/:appointmentId', ( request, response ) => {
    Client.updateOne(
        { _id: request.params.clientId }, 
        { $push: { appointments: request.params.appointmentId }}
    ).then( result => {
        if( result.modifiedCount === 1 ){
            response.status(202).send({ status: "Appointment has been added to Client" });
        }
    });
});
router.put('/:id', ( request, response ) => {
    const clientId = request.params.id;
    Client.updateOne(
        { _id: clientId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.status(200).send({ status: "Client has been updated" });
        }
    });
});
//GET Appointments of user
router.get('/:id/appointments', ( request, response ) => {
    Client
    .find(
            { _id: request.params.id },
            { appointments: 1 }
        )
    .populate('appointments', '-clients -__v')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(200).send( result );
        }
    });
});

// Delete a client account by id
router.delete('/:id', (request,response)=>{
    Client.deleteOne({_id: request.params.id})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.status(200).send({status:'Client removed'})
    } else {
        response.status(404).send({status:'This client is already deleted'})
        return 
        }
    })
});
module.exports = router;