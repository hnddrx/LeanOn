//Express
const express = require('express');
const server = express();

//Port
const port = 8000;

//Imports
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

//Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/leanondb');

// Middleware
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

//Endpoint
server.get('/', ( request, response ) => {
    response.send(`Welcome to Lean On`);
});

//Routes
const AuthRouter = require('./routes/auth');
const ClientRouter = require('./routes/clients');
const PsychiatristRouter = require('./routes/psychiatrists');
const AppointmentRouter = require('./routes/appointments');

server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/clients', ClientRouter);
server.use('/api/v1/psychiatrists', PsychiatristRouter);
server.use('/api/v1/appointments', AppointmentRouter)
//Server
server.listen(
    port,
    () => {
        console.log(`Server running on port ${port}`);
    }
)
