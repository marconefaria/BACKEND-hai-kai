const connection = require("../database/connection");

module.exports = {
    async create(comment){
        const result = await connection("comment").insert(comment);
        return result;
    },

    async getById(comment_id){
        const result = await connection("comment")
        .where({ comment_id })
        .select("*")
        .first();
        return result;
    },

    async updateById(comment_id, comment){
        const result = await connection("comment")
        .where({comment_id})
        .update(comment);
        return result;
    },

    async deleteById(comment_id){
        const result = await connection("comment")
        .where({ comment_id })
        .delete();
        return result;
    }
}