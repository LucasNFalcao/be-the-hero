const express = require('express');
const OngsControllers = require('./controllers/OngsController');
const IncidentControllers = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


/**routes.get('/ongs', async (resquest, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});*/


routes.post('/session', SessionController.create);

routes.get('/ongs', OngsControllers.list);
routes.post('/ongs', OngsControllers.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentControllers.list);
routes.post('/incidents', IncidentControllers.create);
routes.delete('/incidents/:id', IncidentControllers.delete);


/*Esse metódo serve para exportar uma variavel para fora do arquivo, nesse caso está exportando
a variavel responsaveis pelas rotas */
module.exports = routes;