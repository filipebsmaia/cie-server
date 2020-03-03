/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CourseSchema extends Schema {
  up() {
    this.create('courses', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .integer('instituition_id')
        .unsigned()
        .references('id')
        .inTable('instituitions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('courses');
  }
}

module.exports = CourseSchema;
