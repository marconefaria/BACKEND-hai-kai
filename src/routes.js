const { Router } = require('express');
const routes = Router();

const BookController = require("./controllers/BookController");
const CommentController = require("./controllers/CommentController");
const UserController = require("./controllers/UserController");

routes.post("/users", UserController.create);
routes.get("/users/:user_id", UserController.getById);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);

routes.post("/book", BookController.create);
routes.get("/book", BookController.getById);
routes.put("/book/:book_id", BookController.update);
routes.delete("/book/:book_id", BookController.delete);




routes.post("/comment", CommentController.create);
routes.get("/comment/:comment", CommentController.getById);
routes.put("/comment/:comment", CommentController.update);
routes.delete("/comment/:comment_id", CommentController.delete);

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Listening on port 3333' });
});

module.exports = routes;