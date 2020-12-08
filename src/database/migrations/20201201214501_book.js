
exports.up = function(knex) {
    return knex.schema.createTable("book", function(table) {
        table.string('book_id').primary().notNullable();
        table.string("comment_id").notNullable();
        table.foreign("comment_id").references("comment_id").inTable("comment").onDelete("cascade");
        table.string("category_id").notNullable();
        table.foreign("category_id").references("category_id").inTable("category").onDelete("cascade");
        table.string("titulo").notNullable();
        table.string("autor").notNullable();
        table.string("resumo").notNullable();
        table.string("imagem").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("book");
};
