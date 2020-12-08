
exports.up = function(knex) {
    return knex.schema.createTable("category", function(table) {
        table.increments("category_id").primary().notNullable();
        table.string("nome").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("category");
};