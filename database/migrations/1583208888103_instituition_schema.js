/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InstituitionSchema extends Schema {
  up() {
    this.create('instituitions', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('initials', 32).notNullable();
      table.string('email').notNullable();
      table.string('contact_email').notNullable(); // Mover para Instituition Options
      table
        .integer('logo_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.string('student_suffix_mail').notNullable();
      table.string('teacher_suffix_mail').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('instituitions');
  }
}

module.exports = InstituitionSchema;
