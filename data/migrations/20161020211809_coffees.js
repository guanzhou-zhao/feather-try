
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('coffees', table => {
    table.increments('id').primary()
    table.string('name')
    table.date('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coffees')
};
