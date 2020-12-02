exports.up = function(knex) {
    return knex.schema.createTable("book_comment", function(table){
        table.string("book_id").notNullable();
        table
            .foreign("book_id")
            .references("book_id")
            .inTable("book")
            .onDelete("cascade");

        table.string("comment_id").notNullable();
        table
            .foreign("comment_id")
            .references("comment_id")
            .inTable("comment")
            .onDelete("cascade");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("book_comment");
};
