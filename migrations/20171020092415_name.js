
exports.up = function(knex, Promise) {
  return knex.schema.createTable('name', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.decimal('price').notNullable().defaultTo(1.00);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('name');
};
