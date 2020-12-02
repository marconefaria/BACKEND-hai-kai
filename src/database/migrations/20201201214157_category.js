exports.up = function(knex) {
    return knex.schema.createTable("category", function(table) {
        table.increments("category_id").primary().notNullable();
        table.string("book_id").notNullable();
        table.foreign("book_id").references("book_id").inTable("book").onDelete("cascade");
        table.string("nome").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("category");
};