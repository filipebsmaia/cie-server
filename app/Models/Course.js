/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Course extends Model {
  categories() {
    return this.belongsToMany('App/Models/Category').pivotTable(
      'course_category'
    );
  }
}

module.exports = Course;
