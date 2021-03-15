const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileControler');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Ongs

routes.get('/ongs', OngController.index);

routes.post('/ongs',  OngController.create);

//Incidents

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

//Profile

routes.get('/profile', ProfileControler.index);

//Sessions

routes.post('/sessions', SessionController.create);

module.exports = routes;