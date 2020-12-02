const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port  = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('Server listening on port: '+ port);
})

//Métodos HTTP
//GET    -> usa quando vai buscar uma informação, como listar usuários, etc.
//POST   -> quando cria uma informação como no cadastro de usuário e produtos
//PUT    -> editar um recurso da aplicação
//DELETE -> deletar um recurso

//Tipos de parâmetros:
// Query Params: request.query  (Filtros, ordenação, paginação...) usados no método get, são incorporados na url usados em buscas acessíveis
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro) usado no post e put, envia informações pelo corpo da requisição