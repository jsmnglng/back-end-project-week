exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", tbl => {
    tbl.increments("_id");
    tbl.string("title", 55).notNullable();
    tbl.string("textBody").notNullable();
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .onUpdate("cascade")
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
