/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AdminSchema extends Schema {
  up() {
    this.create('admins', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .string('email', 255)
        .notNullable()
        .unique();
      table.string('password', 60).notNullable();
      table.string('tel', 20);
      table
        .integer('instituition_id')
        .unsigned()
        .references('id')
        .inTable('instituitions')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
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
    this.drop('admins');
  }
}

module.exports = AdminSchema;
