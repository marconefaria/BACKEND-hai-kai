
exports.up = function(knex) {
    return knex.schema.createTable("comment", function(table) {
        table.string('comment_id').primary().notNullable();
        table.string("book_id").notNullable();
        table.foreign("book_id").references("book_id").inTable("book").onDelete("cascade");
        table.string("user_id").notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.string("comment").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("comment");
};
