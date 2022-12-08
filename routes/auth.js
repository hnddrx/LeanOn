const express = require('express');
const router = express.Router();

// Models
const Client = require('../models/Client');
const Psychiatrist = require('../models/Psychiatrist');
const bcrypt = require('bcrypt');

//Register
//CLient
router.post('/Client/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( request.body.password, 10 );
    const newUser = new Client({
        ...request.body,
        password: hashedPassword
    });
    newUser.save().then( result => {
        response.send({ status: 'Client has been created' });
    });
});
router.post('/Psychiatrist/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( request.body.password, 5 );
    const newUser = new Psychiatrist({
        ...request.body,
        password: hashedPassword
    });
    newUser.save().then( result => {
        response.send({ status: 'Psychiatrist has been created' });
    });
});

router.get('/register', ( request, response ) => {
            response.status(405).send({
                status: 'Register with POST instead'
            })
});

//Login

//Client
router.post('/Client/login', ( request, response ) => {
    Client.findOne({ email: request.body.email }).then( result => {
        if(result === null){
            response.status(404).send({
                status : 'Not Found'
            })
        }else{
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            //Authenticate if the user is valid
            if( match ){
                response.status(200).send({ 
                    status: 'Client', 
                    id: result._id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    email: result.email
                });
            }
            else{
                response.status(406).send({
                    status:'Invalid credentials'
                });
            }    
        });
    }
    });
});
//Psychiatrist
router.post('/Psychiatrist/login', ( request, response ) => {
    Psychiatrist.findOne({ email: request.body.email }).then( result => {
        if(result === null){
            response.status(404).send({
                status : 'Not Found'
            })
        }else{
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            //Authenticate if the user is valid
            if( match ){
                response.status(200).send({ 
                    status: 'Psychiatrist', 
                    id: result._id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                });
            }
            else{
                response.status(406).send({
                    status:'Invalid credentials'
                });
            }    
        });
    }
    });
});

//BUG
router.get('/Client/logout', ( request, response ) => {
    response.status(405).send({status: 'You are logged out'});
});

router.post('/Psychiatrist/logout', ( request, response ) => {
    response.status(201).send({status: 'You are logged out'});
});

module.exports = router;