const express = require('express');
const router = express.Router();
//Model
const Psychiatrist = require('../models/Psychiatrist');
 
//GET
router.get('/:id', (request, response) => {
    Psychiatrist.findOne(
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
    Psychiatrist.find(
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
router.put('/:doctorId/appointments/:appointmentId', ( request, response ) => {
    Psychiatrist.updateOne(
        { _id: request.params.doctorId }, 
        { $push: { appointments: request.params.appointmentId }}
    ).then( result => {
        if( result.modifiedCount === 1 ){
            response.status(202).send({ status: "Psychiatrist has been added to Client" });
        }
    });
});

//GET Appointments of user
router.get('/:id/appointments', ( request, response ) => {
    Psychiatrist
    .find(
            { _id: request.params.id },
            { appointments: 1 }
        )
    .populate('appointments', '-psychiatrists -__v')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.status(200).send( result );
        }
    });
});
// Delete a client account by id
router.delete('/:id', (request,response)=>{
    Psychiatrist.deleteOne({_id: request.params.id})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.status(200).send({status:'Psychiatrist removed'})
    } else {
        response.status(404).send({status:'This client is already deleted'})
        return 
        }
    })
});
module.exports = router;