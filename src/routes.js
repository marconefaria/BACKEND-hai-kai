const express = require("express");
const routes = express.Router();
const auth = require("./middlewares/authentication");

const SessionController = require("./controllers/SessionController");

const BookController = require("./controllers/BookController");
const BookValidator = require("./validators/BookValidator");

const CommentController = require("./controllers/CommentController");

const UserController = require("./controllers/UserController");
const UserVallidator = require("./validators/UserValidator");

//Session
routes.post("/login", SessionController.signIn);

//Users
routes.post("/users", UserVallidator.create, UserController.create);
routes.get("/users/:user_id", UserVallidator.getById, UserController.getById);
routes.put("/users/:user_id", UserVallidator.update, UserController.update);
routes.delete("/users/:user_id", UserVallidator.delete, UserController.delete);

//Books
routes.post("/book", BookValidator.create, auth.authenticateToken, BookController.create);
routes.get("/book", BookValidator.getById, auth.authenticateToken, BookController.getById);
routes.put("/book/:book_id", BookValidator.update, auth.authenticateToken, BookController.update);
routes.delete("/book/:book_id", BookValidator.delete, auth.authenticateToken, BookController.delete);

//Comment
routes.post("/comment", CommentController.create);
routes.get("/comment/:comment", CommentController.getById);
routes.put("/comment/:comment", CommentController.update);
routes.delete("/comment/:comment_id", CommentController.delete);

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Listening on port 3333' });
});

module.exports = routes;