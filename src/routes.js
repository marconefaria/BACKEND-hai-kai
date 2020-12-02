const { Router } = require('express');
const routes = Router();

routes.post('/users/', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Listening on port 3333' });
});

module.exports = routes;