const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");
const _ = require("lodash");


module.exports = {
    async create(book){
        const book_id = uuidv4();
        book.book_id = book_id;
        
        await connection("book").insert(book);
        return book_id;
    },

    async getById(book_id){
        const result = await connection("book")
        .where({ book_id })
        .select("*")
        .first();
        return result;
    },

    async getAll(book_id) {
        const result = await connection("book").where({ book_id }).select("*");
    
        return result;
    },    

    //Filtros são opcionais! se não der certo eu posso filtrar pelo front msm, é importante que os livros sejam mostrados e só!
    async getByIdWithFilters(book_id, {categoryName}){
        const filter = { "book.category_id": book_id };
        if (categoryName) filter["category.nome"] = categoryName;

        let livros = await connection("book")
            
            .where(filter)
            .select("book.*");

        livros.map((book) => book.book_id);
        livros = _.groupBy(livros, "book_id");

        return note;
    },

    async updateById(book_id, book){
        const result = await connection("book")
        .where({book_id})
        .update(book);
        return result;
    },

    async deleteById(book_id){
        const result = await connection("book")
        .where({ book_id })
        .delete();
        return result;
    }
}