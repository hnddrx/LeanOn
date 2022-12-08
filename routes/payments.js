const express = require('express');
const router = express.Router();
//Models
const Payment = require('../models/Payment');
//POST
router.post('/', (request, response) => {
    let addPayment = new Payment( request.body );
    addPayment.save().then( result => {
        response.status(200).send({ status: 'Paid' });
    });
});
//GET
router.get('/:id', (request, response)=>{
    Payment.findOne({ _id: request.params.id })
    .populate('clients', 'email')
    .populate('appointments', 'amount')
    .then( result => {
        if( typeof result === 'object' ){
            response.status(200).send( result );
        }
    });
})


module.exports = router;