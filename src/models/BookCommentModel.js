const connection = require("../database/connection");

module.exports = {
    async create(comment){
        const result = await connection("comment").insert(comment);
        return result;
    },

    async getById({ comment_id, book_id }){
        const result = await connection("comment")
        .where({ comment_id, book_id })
        .select("*")
        .first();
        return result;
    }
}