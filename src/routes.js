const { Router } = require('express');
const routes = Router();

const BookController = require("./controllers/BookController");
const CategoryController = require("./controllers/CategoryController");
const CommentController = require("./controllers/CommentController");
const UserController = require("./controllers/UserController");

routes.post('/users/', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Listening on port 3333' });
});

module.exports = routes;