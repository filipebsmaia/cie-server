/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StaffSchema extends Schema {
  up() {
    this.create('staff', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .string('email', 255)
        .notNullable()
        .unique();
      table.string('password', 60).notNullable();
      table.string('tel', 20);
      table
        .boolean('root')
        .defaultTo('false')
        .notNullable();
      table
        .integer('avatar_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps();
    });
  }

  down() {
    this.drop('staff');
  }
}

module.exports = StaffSchema;
