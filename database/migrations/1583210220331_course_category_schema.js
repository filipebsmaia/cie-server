/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CourseCategorySchema extends Schema {
  up() {
    this.create('course_category', table => {
      table.increments();
      table
        .integer('course_id')
        .unsigned()
        .references('id')
        .inTable('courses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('course_category');
  }
}

module.exports = CourseCategorySchema;
